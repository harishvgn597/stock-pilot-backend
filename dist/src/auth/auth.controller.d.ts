import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
        franchiseeName: string;
        gstin: string;
        createdAt: Date;
    }>;
}
