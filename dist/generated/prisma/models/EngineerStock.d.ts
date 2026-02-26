import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EngineerStockModel = runtime.Types.Result.DefaultSelection<Prisma.$EngineerStockPayload>;
export type AggregateEngineerStock = {
    _count: EngineerStockCountAggregateOutputType | null;
    _avg: EngineerStockAvgAggregateOutputType | null;
    _sum: EngineerStockSumAggregateOutputType | null;
    _min: EngineerStockMinAggregateOutputType | null;
    _max: EngineerStockMaxAggregateOutputType | null;
};
export type EngineerStockAvgAggregateOutputType = {
    quantity: number | null;
};
export type EngineerStockSumAggregateOutputType = {
    quantity: number | null;
};
export type EngineerStockMinAggregateOutputType = {
    id: string | null;
    engineerId: string | null;
    materialCode: string | null;
    quantity: number | null;
    createdAt: Date | null;
};
export type EngineerStockMaxAggregateOutputType = {
    id: string | null;
    engineerId: string | null;
    materialCode: string | null;
    quantity: number | null;
    createdAt: Date | null;
};
export type EngineerStockCountAggregateOutputType = {
    id: number;
    engineerId: number;
    materialCode: number;
    quantity: number;
    createdAt: number;
    _all: number;
};
export type EngineerStockAvgAggregateInputType = {
    quantity?: true;
};
export type EngineerStockSumAggregateInputType = {
    quantity?: true;
};
export type EngineerStockMinAggregateInputType = {
    id?: true;
    engineerId?: true;
    materialCode?: true;
    quantity?: true;
    createdAt?: true;
};
export type EngineerStockMaxAggregateInputType = {
    id?: true;
    engineerId?: true;
    materialCode?: true;
    quantity?: true;
    createdAt?: true;
};
export type EngineerStockCountAggregateInputType = {
    id?: true;
    engineerId?: true;
    materialCode?: true;
    quantity?: true;
    createdAt?: true;
    _all?: true;
};
export type EngineerStockAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerStockWhereInput;
    orderBy?: Prisma.EngineerStockOrderByWithRelationInput | Prisma.EngineerStockOrderByWithRelationInput[];
    cursor?: Prisma.EngineerStockWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EngineerStockCountAggregateInputType;
    _avg?: EngineerStockAvgAggregateInputType;
    _sum?: EngineerStockSumAggregateInputType;
    _min?: EngineerStockMinAggregateInputType;
    _max?: EngineerStockMaxAggregateInputType;
};
export type GetEngineerStockAggregateType<T extends EngineerStockAggregateArgs> = {
    [P in keyof T & keyof AggregateEngineerStock]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEngineerStock[P]> : Prisma.GetScalarType<T[P], AggregateEngineerStock[P]>;
};
export type EngineerStockGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerStockWhereInput;
    orderBy?: Prisma.EngineerStockOrderByWithAggregationInput | Prisma.EngineerStockOrderByWithAggregationInput[];
    by: Prisma.EngineerStockScalarFieldEnum[] | Prisma.EngineerStockScalarFieldEnum;
    having?: Prisma.EngineerStockScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EngineerStockCountAggregateInputType | true;
    _avg?: EngineerStockAvgAggregateInputType;
    _sum?: EngineerStockSumAggregateInputType;
    _min?: EngineerStockMinAggregateInputType;
    _max?: EngineerStockMaxAggregateInputType;
};
export type EngineerStockGroupByOutputType = {
    id: string;
    engineerId: string;
    materialCode: string;
    quantity: number;
    createdAt: Date;
    _count: EngineerStockCountAggregateOutputType | null;
    _avg: EngineerStockAvgAggregateOutputType | null;
    _sum: EngineerStockSumAggregateOutputType | null;
    _min: EngineerStockMinAggregateOutputType | null;
    _max: EngineerStockMaxAggregateOutputType | null;
};
type GetEngineerStockGroupByPayload<T extends EngineerStockGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EngineerStockGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EngineerStockGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EngineerStockGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EngineerStockGroupByOutputType[P]>;
}>>;
export type EngineerStockWhereInput = {
    AND?: Prisma.EngineerStockWhereInput | Prisma.EngineerStockWhereInput[];
    OR?: Prisma.EngineerStockWhereInput[];
    NOT?: Prisma.EngineerStockWhereInput | Prisma.EngineerStockWhereInput[];
    id?: Prisma.StringFilter<"EngineerStock"> | string;
    engineerId?: Prisma.StringFilter<"EngineerStock"> | string;
    materialCode?: Prisma.StringFilter<"EngineerStock"> | string;
    quantity?: Prisma.FloatFilter<"EngineerStock"> | number;
    createdAt?: Prisma.DateTimeFilter<"EngineerStock"> | Date | string;
    engineer?: Prisma.XOR<Prisma.EngineerScalarRelationFilter, Prisma.EngineerWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type EngineerStockOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    engineer?: Prisma.EngineerOrderByWithRelationInput;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type EngineerStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EngineerStockWhereInput | Prisma.EngineerStockWhereInput[];
    OR?: Prisma.EngineerStockWhereInput[];
    NOT?: Prisma.EngineerStockWhereInput | Prisma.EngineerStockWhereInput[];
    engineerId?: Prisma.StringFilter<"EngineerStock"> | string;
    materialCode?: Prisma.StringFilter<"EngineerStock"> | string;
    quantity?: Prisma.FloatFilter<"EngineerStock"> | number;
    createdAt?: Prisma.DateTimeFilter<"EngineerStock"> | Date | string;
    engineer?: Prisma.XOR<Prisma.EngineerScalarRelationFilter, Prisma.EngineerWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id">;
export type EngineerStockOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EngineerStockCountOrderByAggregateInput;
    _avg?: Prisma.EngineerStockAvgOrderByAggregateInput;
    _max?: Prisma.EngineerStockMaxOrderByAggregateInput;
    _min?: Prisma.EngineerStockMinOrderByAggregateInput;
    _sum?: Prisma.EngineerStockSumOrderByAggregateInput;
};
export type EngineerStockScalarWhereWithAggregatesInput = {
    AND?: Prisma.EngineerStockScalarWhereWithAggregatesInput | Prisma.EngineerStockScalarWhereWithAggregatesInput[];
    OR?: Prisma.EngineerStockScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EngineerStockScalarWhereWithAggregatesInput | Prisma.EngineerStockScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EngineerStock"> | string;
    engineerId?: Prisma.StringWithAggregatesFilter<"EngineerStock"> | string;
    materialCode?: Prisma.StringWithAggregatesFilter<"EngineerStock"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"EngineerStock"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EngineerStock"> | Date | string;
};
export type EngineerStockCreateInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    engineer: Prisma.EngineerCreateNestedOneWithoutAssignedGoodsInput;
    material: Prisma.MaterialCreateNestedOneWithoutEngineerStockInput;
};
export type EngineerStockUncheckedCreateInput = {
    id?: string;
    engineerId: string;
    materialCode: string;
    quantity: number;
    createdAt?: Date | string;
};
export type EngineerStockUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    engineer?: Prisma.EngineerUpdateOneRequiredWithoutAssignedGoodsNestedInput;
    material?: Prisma.MaterialUpdateOneRequiredWithoutEngineerStockNestedInput;
};
export type EngineerStockUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockCreateManyInput = {
    id?: string;
    engineerId: string;
    materialCode: string;
    quantity: number;
    createdAt?: Date | string;
};
export type EngineerStockUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockListRelationFilter = {
    every?: Prisma.EngineerStockWhereInput;
    some?: Prisma.EngineerStockWhereInput;
    none?: Prisma.EngineerStockWhereInput;
};
export type EngineerStockOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EngineerStockCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EngineerStockAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type EngineerStockMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EngineerStockMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EngineerStockSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type EngineerStockCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutMaterialInput, Prisma.EngineerStockUncheckedCreateWithoutMaterialInput> | Prisma.EngineerStockCreateWithoutMaterialInput[] | Prisma.EngineerStockUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutMaterialInput | Prisma.EngineerStockCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.EngineerStockCreateManyMaterialInputEnvelope;
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
};
export type EngineerStockUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutMaterialInput, Prisma.EngineerStockUncheckedCreateWithoutMaterialInput> | Prisma.EngineerStockCreateWithoutMaterialInput[] | Prisma.EngineerStockUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutMaterialInput | Prisma.EngineerStockCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.EngineerStockCreateManyMaterialInputEnvelope;
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
};
export type EngineerStockUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutMaterialInput, Prisma.EngineerStockUncheckedCreateWithoutMaterialInput> | Prisma.EngineerStockCreateWithoutMaterialInput[] | Prisma.EngineerStockUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutMaterialInput | Prisma.EngineerStockCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.EngineerStockUpsertWithWhereUniqueWithoutMaterialInput | Prisma.EngineerStockUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.EngineerStockCreateManyMaterialInputEnvelope;
    set?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    disconnect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    delete?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    update?: Prisma.EngineerStockUpdateWithWhereUniqueWithoutMaterialInput | Prisma.EngineerStockUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.EngineerStockUpdateManyWithWhereWithoutMaterialInput | Prisma.EngineerStockUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.EngineerStockScalarWhereInput | Prisma.EngineerStockScalarWhereInput[];
};
export type EngineerStockUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutMaterialInput, Prisma.EngineerStockUncheckedCreateWithoutMaterialInput> | Prisma.EngineerStockCreateWithoutMaterialInput[] | Prisma.EngineerStockUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutMaterialInput | Prisma.EngineerStockCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.EngineerStockUpsertWithWhereUniqueWithoutMaterialInput | Prisma.EngineerStockUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.EngineerStockCreateManyMaterialInputEnvelope;
    set?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    disconnect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    delete?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    update?: Prisma.EngineerStockUpdateWithWhereUniqueWithoutMaterialInput | Prisma.EngineerStockUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.EngineerStockUpdateManyWithWhereWithoutMaterialInput | Prisma.EngineerStockUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.EngineerStockScalarWhereInput | Prisma.EngineerStockScalarWhereInput[];
};
export type EngineerStockCreateNestedManyWithoutEngineerInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutEngineerInput, Prisma.EngineerStockUncheckedCreateWithoutEngineerInput> | Prisma.EngineerStockCreateWithoutEngineerInput[] | Prisma.EngineerStockUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutEngineerInput | Prisma.EngineerStockCreateOrConnectWithoutEngineerInput[];
    createMany?: Prisma.EngineerStockCreateManyEngineerInputEnvelope;
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
};
export type EngineerStockUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutEngineerInput, Prisma.EngineerStockUncheckedCreateWithoutEngineerInput> | Prisma.EngineerStockCreateWithoutEngineerInput[] | Prisma.EngineerStockUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutEngineerInput | Prisma.EngineerStockCreateOrConnectWithoutEngineerInput[];
    createMany?: Prisma.EngineerStockCreateManyEngineerInputEnvelope;
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
};
export type EngineerStockUpdateManyWithoutEngineerNestedInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutEngineerInput, Prisma.EngineerStockUncheckedCreateWithoutEngineerInput> | Prisma.EngineerStockCreateWithoutEngineerInput[] | Prisma.EngineerStockUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutEngineerInput | Prisma.EngineerStockCreateOrConnectWithoutEngineerInput[];
    upsert?: Prisma.EngineerStockUpsertWithWhereUniqueWithoutEngineerInput | Prisma.EngineerStockUpsertWithWhereUniqueWithoutEngineerInput[];
    createMany?: Prisma.EngineerStockCreateManyEngineerInputEnvelope;
    set?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    disconnect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    delete?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    update?: Prisma.EngineerStockUpdateWithWhereUniqueWithoutEngineerInput | Prisma.EngineerStockUpdateWithWhereUniqueWithoutEngineerInput[];
    updateMany?: Prisma.EngineerStockUpdateManyWithWhereWithoutEngineerInput | Prisma.EngineerStockUpdateManyWithWhereWithoutEngineerInput[];
    deleteMany?: Prisma.EngineerStockScalarWhereInput | Prisma.EngineerStockScalarWhereInput[];
};
export type EngineerStockUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: Prisma.XOR<Prisma.EngineerStockCreateWithoutEngineerInput, Prisma.EngineerStockUncheckedCreateWithoutEngineerInput> | Prisma.EngineerStockCreateWithoutEngineerInput[] | Prisma.EngineerStockUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.EngineerStockCreateOrConnectWithoutEngineerInput | Prisma.EngineerStockCreateOrConnectWithoutEngineerInput[];
    upsert?: Prisma.EngineerStockUpsertWithWhereUniqueWithoutEngineerInput | Prisma.EngineerStockUpsertWithWhereUniqueWithoutEngineerInput[];
    createMany?: Prisma.EngineerStockCreateManyEngineerInputEnvelope;
    set?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    disconnect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    delete?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    connect?: Prisma.EngineerStockWhereUniqueInput | Prisma.EngineerStockWhereUniqueInput[];
    update?: Prisma.EngineerStockUpdateWithWhereUniqueWithoutEngineerInput | Prisma.EngineerStockUpdateWithWhereUniqueWithoutEngineerInput[];
    updateMany?: Prisma.EngineerStockUpdateManyWithWhereWithoutEngineerInput | Prisma.EngineerStockUpdateManyWithWhereWithoutEngineerInput[];
    deleteMany?: Prisma.EngineerStockScalarWhereInput | Prisma.EngineerStockScalarWhereInput[];
};
export type EngineerStockCreateWithoutMaterialInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    engineer: Prisma.EngineerCreateNestedOneWithoutAssignedGoodsInput;
};
export type EngineerStockUncheckedCreateWithoutMaterialInput = {
    id?: string;
    engineerId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type EngineerStockCreateOrConnectWithoutMaterialInput = {
    where: Prisma.EngineerStockWhereUniqueInput;
    create: Prisma.XOR<Prisma.EngineerStockCreateWithoutMaterialInput, Prisma.EngineerStockUncheckedCreateWithoutMaterialInput>;
};
export type EngineerStockCreateManyMaterialInputEnvelope = {
    data: Prisma.EngineerStockCreateManyMaterialInput | Prisma.EngineerStockCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type EngineerStockUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.EngineerStockWhereUniqueInput;
    update: Prisma.XOR<Prisma.EngineerStockUpdateWithoutMaterialInput, Prisma.EngineerStockUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.EngineerStockCreateWithoutMaterialInput, Prisma.EngineerStockUncheckedCreateWithoutMaterialInput>;
};
export type EngineerStockUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.EngineerStockWhereUniqueInput;
    data: Prisma.XOR<Prisma.EngineerStockUpdateWithoutMaterialInput, Prisma.EngineerStockUncheckedUpdateWithoutMaterialInput>;
};
export type EngineerStockUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.EngineerStockScalarWhereInput;
    data: Prisma.XOR<Prisma.EngineerStockUpdateManyMutationInput, Prisma.EngineerStockUncheckedUpdateManyWithoutMaterialInput>;
};
export type EngineerStockScalarWhereInput = {
    AND?: Prisma.EngineerStockScalarWhereInput | Prisma.EngineerStockScalarWhereInput[];
    OR?: Prisma.EngineerStockScalarWhereInput[];
    NOT?: Prisma.EngineerStockScalarWhereInput | Prisma.EngineerStockScalarWhereInput[];
    id?: Prisma.StringFilter<"EngineerStock"> | string;
    engineerId?: Prisma.StringFilter<"EngineerStock"> | string;
    materialCode?: Prisma.StringFilter<"EngineerStock"> | string;
    quantity?: Prisma.FloatFilter<"EngineerStock"> | number;
    createdAt?: Prisma.DateTimeFilter<"EngineerStock"> | Date | string;
};
export type EngineerStockCreateWithoutEngineerInput = {
    id?: string;
    quantity: number;
    createdAt?: Date | string;
    material: Prisma.MaterialCreateNestedOneWithoutEngineerStockInput;
};
export type EngineerStockUncheckedCreateWithoutEngineerInput = {
    id?: string;
    materialCode: string;
    quantity: number;
    createdAt?: Date | string;
};
export type EngineerStockCreateOrConnectWithoutEngineerInput = {
    where: Prisma.EngineerStockWhereUniqueInput;
    create: Prisma.XOR<Prisma.EngineerStockCreateWithoutEngineerInput, Prisma.EngineerStockUncheckedCreateWithoutEngineerInput>;
};
export type EngineerStockCreateManyEngineerInputEnvelope = {
    data: Prisma.EngineerStockCreateManyEngineerInput | Prisma.EngineerStockCreateManyEngineerInput[];
    skipDuplicates?: boolean;
};
export type EngineerStockUpsertWithWhereUniqueWithoutEngineerInput = {
    where: Prisma.EngineerStockWhereUniqueInput;
    update: Prisma.XOR<Prisma.EngineerStockUpdateWithoutEngineerInput, Prisma.EngineerStockUncheckedUpdateWithoutEngineerInput>;
    create: Prisma.XOR<Prisma.EngineerStockCreateWithoutEngineerInput, Prisma.EngineerStockUncheckedCreateWithoutEngineerInput>;
};
export type EngineerStockUpdateWithWhereUniqueWithoutEngineerInput = {
    where: Prisma.EngineerStockWhereUniqueInput;
    data: Prisma.XOR<Prisma.EngineerStockUpdateWithoutEngineerInput, Prisma.EngineerStockUncheckedUpdateWithoutEngineerInput>;
};
export type EngineerStockUpdateManyWithWhereWithoutEngineerInput = {
    where: Prisma.EngineerStockScalarWhereInput;
    data: Prisma.XOR<Prisma.EngineerStockUpdateManyMutationInput, Prisma.EngineerStockUncheckedUpdateManyWithoutEngineerInput>;
};
export type EngineerStockCreateManyMaterialInput = {
    id?: string;
    engineerId: string;
    quantity: number;
    createdAt?: Date | string;
};
export type EngineerStockUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    engineer?: Prisma.EngineerUpdateOneRequiredWithoutAssignedGoodsNestedInput;
};
export type EngineerStockUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockCreateManyEngineerInput = {
    id?: string;
    materialCode: string;
    quantity: number;
    createdAt?: Date | string;
};
export type EngineerStockUpdateWithoutEngineerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutEngineerStockNestedInput;
};
export type EngineerStockUncheckedUpdateWithoutEngineerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockUncheckedUpdateManyWithoutEngineerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerStockSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    engineerId?: boolean;
    materialCode?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["engineerStock"]>;
