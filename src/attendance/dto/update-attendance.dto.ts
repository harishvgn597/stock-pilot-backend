export class UpdateAttendanceDto {
  status?: 'Present' | 'Absent' | 'HalfDay' | 'Leave';
  notes?: string;
}
