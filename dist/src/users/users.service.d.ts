import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
        franchiseeName: string;
        gstin: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
        franchiseeName: string;
        gstin: string;
        createdAt: Date;
    } | null>;
    create(dto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
        franchiseeName: string;
        gstin: string;
        createdAt: Date;
    }>;
}
