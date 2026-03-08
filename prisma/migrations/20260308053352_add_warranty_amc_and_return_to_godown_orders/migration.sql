-- CreateTable
CREATE TABLE "WarrantyAmcOrder" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "ticketNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "materialCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "spareType" "SpareType",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WarrantyAmcOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReturnToGodownOrder" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "referenceNumber" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "materialCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReturnToGodownOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WarrantyAmcOrder_orderId_key" ON "WarrantyAmcOrder"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "ReturnToGodownOrder_orderId_key" ON "ReturnToGodownOrder"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "ReturnToGodownOrder_referenceNumber_key" ON "ReturnToGodownOrder"("referenceNumber");

-- AddForeignKey
ALTER TABLE "WarrantyAmcOrder" ADD CONSTRAINT "WarrantyAmcOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarrantyAmcOrder" ADD CONSTRAINT "WarrantyAmcOrder_materialCode_fkey" FOREIGN KEY ("materialCode") REFERENCES "Material"("materialCode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnToGodownOrder" ADD CONSTRAINT "ReturnToGodownOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnToGodownOrder" ADD CONSTRAINT "ReturnToGodownOrder_materialCode_fkey" FOREIGN KEY ("materialCode") REFERENCES "Material"("materialCode") ON DELETE RESTRICT ON UPDATE CASCADE;