export type EngineerStockSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    engineerId?: boolean;
    materialCode?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["engineerStock"]>;
export type EngineerStockSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    engineerId?: boolean;
    materialCode?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["engineerStock"]>;
export type EngineerStockSelectScalar = {
    id?: boolean;
    engineerId?: boolean;
    materialCode?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
};
export type EngineerStockOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "engineerId" | "materialCode" | "quantity" | "createdAt", ExtArgs["result"]["engineerStock"]>;
export type EngineerStockInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type EngineerStockIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type EngineerStockIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $EngineerStockPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EngineerStock";
    objects: {
        engineer: Prisma.$EngineerPayload<ExtArgs>;
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        engineerId: string;
        materialCode: string;
        quantity: number;
        createdAt: Date;
    }, ExtArgs["result"]["engineerStock"]>;
    composites: {};
};
export type EngineerStockGetPayload<S extends boolean | null | undefined | EngineerStockDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload, S>;
export type EngineerStockCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EngineerStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EngineerStockCountAggregateInputType | true;
};
export interface EngineerStockDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EngineerStock'];
        meta: {
            name: 'EngineerStock';
        };
    };
    findUnique<T extends EngineerStockFindUniqueArgs>(args: Prisma.SelectSubset<T, EngineerStockFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EngineerStockFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EngineerStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EngineerStockFindFirstArgs>(args?: Prisma.SelectSubset<T, EngineerStockFindFirstArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EngineerStockFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EngineerStockFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EngineerStockFindManyArgs>(args?: Prisma.SelectSubset<T, EngineerStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EngineerStockCreateArgs>(args: Prisma.SelectSubset<T, EngineerStockCreateArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EngineerStockCreateManyArgs>(args?: Prisma.SelectSubset<T, EngineerStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EngineerStockCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EngineerStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EngineerStockDeleteArgs>(args: Prisma.SelectSubset<T, EngineerStockDeleteArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EngineerStockUpdateArgs>(args: Prisma.SelectSubset<T, EngineerStockUpdateArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EngineerStockDeleteManyArgs>(args?: Prisma.SelectSubset<T, EngineerStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EngineerStockUpdateManyArgs>(args: Prisma.SelectSubset<T, EngineerStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EngineerStockUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EngineerStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EngineerStockUpsertArgs>(args: Prisma.SelectSubset<T, EngineerStockUpsertArgs<ExtArgs>>): Prisma.Prisma__EngineerStockClient<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EngineerStockCountArgs>(args?: Prisma.Subset<T, EngineerStockCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EngineerStockCountAggregateOutputType> : number>;
    aggregate<T extends EngineerStockAggregateArgs>(args: Prisma.Subset<T, EngineerStockAggregateArgs>): Prisma.PrismaPromise<GetEngineerStockAggregateType<T>>;
    groupBy<T extends EngineerStockGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EngineerStockGroupByArgs['orderBy'];
    } : {
        orderBy?: EngineerStockGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EngineerStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngineerStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EngineerStockFieldRefs;
}
export interface Prisma__EngineerStockClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    engineer<T extends Prisma.EngineerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EngineerDefaultArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EngineerStockFieldRefs {
    readonly id: Prisma.FieldRef<"EngineerStock", 'String'>;
    readonly engineerId: Prisma.FieldRef<"EngineerStock", 'String'>;
    readonly materialCode: Prisma.FieldRef<"EngineerStock", 'String'>;
    readonly quantity: Prisma.FieldRef<"EngineerStock", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"EngineerStock", 'DateTime'>;
}
export type EngineerStockFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where: Prisma.EngineerStockWhereUniqueInput;
};
export type EngineerStockFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where: Prisma.EngineerStockWhereUniqueInput;
};
export type EngineerStockFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where?: Prisma.EngineerStockWhereInput;
    orderBy?: Prisma.EngineerStockOrderByWithRelationInput | Prisma.EngineerStockOrderByWithRelationInput[];
    cursor?: Prisma.EngineerStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EngineerStockScalarFieldEnum | Prisma.EngineerStockScalarFieldEnum[];
};
export type EngineerStockFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where?: Prisma.EngineerStockWhereInput;
    orderBy?: Prisma.EngineerStockOrderByWithRelationInput | Prisma.EngineerStockOrderByWithRelationInput[];
    cursor?: Prisma.EngineerStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EngineerStockScalarFieldEnum | Prisma.EngineerStockScalarFieldEnum[];
};
export type EngineerStockFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where?: Prisma.EngineerStockWhereInput;
    orderBy?: Prisma.EngineerStockOrderByWithRelationInput | Prisma.EngineerStockOrderByWithRelationInput[];
    cursor?: Prisma.EngineerStockWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EngineerStockScalarFieldEnum | Prisma.EngineerStockScalarFieldEnum[];
};
export type EngineerStockCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EngineerStockCreateInput, Prisma.EngineerStockUncheckedCreateInput>;
};
export type EngineerStockCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EngineerStockCreateManyInput | Prisma.EngineerStockCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EngineerStockCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    data: Prisma.EngineerStockCreateManyInput | Prisma.EngineerStockCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EngineerStockIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EngineerStockUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EngineerStockUpdateInput, Prisma.EngineerStockUncheckedUpdateInput>;
    where: Prisma.EngineerStockWhereUniqueInput;
};
export type EngineerStockUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EngineerStockUpdateManyMutationInput, Prisma.EngineerStockUncheckedUpdateManyInput>;
    where?: Prisma.EngineerStockWhereInput;
    limit?: number;
};
export type EngineerStockUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EngineerStockUpdateManyMutationInput, Prisma.EngineerStockUncheckedUpdateManyInput>;
    where?: Prisma.EngineerStockWhereInput;
    limit?: number;
    include?: Prisma.EngineerStockIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EngineerStockUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where: Prisma.EngineerStockWhereUniqueInput;
    create: Prisma.XOR<Prisma.EngineerStockCreateInput, Prisma.EngineerStockUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EngineerStockUpdateInput, Prisma.EngineerStockUncheckedUpdateInput>;
};
export type EngineerStockDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
    where: Prisma.EngineerStockWhereUniqueInput;
};
export type EngineerStockDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerStockWhereInput;
    limit?: number;
};
export type EngineerStockDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerStockSelect<ExtArgs> | null;
    omit?: Prisma.EngineerStockOmit<ExtArgs> | null;
    include?: Prisma.EngineerStockInclude<ExtArgs> | null;
};
export {};
