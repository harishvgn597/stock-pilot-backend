-- CreateTable
CREATE TABLE "GodownStock" (
    "id"                TEXT NOT NULL,
    "franchiseeId"      TEXT NOT NULL DEFAULT '',
    "materialCode"      TEXT NOT NULL,
    "goodQuantity"      DOUBLE PRECISION NOT NULL DEFAULT 0,
    "defectiveQuantity" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "invoiceId"         TEXT,
    "notes"             TEXT,
    "createdAt"         TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt"         TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GodownStock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GodownStock" ADD CONSTRAINT "GodownStock_materialCode_fkey"
  FOREIGN KEY ("materialCode") REFERENCES "Material"("materialCode")
  ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GodownStock" ADD CONSTRAINT "GodownStock_invoiceId_fkey"
  FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;
