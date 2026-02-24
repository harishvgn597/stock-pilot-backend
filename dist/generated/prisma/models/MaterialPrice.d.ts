import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MaterialPriceModel = runtime.Types.Result.DefaultSelection<Prisma.$MaterialPricePayload>;
export type AggregateMaterialPrice = {
    _count: MaterialPriceCountAggregateOutputType | null;
    _avg: MaterialPriceAvgAggregateOutputType | null;
    _sum: MaterialPriceSumAggregateOutputType | null;
    _min: MaterialPriceMinAggregateOutputType | null;
    _max: MaterialPriceMaxAggregateOutputType | null;
};
export type MaterialPriceAvgAggregateOutputType = {
    rate: number | null;
};
export type MaterialPriceSumAggregateOutputType = {
    rate: number | null;
};
export type MaterialPriceMinAggregateOutputType = {
    id: string | null;
    conditionRecord: string | null;
    conditionType: string | null;
    rate: number | null;
    validFrom: Date | null;
    validTo: Date | null;
    materialId: string | null;
    createdAt: Date | null;
};
export type MaterialPriceMaxAggregateOutputType = {
    id: string | null;
    conditionRecord: string | null;
    conditionType: string | null;
    rate: number | null;
    validFrom: Date | null;
    validTo: Date | null;
    materialId: string | null;
    createdAt: Date | null;
};
export type MaterialPriceCountAggregateOutputType = {
    id: number;
    conditionRecord: number;
    conditionType: number;
    rate: number;
    validFrom: number;
    validTo: number;
    materialId: number;
    createdAt: number;
    _all: number;
};
export type MaterialPriceAvgAggregateInputType = {
    rate?: true;
};
export type MaterialPriceSumAggregateInputType = {
    rate?: true;
};
export type MaterialPriceMinAggregateInputType = {
    id?: true;
    conditionRecord?: true;
    conditionType?: true;
    rate?: true;
    validFrom?: true;
    validTo?: true;
    materialId?: true;
    createdAt?: true;
};
export type MaterialPriceMaxAggregateInputType = {
    id?: true;
    conditionRecord?: true;
    conditionType?: true;
    rate?: true;
    validFrom?: true;
    validTo?: true;
    materialId?: true;
    createdAt?: true;
};
export type MaterialPriceCountAggregateInputType = {
    id?: true;
    conditionRecord?: true;
    conditionType?: true;
    rate?: true;
    validFrom?: true;
    validTo?: true;
    materialId?: true;
    createdAt?: true;
    _all?: true;
};
export type MaterialPriceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialPriceWhereInput;
    orderBy?: Prisma.MaterialPriceOrderByWithRelationInput | Prisma.MaterialPriceOrderByWithRelationInput[];
    cursor?: Prisma.MaterialPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MaterialPriceCountAggregateInputType;
    _avg?: MaterialPriceAvgAggregateInputType;
    _sum?: MaterialPriceSumAggregateInputType;
    _min?: MaterialPriceMinAggregateInputType;
    _max?: MaterialPriceMaxAggregateInputType;
};
export type GetMaterialPriceAggregateType<T extends MaterialPriceAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterialPrice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterialPrice[P]> : Prisma.GetScalarType<T[P], AggregateMaterialPrice[P]>;
};
export type MaterialPriceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialPriceWhereInput;
    orderBy?: Prisma.MaterialPriceOrderByWithAggregationInput | Prisma.MaterialPriceOrderByWithAggregationInput[];
    by: Prisma.MaterialPriceScalarFieldEnum[] | Prisma.MaterialPriceScalarFieldEnum;
    having?: Prisma.MaterialPriceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialPriceCountAggregateInputType | true;
    _avg?: MaterialPriceAvgAggregateInputType;
    _sum?: MaterialPriceSumAggregateInputType;
    _min?: MaterialPriceMinAggregateInputType;
    _max?: MaterialPriceMaxAggregateInputType;
};
export type MaterialPriceGroupByOutputType = {
    id: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date;
    validTo: Date;
    materialId: string;
    createdAt: Date;
    _count: MaterialPriceCountAggregateOutputType | null;
    _avg: MaterialPriceAvgAggregateOutputType | null;
    _sum: MaterialPriceSumAggregateOutputType | null;
    _min: MaterialPriceMinAggregateOutputType | null;
    _max: MaterialPriceMaxAggregateOutputType | null;
};
type GetMaterialPriceGroupByPayload<T extends MaterialPriceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaterialPriceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaterialPriceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaterialPriceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaterialPriceGroupByOutputType[P]>;
}>>;
export type MaterialPriceWhereInput = {
    AND?: Prisma.MaterialPriceWhereInput | Prisma.MaterialPriceWhereInput[];
    OR?: Prisma.MaterialPriceWhereInput[];
    NOT?: Prisma.MaterialPriceWhereInput | Prisma.MaterialPriceWhereInput[];
    id?: Prisma.StringFilter<"MaterialPrice"> | string;
    conditionRecord?: Prisma.StringFilter<"MaterialPrice"> | string;
    conditionType?: Prisma.StringFilter<"MaterialPrice"> | string;
    rate?: Prisma.FloatFilter<"MaterialPrice"> | number;
    validFrom?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    validTo?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    materialId?: Prisma.StringFilter<"MaterialPrice"> | string;
    createdAt?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type MaterialPriceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    conditionRecord?: Prisma.SortOrder;
    conditionType?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type MaterialPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MaterialPriceWhereInput | Prisma.MaterialPriceWhereInput[];
    OR?: Prisma.MaterialPriceWhereInput[];
    NOT?: Prisma.MaterialPriceWhereInput | Prisma.MaterialPriceWhereInput[];
    conditionRecord?: Prisma.StringFilter<"MaterialPrice"> | string;
    conditionType?: Prisma.StringFilter<"MaterialPrice"> | string;
    rate?: Prisma.FloatFilter<"MaterialPrice"> | number;
    validFrom?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    validTo?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    materialId?: Prisma.StringFilter<"MaterialPrice"> | string;
    createdAt?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id">;
export type MaterialPriceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    conditionRecord?: Prisma.SortOrder;
    conditionType?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MaterialPriceCountOrderByAggregateInput;
    _avg?: Prisma.MaterialPriceAvgOrderByAggregateInput;
    _max?: Prisma.MaterialPriceMaxOrderByAggregateInput;
    _min?: Prisma.MaterialPriceMinOrderByAggregateInput;
    _sum?: Prisma.MaterialPriceSumOrderByAggregateInput;
};
export type MaterialPriceScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaterialPriceScalarWhereWithAggregatesInput | Prisma.MaterialPriceScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaterialPriceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaterialPriceScalarWhereWithAggregatesInput | Prisma.MaterialPriceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MaterialPrice"> | string;
    conditionRecord?: Prisma.StringWithAggregatesFilter<"MaterialPrice"> | string;
    conditionType?: Prisma.StringWithAggregatesFilter<"MaterialPrice"> | string;
    rate?: Prisma.FloatWithAggregatesFilter<"MaterialPrice"> | number;
    validFrom?: Prisma.DateTimeWithAggregatesFilter<"MaterialPrice"> | Date | string;
    validTo?: Prisma.DateTimeWithAggregatesFilter<"MaterialPrice"> | Date | string;
    materialId?: Prisma.StringWithAggregatesFilter<"MaterialPrice"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MaterialPrice"> | Date | string;
};
export type MaterialPriceCreateInput = {
    id?: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date | string;
    validTo: Date | string;
    createdAt?: Date | string;
    material: Prisma.MaterialCreateNestedOneWithoutPricesInput;
};
export type MaterialPriceUncheckedCreateInput = {
    id?: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date | string;
    validTo: Date | string;
    materialId: string;
    createdAt?: Date | string;
};
export type MaterialPriceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutPricesNestedInput;
};
export type MaterialPriceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialPriceCreateManyInput = {
    id?: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date | string;
    validTo: Date | string;
    materialId: string;
    createdAt?: Date | string;
};
export type MaterialPriceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialPriceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialPriceListRelationFilter = {
    every?: Prisma.MaterialPriceWhereInput;
    some?: Prisma.MaterialPriceWhereInput;
    none?: Prisma.MaterialPriceWhereInput;
};
export type MaterialPriceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MaterialPriceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    conditionRecord?: Prisma.SortOrder;
    conditionType?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialPriceAvgOrderByAggregateInput = {
    rate?: Prisma.SortOrder;
};
export type MaterialPriceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    conditionRecord?: Prisma.SortOrder;
    conditionType?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialPriceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    conditionRecord?: Prisma.SortOrder;
    conditionType?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialPriceSumOrderByAggregateInput = {
    rate?: Prisma.SortOrder;
};
export type MaterialPriceCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.MaterialPriceCreateWithoutMaterialInput, Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput> | Prisma.MaterialPriceCreateWithoutMaterialInput[] | Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput | Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.MaterialPriceCreateManyMaterialInputEnvelope;
    connect?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
};
export type MaterialPriceUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.MaterialPriceCreateWithoutMaterialInput, Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput> | Prisma.MaterialPriceCreateWithoutMaterialInput[] | Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput | Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.MaterialPriceCreateManyMaterialInputEnvelope;
    connect?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
};
export type MaterialPriceUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialPriceCreateWithoutMaterialInput, Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput> | Prisma.MaterialPriceCreateWithoutMaterialInput[] | Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput | Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.MaterialPriceUpsertWithWhereUniqueWithoutMaterialInput | Prisma.MaterialPriceUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.MaterialPriceCreateManyMaterialInputEnvelope;
    set?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    disconnect?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    delete?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    connect?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    update?: Prisma.MaterialPriceUpdateWithWhereUniqueWithoutMaterialInput | Prisma.MaterialPriceUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.MaterialPriceUpdateManyWithWhereWithoutMaterialInput | Prisma.MaterialPriceUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.MaterialPriceScalarWhereInput | Prisma.MaterialPriceScalarWhereInput[];
};
export type MaterialPriceUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialPriceCreateWithoutMaterialInput, Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput> | Prisma.MaterialPriceCreateWithoutMaterialInput[] | Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput | Prisma.MaterialPriceCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.MaterialPriceUpsertWithWhereUniqueWithoutMaterialInput | Prisma.MaterialPriceUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.MaterialPriceCreateManyMaterialInputEnvelope;
    set?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    disconnect?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    delete?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    connect?: Prisma.MaterialPriceWhereUniqueInput | Prisma.MaterialPriceWhereUniqueInput[];
    update?: Prisma.MaterialPriceUpdateWithWhereUniqueWithoutMaterialInput | Prisma.MaterialPriceUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.MaterialPriceUpdateManyWithWhereWithoutMaterialInput | Prisma.MaterialPriceUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.MaterialPriceScalarWhereInput | Prisma.MaterialPriceScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MaterialPriceCreateWithoutMaterialInput = {
    id?: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date | string;
    validTo: Date | string;
    createdAt?: Date | string;
};
export type MaterialPriceUncheckedCreateWithoutMaterialInput = {
    id?: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date | string;
    validTo: Date | string;
    createdAt?: Date | string;
};
export type MaterialPriceCreateOrConnectWithoutMaterialInput = {
    where: Prisma.MaterialPriceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialPriceCreateWithoutMaterialInput, Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput>;
};
export type MaterialPriceCreateManyMaterialInputEnvelope = {
    data: Prisma.MaterialPriceCreateManyMaterialInput | Prisma.MaterialPriceCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type MaterialPriceUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.MaterialPriceWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialPriceUpdateWithoutMaterialInput, Prisma.MaterialPriceUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.MaterialPriceCreateWithoutMaterialInput, Prisma.MaterialPriceUncheckedCreateWithoutMaterialInput>;
};
export type MaterialPriceUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.MaterialPriceWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialPriceUpdateWithoutMaterialInput, Prisma.MaterialPriceUncheckedUpdateWithoutMaterialInput>;
};
export type MaterialPriceUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.MaterialPriceScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialPriceUpdateManyMutationInput, Prisma.MaterialPriceUncheckedUpdateManyWithoutMaterialInput>;
};
export type MaterialPriceScalarWhereInput = {
    AND?: Prisma.MaterialPriceScalarWhereInput | Prisma.MaterialPriceScalarWhereInput[];
    OR?: Prisma.MaterialPriceScalarWhereInput[];
    NOT?: Prisma.MaterialPriceScalarWhereInput | Prisma.MaterialPriceScalarWhereInput[];
    id?: Prisma.StringFilter<"MaterialPrice"> | string;
    conditionRecord?: Prisma.StringFilter<"MaterialPrice"> | string;
    conditionType?: Prisma.StringFilter<"MaterialPrice"> | string;
    rate?: Prisma.FloatFilter<"MaterialPrice"> | number;
    validFrom?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    validTo?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
    materialId?: Prisma.StringFilter<"MaterialPrice"> | string;
    createdAt?: Prisma.DateTimeFilter<"MaterialPrice"> | Date | string;
};
export type MaterialPriceCreateManyMaterialInput = {
    id?: string;
    conditionRecord: string;
    conditionType: string;
    rate: number;
    validFrom: Date | string;
    validTo: Date | string;
    createdAt?: Date | string;
};
export type MaterialPriceUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialPriceUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialPriceUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionRecord?: Prisma.StringFieldUpdateOperationsInput | string;
    conditionType?: Prisma.StringFieldUpdateOperationsInput | string;
    rate?: Prisma.FloatFieldUpdateOperationsInput | number;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialPriceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    conditionRecord?: boolean;
    conditionType?: boolean;
    rate?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    materialId?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["materialPrice"]>;
