-- AlterTable
ALTER TABLE "GodownStock"
  ADD COLUMN "description" TEXT,
  ADD COLUMN "hsn"         TEXT,
  ADD COLUMN "uom"         TEXT,
  ADD COLUMN "totalAmount" DOUBLE PRECISION,
  ADD COLUMN "cgst"        DOUBLE PRECISION,
  ADD COLUMN "sgst"        DOUBLE PRECISION,
  ADD COLUMN "spareType"   "SpareType",
  ADD COLUMN "status"      "ItemStatus";
