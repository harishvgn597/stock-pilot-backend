import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    get user(): import("../../generated/prisma/models.js").UserDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get material(): import("../../generated/prisma/models.js").MaterialDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get materialPrice(): import("../../generated/prisma/models.js").MaterialPriceDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get invoice(): import("../../generated/prisma/models.js").InvoiceDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get invoiceItem(): import("../../generated/prisma/models.js").InvoiceItemDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get engineer(): import("../../generated/prisma/models.js").EngineerDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get engineerStock(): import("../../generated/prisma/models.js").EngineerStockDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get order(): import("../../generated/prisma/models.js").OrderDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get saleOrder(): import("../../generated/prisma/models.js").SaleOrderDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get warrantyAmcOrder(): import("../../generated/prisma/models.js").WarrantyAmcOrderDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get returnToGodownOrder(): import("../../generated/prisma/models.js").ReturnToGodownOrderDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get customerReturn(): import("../../generated/prisma/models.js").CustomerReturnDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get amcContract(): import("../../generated/prisma/models.js").AmcContractDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get godownStock(): import("../../generated/prisma/models.js").GodownStockDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get attendance(): import("../../generated/prisma/models.js").AttendanceDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    get franchiseSalaryConfig(): import("../../generated/prisma/models.js").FranchiseSalaryConfigDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
