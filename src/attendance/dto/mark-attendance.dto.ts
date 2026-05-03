export class MarkAttendanceDto {
  engineerId: string;
  date: string; // ISO date string e.g. "2026-05-03"
  status: 'Present' | 'Absent' | 'HalfDay' | 'Leave';
  notes?: string;
}
