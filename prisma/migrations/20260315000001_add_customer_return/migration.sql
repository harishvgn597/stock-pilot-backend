-- CreateTable
CREATE TABLE "CustomerReturn" (
    "id"           TEXT NOT NULL,
    "returnDate"   TIMESTAMP(3) NOT NULL,
    "franchiseeId" TEXT NOT NULL DEFAULT '',
    "materialCode" TEXT NOT NULL,
    "materialName" TEXT NOT NULL,
    "quantity"     DOUBLE PRECISION NOT NULL,
    "pricePerUnit" DOUBLE PRECISION NOT NULL,
    "totalPrice"   DOUBLE PRECISION NOT NULL,
    "remarks"      TEXT,
    "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerReturn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomerReturn" ADD CONSTRAINT "CustomerReturn_materialCode_fkey"
  FOREIGN KEY ("materialCode") REFERENCES "Material"("materialCode")
  ON DELETE RESTRICT ON UPDATE CASCADE;
