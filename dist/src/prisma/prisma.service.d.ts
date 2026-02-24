import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    get user(): import("../../generated/prisma/models.js").UserDelegate<import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
