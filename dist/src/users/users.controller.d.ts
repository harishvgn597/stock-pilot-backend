import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
        franchiseeName: string;
        gstin: string;
        createdAt: Date;
    }>;
}
