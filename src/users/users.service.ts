import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // GET /users — return all users (excluding password)
  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        franchiseeName: true,
        gstin: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // GET /users/:id — return a single user by ID
  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        franchiseeName: true,
        gstin: true,
        createdAt: true,
      },
    });
  }

  // POST /users — create a new user
  async create(dto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException(`User with email ${dto.email} already exists`);
    }

    return this.prisma.user.create({
      data: dto,
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        franchiseeName: true,
        gstin: true,
        createdAt: true,
      },
    });
  }
}
