-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('Sale', 'ReturnToServiceCenter', 'WarrantyAMC');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "orderType" "OrderType" NOT NULL,
    "engineerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaleOrder" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "billNumber" TEXT NOT NULL,
    "dateOfSale" TIMESTAMP(3) NOT NULL,
    "materialCode" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "spareType" "SpareType",
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SaleOrder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SaleOrder_orderId_key" ON "SaleOrder"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "SaleOrder_billNumber_key" ON "SaleOrder"("billNumber");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_engineerId_fkey" FOREIGN KEY ("engineerId") REFERENCES "Engineer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleOrder" ADD CONSTRAINT "SaleOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleOrder" ADD CONSTRAINT "SaleOrder_materialCode_fkey" FOREIGN KEY ("materialCode") REFERENCES "Material"("materialCode") ON DELETE RESTRICT ON UPDATE CASCADE;
