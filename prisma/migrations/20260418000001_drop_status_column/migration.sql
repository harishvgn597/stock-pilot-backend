-- AlterTable: remove status from InvoiceItem and GodownStock
ALTER TABLE "InvoiceItem" DROP COLUMN "status";
ALTER TABLE "GodownStock" DROP COLUMN "status";
