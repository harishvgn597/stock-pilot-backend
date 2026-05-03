export declare class MarkAttendanceDto {
    engineerId: string;
    date: string;
    status: 'Present' | 'Absent' | 'HalfDay' | 'Leave';
    notes?: string;
}
