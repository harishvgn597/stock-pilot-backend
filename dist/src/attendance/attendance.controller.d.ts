import { AttendanceService } from './attendance.service.js';
import { MarkAttendanceDto } from './dto/mark-attendance.dto.js';
import { UpdateAttendanceDto } from './dto/update-attendance.dto.js';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    mark(dto: MarkAttendanceDto, req: any): Promise<{
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
    findAll(req: any, date?: string): Promise<{
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
    findByEngineer(engineerId: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        date: Date;
        notes: string | null;
        status: import("../../generated/prisma/enums.js").AttendanceStatus;
    }[]>;
    update(id: string, dto: UpdateAttendanceDto, req: any): Promise<{
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
