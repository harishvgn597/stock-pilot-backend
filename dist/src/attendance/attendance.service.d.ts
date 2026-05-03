import { PrismaService } from '../prisma/prisma.service.js';
import { MarkAttendanceDto } from './dto/mark-attendance.dto.js';
import { UpdateAttendanceDto } from './dto/update-attendance.dto.js';
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    mark(dto: MarkAttendanceDto, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        date: Date;
        notes: string | null;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
        engineer: {
            id: string;
            name: string;
        };
    }>;
    findAll(franchiseeId: string, date?: string): Promise<{
        id: string;
        createdAt: Date;
        date: Date;
        notes: string | null;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
        engineer: {
            id: string;
            name: string;
        };
    }[]>;
    findByEngineer(engineerId: string, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        date: Date;
        notes: string | null;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
    }[]>;
    update(id: string, dto: UpdateAttendanceDto, franchiseeId: string): Promise<{
        id: string;
        createdAt: Date;
        date: Date;
        notes: string | null;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
        engineer: {
            id: string;
            name: string;
        };
    }>;
}
