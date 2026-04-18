import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(dto: LoginDto): Promise<{
        token: string;
        user: {
            id: string;
            name: string;
            email: string;
            phoneNumber: string;
            franchiseeName: string;
            gstin: string;
            createdAt: Date;
        };
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<Record<string, string>>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
