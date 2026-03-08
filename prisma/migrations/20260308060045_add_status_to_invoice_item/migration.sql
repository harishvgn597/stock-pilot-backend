-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('Good', 'Defective');

-- AlterTable
ALTER TABLE "InvoiceItem" ADD COLUMN     "status" "ItemStatus";
