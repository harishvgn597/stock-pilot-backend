var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { randomBytes } from 'crypto';
import { createTransport } from 'nodemailer';
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(dto) {
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
    async forgotPassword(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user) {
            return { message: 'If that email exists, a reset link has been sent.' };
        }
        const rawToken = randomBytes(32).toString('hex');
        const expiry = new Date(Date.now() + 60 * 60 * 1000);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { resetToken: rawToken, resetTokenExpiry: expiry },
        });
        const resetUrl = `${process.env.FRONTEND_URL ?? 'http://localhost:3000'}/reset-password?token=${rawToken}`;
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
        const response = {
            message: 'If that email exists, a reset link has been sent.',
        };
        if (!process.env.SMTP_HOST) {
            response['debug_resetUrl'] = resetUrl;
        }
        return response;
    }
    async resetPassword(dto) {
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
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map