import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SaleOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$SaleOrderPayload>;
export type AggregateSaleOrder = {
    _count: SaleOrderCountAggregateOutputType | null;
    _avg: SaleOrderAvgAggregateOutputType | null;
    _sum: SaleOrderSumAggregateOutputType | null;
    _min: SaleOrderMinAggregateOutputType | null;
    _max: SaleOrderMaxAggregateOutputType | null;
};
export type SaleOrderAvgAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type SaleOrderSumAggregateOutputType = {
    quantity: number | null;
    price: number | null;
};
export type SaleOrderMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    billNumber: string | null;
    dateOfSale: Date | null;
    materialCode: string | null;
    description: string | null;
    quantity: number | null;
    spareType: $Enums.SpareType | null;
    price: number | null;
    createdAt: Date | null;
};
export type SaleOrderMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    billNumber: string | null;
    dateOfSale: Date | null;
    materialCode: string | null;
    description: string | null;
    quantity: number | null;
    spareType: $Enums.SpareType | null;
    price: number | null;
    createdAt: Date | null;
};
export type SaleOrderCountAggregateOutputType = {
    id: number;
    orderId: number;
    billNumber: number;
    dateOfSale: number;
    materialCode: number;
    description: number;
    quantity: number;
    spareType: number;
    price: number;
    createdAt: number;
    _all: number;
};
export type SaleOrderAvgAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type SaleOrderSumAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type SaleOrderMinAggregateInputType = {
    id?: true;
    orderId?: true;
    billNumber?: true;
    dateOfSale?: true;
    materialCode?: true;
    description?: true;
    quantity?: true;
    spareType?: true;
    price?: true;
    createdAt?: true;
};
export type SaleOrderMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    billNumber?: true;
    dateOfSale?: true;
    materialCode?: true;
    description?: true;
    quantity?: true;
    spareType?: true;
    price?: true;
    createdAt?: true;
};
export type SaleOrderCountAggregateInputType = {
    id?: true;
    orderId?: true;
    billNumber?: true;
    dateOfSale?: true;
    materialCode?: true;
    description?: true;
    quantity?: true;
    spareType?: true;
    price?: true;
    createdAt?: true;
    _all?: true;
};
export type SaleOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleOrderWhereInput;
    orderBy?: Prisma.SaleOrderOrderByWithRelationInput | Prisma.SaleOrderOrderByWithRelationInput[];
    cursor?: Prisma.SaleOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SaleOrderCountAggregateInputType;
    _avg?: SaleOrderAvgAggregateInputType;
    _sum?: SaleOrderSumAggregateInputType;
    _min?: SaleOrderMinAggregateInputType;
    _max?: SaleOrderMaxAggregateInputType;
};
export type GetSaleOrderAggregateType<T extends SaleOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateSaleOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSaleOrder[P]> : Prisma.GetScalarType<T[P], AggregateSaleOrder[P]>;
};
export type SaleOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleOrderWhereInput;
    orderBy?: Prisma.SaleOrderOrderByWithAggregationInput | Prisma.SaleOrderOrderByWithAggregationInput[];
    by: Prisma.SaleOrderScalarFieldEnum[] | Prisma.SaleOrderScalarFieldEnum;
    having?: Prisma.SaleOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SaleOrderCountAggregateInputType | true;
    _avg?: SaleOrderAvgAggregateInputType;
    _sum?: SaleOrderSumAggregateInputType;
    _min?: SaleOrderMinAggregateInputType;
    _max?: SaleOrderMaxAggregateInputType;
};
export type SaleOrderGroupByOutputType = {
    id: string;
    orderId: string;
    billNumber: string;
    dateOfSale: Date;
    materialCode: string;
    description: string;
    quantity: number;
    spareType: $Enums.SpareType | null;
    price: number;
    createdAt: Date;
    _count: SaleOrderCountAggregateOutputType | null;
    _avg: SaleOrderAvgAggregateOutputType | null;
    _sum: SaleOrderSumAggregateOutputType | null;
    _min: SaleOrderMinAggregateOutputType | null;
    _max: SaleOrderMaxAggregateOutputType | null;
};
type GetSaleOrderGroupByPayload<T extends SaleOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SaleOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SaleOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SaleOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SaleOrderGroupByOutputType[P]>;
}>>;
export type SaleOrderWhereInput = {
    AND?: Prisma.SaleOrderWhereInput | Prisma.SaleOrderWhereInput[];
    OR?: Prisma.SaleOrderWhereInput[];
    NOT?: Prisma.SaleOrderWhereInput | Prisma.SaleOrderWhereInput[];
    id?: Prisma.StringFilter<"SaleOrder"> | string;
    orderId?: Prisma.StringFilter<"SaleOrder"> | string;
    billNumber?: Prisma.StringFilter<"SaleOrder"> | string;
    dateOfSale?: Prisma.DateTimeFilter<"SaleOrder"> | Date | string;
    materialCode?: Prisma.StringFilter<"SaleOrder"> | string;
    description?: Prisma.StringFilter<"SaleOrder"> | string;
    quantity?: Prisma.FloatFilter<"SaleOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableFilter<"SaleOrder"> | $Enums.SpareType | null;
    price?: Prisma.FloatFilter<"SaleOrder"> | number;
    createdAt?: Prisma.DateTimeFilter<"SaleOrder"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type SaleOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    billNumber?: Prisma.SortOrder;
    dateOfSale?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type SaleOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    billNumber?: string;
    AND?: Prisma.SaleOrderWhereInput | Prisma.SaleOrderWhereInput[];
    OR?: Prisma.SaleOrderWhereInput[];
    NOT?: Prisma.SaleOrderWhereInput | Prisma.SaleOrderWhereInput[];
    dateOfSale?: Prisma.DateTimeFilter<"SaleOrder"> | Date | string;
    materialCode?: Prisma.StringFilter<"SaleOrder"> | string;
    description?: Prisma.StringFilter<"SaleOrder"> | string;
    quantity?: Prisma.FloatFilter<"SaleOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableFilter<"SaleOrder"> | $Enums.SpareType | null;
    price?: Prisma.FloatFilter<"SaleOrder"> | number;
    createdAt?: Prisma.DateTimeFilter<"SaleOrder"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id" | "orderId" | "billNumber">;
export type SaleOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    billNumber?: Prisma.SortOrder;
    dateOfSale?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SaleOrderCountOrderByAggregateInput;
    _avg?: Prisma.SaleOrderAvgOrderByAggregateInput;
    _max?: Prisma.SaleOrderMaxOrderByAggregateInput;
    _min?: Prisma.SaleOrderMinOrderByAggregateInput;
    _sum?: Prisma.SaleOrderSumOrderByAggregateInput;
};
export type SaleOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.SaleOrderScalarWhereWithAggregatesInput | Prisma.SaleOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.SaleOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SaleOrderScalarWhereWithAggregatesInput | Prisma.SaleOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SaleOrder"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"SaleOrder"> | string;
    billNumber?: Prisma.StringWithAggregatesFilter<"SaleOrder"> | string;
    dateOfSale?: Prisma.DateTimeWithAggregatesFilter<"SaleOrder"> | Date | string;
    materialCode?: Prisma.StringWithAggregatesFilter<"SaleOrder"> | string;
    description?: Prisma.StringWithAggregatesFilter<"SaleOrder"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"SaleOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableWithAggregatesFilter<"SaleOrder"> | $Enums.SpareType | null;
    price?: Prisma.FloatWithAggregatesFilter<"SaleOrder"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SaleOrder"> | Date | string;
};
export type SaleOrderCreateInput = {
    id?: string;
    billNumber: string;
    dateOfSale: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutSaleOrderInput;
    material: Prisma.MaterialCreateNestedOneWithoutSaleOrdersInput;
};
export type SaleOrderUncheckedCreateInput = {
    id?: string;
    orderId: string;
    billNumber: string;
    dateOfSale: Date | string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
};
export type SaleOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutSaleOrderNestedInput;
    material?: Prisma.MaterialUpdateOneRequiredWithoutSaleOrdersNestedInput;
};
export type SaleOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleOrderCreateManyInput = {
    id?: string;
    orderId: string;
    billNumber: string;
    dateOfSale: Date | string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
};
export type SaleOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleOrderListRelationFilter = {
    every?: Prisma.SaleOrderWhereInput;
    some?: Prisma.SaleOrderWhereInput;
    none?: Prisma.SaleOrderWhereInput;
};
export type SaleOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SaleOrderNullableScalarRelationFilter = {
    is?: Prisma.SaleOrderWhereInput | null;
    isNot?: Prisma.SaleOrderWhereInput | null;
};
export type SaleOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    billNumber?: Prisma.SortOrder;
    dateOfSale?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SaleOrderAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SaleOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    billNumber?: Prisma.SortOrder;
    dateOfSale?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SaleOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    billNumber?: Prisma.SortOrder;
    dateOfSale?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SaleOrderSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type SaleOrderCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutMaterialInput, Prisma.SaleOrderUncheckedCreateWithoutMaterialInput> | Prisma.SaleOrderCreateWithoutMaterialInput[] | Prisma.SaleOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutMaterialInput | Prisma.SaleOrderCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.SaleOrderCreateManyMaterialInputEnvelope;
    connect?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
};
export type SaleOrderUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutMaterialInput, Prisma.SaleOrderUncheckedCreateWithoutMaterialInput> | Prisma.SaleOrderCreateWithoutMaterialInput[] | Prisma.SaleOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutMaterialInput | Prisma.SaleOrderCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.SaleOrderCreateManyMaterialInputEnvelope;
    connect?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
};
export type SaleOrderUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutMaterialInput, Prisma.SaleOrderUncheckedCreateWithoutMaterialInput> | Prisma.SaleOrderCreateWithoutMaterialInput[] | Prisma.SaleOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutMaterialInput | Prisma.SaleOrderCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.SaleOrderUpsertWithWhereUniqueWithoutMaterialInput | Prisma.SaleOrderUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.SaleOrderCreateManyMaterialInputEnvelope;
    set?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    disconnect?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    delete?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    connect?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    update?: Prisma.SaleOrderUpdateWithWhereUniqueWithoutMaterialInput | Prisma.SaleOrderUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.SaleOrderUpdateManyWithWhereWithoutMaterialInput | Prisma.SaleOrderUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.SaleOrderScalarWhereInput | Prisma.SaleOrderScalarWhereInput[];
};
export type SaleOrderUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutMaterialInput, Prisma.SaleOrderUncheckedCreateWithoutMaterialInput> | Prisma.SaleOrderCreateWithoutMaterialInput[] | Prisma.SaleOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutMaterialInput | Prisma.SaleOrderCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.SaleOrderUpsertWithWhereUniqueWithoutMaterialInput | Prisma.SaleOrderUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.SaleOrderCreateManyMaterialInputEnvelope;
    set?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    disconnect?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    delete?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    connect?: Prisma.SaleOrderWhereUniqueInput | Prisma.SaleOrderWhereUniqueInput[];
    update?: Prisma.SaleOrderUpdateWithWhereUniqueWithoutMaterialInput | Prisma.SaleOrderUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.SaleOrderUpdateManyWithWhereWithoutMaterialInput | Prisma.SaleOrderUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.SaleOrderScalarWhereInput | Prisma.SaleOrderScalarWhereInput[];
};
export type SaleOrderCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutOrderInput, Prisma.SaleOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutOrderInput;
    connect?: Prisma.SaleOrderWhereUniqueInput;
};
export type SaleOrderUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutOrderInput, Prisma.SaleOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutOrderInput;
    connect?: Prisma.SaleOrderWhereUniqueInput;
};
export type SaleOrderUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutOrderInput, Prisma.SaleOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.SaleOrderUpsertWithoutOrderInput;
    disconnect?: Prisma.SaleOrderWhereInput | boolean;
    delete?: Prisma.SaleOrderWhereInput | boolean;
    connect?: Prisma.SaleOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleOrderUpdateToOneWithWhereWithoutOrderInput, Prisma.SaleOrderUpdateWithoutOrderInput>, Prisma.SaleOrderUncheckedUpdateWithoutOrderInput>;
};
export type SaleOrderUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.SaleOrderCreateWithoutOrderInput, Prisma.SaleOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.SaleOrderCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.SaleOrderUpsertWithoutOrderInput;
    disconnect?: Prisma.SaleOrderWhereInput | boolean;
    delete?: Prisma.SaleOrderWhereInput | boolean;
    connect?: Prisma.SaleOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SaleOrderUpdateToOneWithWhereWithoutOrderInput, Prisma.SaleOrderUpdateWithoutOrderInput>, Prisma.SaleOrderUncheckedUpdateWithoutOrderInput>;
};
export type SaleOrderCreateWithoutMaterialInput = {
    id?: string;
    billNumber: string;
    dateOfSale: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutSaleOrderInput;
};
export type SaleOrderUncheckedCreateWithoutMaterialInput = {
    id?: string;
    orderId: string;
    billNumber: string;
    dateOfSale: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
};
export type SaleOrderCreateOrConnectWithoutMaterialInput = {
    where: Prisma.SaleOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleOrderCreateWithoutMaterialInput, Prisma.SaleOrderUncheckedCreateWithoutMaterialInput>;
};
export type SaleOrderCreateManyMaterialInputEnvelope = {
    data: Prisma.SaleOrderCreateManyMaterialInput | Prisma.SaleOrderCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type SaleOrderUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.SaleOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.SaleOrderUpdateWithoutMaterialInput, Prisma.SaleOrderUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.SaleOrderCreateWithoutMaterialInput, Prisma.SaleOrderUncheckedCreateWithoutMaterialInput>;
};
export type SaleOrderUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.SaleOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.SaleOrderUpdateWithoutMaterialInput, Prisma.SaleOrderUncheckedUpdateWithoutMaterialInput>;
};
export type SaleOrderUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.SaleOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.SaleOrderUpdateManyMutationInput, Prisma.SaleOrderUncheckedUpdateManyWithoutMaterialInput>;
};
export type SaleOrderScalarWhereInput = {
    AND?: Prisma.SaleOrderScalarWhereInput | Prisma.SaleOrderScalarWhereInput[];
    OR?: Prisma.SaleOrderScalarWhereInput[];
    NOT?: Prisma.SaleOrderScalarWhereInput | Prisma.SaleOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"SaleOrder"> | string;
    orderId?: Prisma.StringFilter<"SaleOrder"> | string;
    billNumber?: Prisma.StringFilter<"SaleOrder"> | string;
    dateOfSale?: Prisma.DateTimeFilter<"SaleOrder"> | Date | string;
    materialCode?: Prisma.StringFilter<"SaleOrder"> | string;
    description?: Prisma.StringFilter<"SaleOrder"> | string;
    quantity?: Prisma.FloatFilter<"SaleOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableFilter<"SaleOrder"> | $Enums.SpareType | null;
    price?: Prisma.FloatFilter<"SaleOrder"> | number;
    createdAt?: Prisma.DateTimeFilter<"SaleOrder"> | Date | string;
};
export type SaleOrderCreateWithoutOrderInput = {
    id?: string;
    billNumber: string;
    dateOfSale: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
    material: Prisma.MaterialCreateNestedOneWithoutSaleOrdersInput;
};
export type SaleOrderUncheckedCreateWithoutOrderInput = {
    id?: string;
    billNumber: string;
    dateOfSale: Date | string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
};
export type SaleOrderCreateOrConnectWithoutOrderInput = {
    where: Prisma.SaleOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleOrderCreateWithoutOrderInput, Prisma.SaleOrderUncheckedCreateWithoutOrderInput>;
};
export type SaleOrderUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.SaleOrderUpdateWithoutOrderInput, Prisma.SaleOrderUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.SaleOrderCreateWithoutOrderInput, Prisma.SaleOrderUncheckedCreateWithoutOrderInput>;
    where?: Prisma.SaleOrderWhereInput;
};
export type SaleOrderUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.SaleOrderWhereInput;
    data: Prisma.XOR<Prisma.SaleOrderUpdateWithoutOrderInput, Prisma.SaleOrderUncheckedUpdateWithoutOrderInput>;
};
export type SaleOrderUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutSaleOrdersNestedInput;
};
export type SaleOrderUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleOrderCreateManyMaterialInput = {
    id?: string;
    orderId: string;
    billNumber: string;
    dateOfSale: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    price: number;
    createdAt?: Date | string;
};
export type SaleOrderUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutSaleOrderNestedInput;
};
export type SaleOrderUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleOrderUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    billNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfSale?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SaleOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    billNumber?: boolean;
    dateOfSale?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    price?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saleOrder"]>;
