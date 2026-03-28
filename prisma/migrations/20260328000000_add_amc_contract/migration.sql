-- CreateEnum
CREATE TYPE "WarrantyType" AS ENUM ('AMC', 'Warranty', 'CAMC');

-- CreateTable
CREATE TABLE "AmcContract" (
    "id"           TEXT NOT NULL,
    "icrNumber"    TEXT NOT NULL,
    "warrantyType" "WarrantyType" NOT NULL,
    "price"        DOUBLE PRECISION NOT NULL,
    "discount"     DOUBLE PRECISION,
    "totalPrice"   DOUBLE PRECISION NOT NULL,
    "engineerName" TEXT NOT NULL,
    "date"         TIMESTAMP(3) NOT NULL,
    "franchiseeId" TEXT NOT NULL DEFAULT '',
    "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AmcContract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AmcContract_icrNumber_key" ON "AmcContract"("icrNumber");
