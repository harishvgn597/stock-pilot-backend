import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { AttendanceService } from './attendance.service.js';
import { MarkAttendanceDto } from './dto/mark-attendance.dto.js';
import { UpdateAttendanceDto } from './dto/update-attendance.dto.js';

@UseGuards(JwtAuthGuard)
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  // POST /attendance
  @Post()
  mark(@Body() dto: MarkAttendanceDto, @Request() req: any) {
    return this.attendanceService.mark(dto, req.user.userId);
  }

  // GET /attendance?date=YYYY-MM-DD
  @Get()
  findAll(@Request() req: any, @Query('date') date?: string) {
    return this.attendanceService.findAll(req.user.userId, date);
  }

  // GET /attendance/engineer/:engineerId
  @Get('engineer/:engineerId')
  findByEngineer(@Param('engineerId') engineerId: string, @Request() req: any) {
    return this.attendanceService.findByEngineer(engineerId, req.user.userId);
  }

  // PATCH /attendance/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAttendanceDto, @Request() req: any) {
    return this.attendanceService.update(id, dto, req.user.userId);
  }
}
