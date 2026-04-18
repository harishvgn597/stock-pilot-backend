import { Injectable, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
import { randomBytes } from 'crypto';
import { createTransport } from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.password !== dto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    const { password, resetToken, resetTokenExpiry, ...userInfo } = user;
    return {
      token,
      user: userInfo,
    };
  }

  // POST /auth/forgot-password
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    // Always return success to avoid email enumeration
    if (!user) {
      return { message: 'If that email exists, a reset link has been sent.' };
    }

    const rawToken = randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

    await this.prisma.user.update({
      where: { id: user.id },
      data: { resetToken: rawToken, resetTokenExpiry: expiry },
    });

    const resetUrl = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/reset-password?token=${rawToken}`;

    // Send email if SMTP is configured
    if (process.env.SMTP_HOST) {
      const transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: user.email,
        subject: 'Stock Pilot — Password Reset',
        html: `
          <p>Hi ${user.name},</p>
          <p>Click the link below to reset your password. This link expires in <strong>1 hour</strong>.</p>
          <p><a href="${resetUrl}">${resetUrl}</a></p>
          <p>If you did not request this, please ignore this email.</p>
        `,
      });
    }

    // In development (no SMTP), return the token directly so it can be tested
    const response: Record<string, string> = {
      message: 'If that email exists, a reset link has been sent.',
    };
    if (!process.env.SMTP_HOST) {
      response['debug_resetUrl'] = resetUrl;
    }
    return response;
  }

  // POST /auth/reset-password
  async resetPassword(dto: ResetPasswordDto) {
    const user = await this.prisma.user.findFirst({
      where: { resetToken: dto.token },
    });

    if (!user || !user.resetTokenExpiry) {
      throw new BadRequestException('Invalid or expired reset token.');
    }

    if (new Date() > user.resetTokenExpiry) {
      throw new BadRequestException('Reset token has expired. Please request a new one.');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        password: dto.newPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return { message: 'Password has been reset successfully. You can now log in.' };
  }
}