export type MaterialPriceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    conditionRecord?: boolean;
    conditionType?: boolean;
    rate?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    materialId?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["materialPrice"]>;
export type MaterialPriceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    conditionRecord?: boolean;
    conditionType?: boolean;
    rate?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    materialId?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["materialPrice"]>;
export type MaterialPriceSelectScalar = {
    id?: boolean;
    conditionRecord?: boolean;
    conditionType?: boolean;
    rate?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    materialId?: boolean;
    createdAt?: boolean;
};
export type MaterialPriceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "conditionRecord" | "conditionType" | "rate" | "validFrom" | "validTo" | "materialId" | "createdAt", ExtArgs["result"]["materialPrice"]>;
export type MaterialPriceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type MaterialPriceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type MaterialPriceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $MaterialPricePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MaterialPrice";
    objects: {
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        conditionRecord: string;
        conditionType: string;
        rate: number;
        validFrom: Date;
        validTo: Date;
        materialId: string;
        createdAt: Date;
    }, ExtArgs["result"]["materialPrice"]>;
    composites: {};
};
export type MaterialPriceGetPayload<S extends boolean | null | undefined | MaterialPriceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload, S>;
export type MaterialPriceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaterialPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaterialPriceCountAggregateInputType | true;
};
export interface MaterialPriceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MaterialPrice'];
        meta: {
            name: 'MaterialPrice';
        };
    };
    findUnique<T extends MaterialPriceFindUniqueArgs>(args: Prisma.SelectSubset<T, MaterialPriceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MaterialPriceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaterialPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MaterialPriceFindFirstArgs>(args?: Prisma.SelectSubset<T, MaterialPriceFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MaterialPriceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaterialPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MaterialPriceFindManyArgs>(args?: Prisma.SelectSubset<T, MaterialPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MaterialPriceCreateArgs>(args: Prisma.SelectSubset<T, MaterialPriceCreateArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MaterialPriceCreateManyArgs>(args?: Prisma.SelectSubset<T, MaterialPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MaterialPriceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaterialPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MaterialPriceDeleteArgs>(args: Prisma.SelectSubset<T, MaterialPriceDeleteArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MaterialPriceUpdateArgs>(args: Prisma.SelectSubset<T, MaterialPriceUpdateArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MaterialPriceDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaterialPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MaterialPriceUpdateManyArgs>(args: Prisma.SelectSubset<T, MaterialPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MaterialPriceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaterialPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MaterialPriceUpsertArgs>(args: Prisma.SelectSubset<T, MaterialPriceUpsertArgs<ExtArgs>>): Prisma.Prisma__MaterialPriceClient<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MaterialPriceCountArgs>(args?: Prisma.Subset<T, MaterialPriceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaterialPriceCountAggregateOutputType> : number>;
    aggregate<T extends MaterialPriceAggregateArgs>(args: Prisma.Subset<T, MaterialPriceAggregateArgs>): Prisma.PrismaPromise<GetMaterialPriceAggregateType<T>>;
    groupBy<T extends MaterialPriceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaterialPriceGroupByArgs['orderBy'];
    } : {
        orderBy?: MaterialPriceGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaterialPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MaterialPriceFieldRefs;
}
export interface Prisma__MaterialPriceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MaterialPriceFieldRefs {
    readonly id: Prisma.FieldRef<"MaterialPrice", 'String'>;
    readonly conditionRecord: Prisma.FieldRef<"MaterialPrice", 'String'>;
    readonly conditionType: Prisma.FieldRef<"MaterialPrice", 'String'>;
    readonly rate: Prisma.FieldRef<"MaterialPrice", 'Float'>;
    readonly validFrom: Prisma.FieldRef<"MaterialPrice", 'DateTime'>;
    readonly validTo: Prisma.FieldRef<"MaterialPrice", 'DateTime'>;
    readonly materialId: Prisma.FieldRef<"MaterialPrice", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MaterialPrice", 'DateTime'>;
}
export type MaterialPriceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where: Prisma.MaterialPriceWhereUniqueInput;
};
export type MaterialPriceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where: Prisma.MaterialPriceWhereUniqueInput;
};
export type MaterialPriceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where?: Prisma.MaterialPriceWhereInput;
    orderBy?: Prisma.MaterialPriceOrderByWithRelationInput | Prisma.MaterialPriceOrderByWithRelationInput[];
    cursor?: Prisma.MaterialPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialPriceScalarFieldEnum | Prisma.MaterialPriceScalarFieldEnum[];
};
export type MaterialPriceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where?: Prisma.MaterialPriceWhereInput;
    orderBy?: Prisma.MaterialPriceOrderByWithRelationInput | Prisma.MaterialPriceOrderByWithRelationInput[];
    cursor?: Prisma.MaterialPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialPriceScalarFieldEnum | Prisma.MaterialPriceScalarFieldEnum[];
};
export type MaterialPriceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where?: Prisma.MaterialPriceWhereInput;
    orderBy?: Prisma.MaterialPriceOrderByWithRelationInput | Prisma.MaterialPriceOrderByWithRelationInput[];
    cursor?: Prisma.MaterialPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialPriceScalarFieldEnum | Prisma.MaterialPriceScalarFieldEnum[];
};
export type MaterialPriceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialPriceCreateInput, Prisma.MaterialPriceUncheckedCreateInput>;
};
export type MaterialPriceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MaterialPriceCreateManyInput | Prisma.MaterialPriceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaterialPriceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    data: Prisma.MaterialPriceCreateManyInput | Prisma.MaterialPriceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MaterialPriceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MaterialPriceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialPriceUpdateInput, Prisma.MaterialPriceUncheckedUpdateInput>;
    where: Prisma.MaterialPriceWhereUniqueInput;
};
export type MaterialPriceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MaterialPriceUpdateManyMutationInput, Prisma.MaterialPriceUncheckedUpdateManyInput>;
    where?: Prisma.MaterialPriceWhereInput;
    limit?: number;
};
export type MaterialPriceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialPriceUpdateManyMutationInput, Prisma.MaterialPriceUncheckedUpdateManyInput>;
    where?: Prisma.MaterialPriceWhereInput;
    limit?: number;
    include?: Prisma.MaterialPriceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MaterialPriceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where: Prisma.MaterialPriceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialPriceCreateInput, Prisma.MaterialPriceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MaterialPriceUpdateInput, Prisma.MaterialPriceUncheckedUpdateInput>;
};
export type MaterialPriceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
    where: Prisma.MaterialPriceWhereUniqueInput;
};
export type MaterialPriceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialPriceWhereInput;
    limit?: number;
};
export type MaterialPriceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialPriceSelect<ExtArgs> | null;
    omit?: Prisma.MaterialPriceOmit<ExtArgs> | null;
    include?: Prisma.MaterialPriceInclude<ExtArgs> | null;
};
export {};
