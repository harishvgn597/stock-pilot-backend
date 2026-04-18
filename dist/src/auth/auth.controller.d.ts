import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
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
