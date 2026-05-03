-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('Present', 'Absent', 'HalfDay', 'Leave');

-- CreateTable
CREATE TABLE "Attendance" (
    "id"           TEXT NOT NULL,
    "engineerId"   TEXT NOT NULL,
    "franchiseeId" TEXT NOT NULL,
    "date"         DATE NOT NULL,
    "status"       "AttendanceStatus" NOT NULL,
    "notes"        TEXT,
    "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_engineerId_date_key" ON "Attendance"("engineerId", "date");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_engineerId_fkey"
  FOREIGN KEY ("engineerId") REFERENCES "Engineer"("id")
  ON DELETE RESTRICT ON UPDATE CASCADE;