export type SaleOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    billNumber?: boolean;
    dateOfSale?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    price?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saleOrder"]>;
export type SaleOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    billNumber?: boolean;
    dateOfSale?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    price?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["saleOrder"]>;
export type SaleOrderSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    billNumber?: boolean;
    dateOfSale?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    price?: boolean;
    createdAt?: boolean;
};
export type SaleOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "billNumber" | "dateOfSale" | "materialCode" | "description" | "quantity" | "spareType" | "price" | "createdAt", ExtArgs["result"]["saleOrder"]>;
export type SaleOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type SaleOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type SaleOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $SaleOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SaleOrder";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        billNumber: string;
        dateOfSale: Date;
        materialCode: string;
        description: string;
        quantity: number;
        spareType: $Enums.SpareType | null;
        price: number;
        createdAt: Date;
    }, ExtArgs["result"]["saleOrder"]>;
    composites: {};
};
export type SaleOrderGetPayload<S extends boolean | null | undefined | SaleOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload, S>;
export type SaleOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SaleOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SaleOrderCountAggregateInputType | true;
};
export interface SaleOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SaleOrder'];
        meta: {
            name: 'SaleOrder';
        };
    };
    findUnique<T extends SaleOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, SaleOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SaleOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SaleOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SaleOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, SaleOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SaleOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SaleOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SaleOrderFindManyArgs>(args?: Prisma.SelectSubset<T, SaleOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SaleOrderCreateArgs>(args: Prisma.SelectSubset<T, SaleOrderCreateArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SaleOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, SaleOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SaleOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SaleOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SaleOrderDeleteArgs>(args: Prisma.SelectSubset<T, SaleOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SaleOrderUpdateArgs>(args: Prisma.SelectSubset<T, SaleOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SaleOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, SaleOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SaleOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, SaleOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SaleOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SaleOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SaleOrderUpsertArgs>(args: Prisma.SelectSubset<T, SaleOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SaleOrderCountArgs>(args?: Prisma.Subset<T, SaleOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SaleOrderCountAggregateOutputType> : number>;
    aggregate<T extends SaleOrderAggregateArgs>(args: Prisma.Subset<T, SaleOrderAggregateArgs>): Prisma.PrismaPromise<GetSaleOrderAggregateType<T>>;
    groupBy<T extends SaleOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SaleOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: SaleOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SaleOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SaleOrderFieldRefs;
}
export interface Prisma__SaleOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SaleOrderFieldRefs {
    readonly id: Prisma.FieldRef<"SaleOrder", 'String'>;
    readonly orderId: Prisma.FieldRef<"SaleOrder", 'String'>;
    readonly billNumber: Prisma.FieldRef<"SaleOrder", 'String'>;
    readonly dateOfSale: Prisma.FieldRef<"SaleOrder", 'DateTime'>;
    readonly materialCode: Prisma.FieldRef<"SaleOrder", 'String'>;
    readonly description: Prisma.FieldRef<"SaleOrder", 'String'>;
    readonly quantity: Prisma.FieldRef<"SaleOrder", 'Float'>;
    readonly spareType: Prisma.FieldRef<"SaleOrder", 'SpareType'>;
    readonly price: Prisma.FieldRef<"SaleOrder", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"SaleOrder", 'DateTime'>;
}
export type SaleOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where: Prisma.SaleOrderWhereUniqueInput;
};
export type SaleOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where: Prisma.SaleOrderWhereUniqueInput;
};
export type SaleOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where?: Prisma.SaleOrderWhereInput;
    orderBy?: Prisma.SaleOrderOrderByWithRelationInput | Prisma.SaleOrderOrderByWithRelationInput[];
    cursor?: Prisma.SaleOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleOrderScalarFieldEnum | Prisma.SaleOrderScalarFieldEnum[];
};
export type SaleOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where?: Prisma.SaleOrderWhereInput;
    orderBy?: Prisma.SaleOrderOrderByWithRelationInput | Prisma.SaleOrderOrderByWithRelationInput[];
    cursor?: Prisma.SaleOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleOrderScalarFieldEnum | Prisma.SaleOrderScalarFieldEnum[];
};
export type SaleOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where?: Prisma.SaleOrderWhereInput;
    orderBy?: Prisma.SaleOrderOrderByWithRelationInput | Prisma.SaleOrderOrderByWithRelationInput[];
    cursor?: Prisma.SaleOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SaleOrderScalarFieldEnum | Prisma.SaleOrderScalarFieldEnum[];
};
export type SaleOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleOrderCreateInput, Prisma.SaleOrderUncheckedCreateInput>;
};
export type SaleOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SaleOrderCreateManyInput | Prisma.SaleOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SaleOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    data: Prisma.SaleOrderCreateManyInput | Prisma.SaleOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SaleOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SaleOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleOrderUpdateInput, Prisma.SaleOrderUncheckedUpdateInput>;
    where: Prisma.SaleOrderWhereUniqueInput;
};
export type SaleOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SaleOrderUpdateManyMutationInput, Prisma.SaleOrderUncheckedUpdateManyInput>;
    where?: Prisma.SaleOrderWhereInput;
    limit?: number;
};
export type SaleOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SaleOrderUpdateManyMutationInput, Prisma.SaleOrderUncheckedUpdateManyInput>;
    where?: Prisma.SaleOrderWhereInput;
    limit?: number;
    include?: Prisma.SaleOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SaleOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where: Prisma.SaleOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.SaleOrderCreateInput, Prisma.SaleOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SaleOrderUpdateInput, Prisma.SaleOrderUncheckedUpdateInput>;
};
export type SaleOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where: Prisma.SaleOrderWhereUniqueInput;
};
export type SaleOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SaleOrderWhereInput;
    limit?: number;
};
export type SaleOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
};
export {};
