-- CreateEnum
CREATE TYPE "SpareType" AS ENUM ('Spare', 'Additive', 'Accessory');

-- AlterTable
ALTER TABLE "InvoiceItem" ADD COLUMN     "spareType" "SpareType";
