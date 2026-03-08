import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WarrantyAmcOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$WarrantyAmcOrderPayload>;
export type AggregateWarrantyAmcOrder = {
    _count: WarrantyAmcOrderCountAggregateOutputType | null;
    _avg: WarrantyAmcOrderAvgAggregateOutputType | null;
    _sum: WarrantyAmcOrderSumAggregateOutputType | null;
    _min: WarrantyAmcOrderMinAggregateOutputType | null;
    _max: WarrantyAmcOrderMaxAggregateOutputType | null;
};
export type WarrantyAmcOrderAvgAggregateOutputType = {
    quantity: number | null;
};
export type WarrantyAmcOrderSumAggregateOutputType = {
    quantity: number | null;
};
export type WarrantyAmcOrderMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    ticketNumber: string | null;
    customerName: string | null;
    date: Date | null;
    materialCode: string | null;
    description: string | null;
    quantity: number | null;
    spareType: $Enums.SpareType | null;
    createdAt: Date | null;
};
export type WarrantyAmcOrderMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    ticketNumber: string | null;
    customerName: string | null;
    date: Date | null;
    materialCode: string | null;
    description: string | null;
    quantity: number | null;
    spareType: $Enums.SpareType | null;
    createdAt: Date | null;
};
export type WarrantyAmcOrderCountAggregateOutputType = {
    id: number;
    orderId: number;
    ticketNumber: number;
    customerName: number;
    date: number;
    materialCode: number;
    description: number;
    quantity: number;
    spareType: number;
    createdAt: number;
    _all: number;
};
export type WarrantyAmcOrderAvgAggregateInputType = {
    quantity?: true;
};
export type WarrantyAmcOrderSumAggregateInputType = {
    quantity?: true;
};
export type WarrantyAmcOrderMinAggregateInputType = {
    id?: true;
    orderId?: true;
    ticketNumber?: true;
    customerName?: true;
    date?: true;
    materialCode?: true;
    description?: true;
    quantity?: true;
    spareType?: true;
    createdAt?: true;
};
export type WarrantyAmcOrderMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    ticketNumber?: true;
    customerName?: true;
    date?: true;
    materialCode?: true;
    description?: true;
    quantity?: true;
    spareType?: true;
    createdAt?: true;
};
export type WarrantyAmcOrderCountAggregateInputType = {
    id?: true;
    orderId?: true;
    ticketNumber?: true;
    customerName?: true;
    date?: true;
    materialCode?: true;
    description?: true;
    quantity?: true;
    spareType?: true;
    createdAt?: true;
    _all?: true;
};
export type WarrantyAmcOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarrantyAmcOrderWhereInput;
    orderBy?: Prisma.WarrantyAmcOrderOrderByWithRelationInput | Prisma.WarrantyAmcOrderOrderByWithRelationInput[];
    cursor?: Prisma.WarrantyAmcOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WarrantyAmcOrderCountAggregateInputType;
    _avg?: WarrantyAmcOrderAvgAggregateInputType;
    _sum?: WarrantyAmcOrderSumAggregateInputType;
    _min?: WarrantyAmcOrderMinAggregateInputType;
    _max?: WarrantyAmcOrderMaxAggregateInputType;
};
export type GetWarrantyAmcOrderAggregateType<T extends WarrantyAmcOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateWarrantyAmcOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWarrantyAmcOrder[P]> : Prisma.GetScalarType<T[P], AggregateWarrantyAmcOrder[P]>;
};
export type WarrantyAmcOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarrantyAmcOrderWhereInput;
    orderBy?: Prisma.WarrantyAmcOrderOrderByWithAggregationInput | Prisma.WarrantyAmcOrderOrderByWithAggregationInput[];
    by: Prisma.WarrantyAmcOrderScalarFieldEnum[] | Prisma.WarrantyAmcOrderScalarFieldEnum;
    having?: Prisma.WarrantyAmcOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WarrantyAmcOrderCountAggregateInputType | true;
    _avg?: WarrantyAmcOrderAvgAggregateInputType;
    _sum?: WarrantyAmcOrderSumAggregateInputType;
    _min?: WarrantyAmcOrderMinAggregateInputType;
    _max?: WarrantyAmcOrderMaxAggregateInputType;
};
export type WarrantyAmcOrderGroupByOutputType = {
    id: string;
    orderId: string;
    ticketNumber: string;
    customerName: string;
    date: Date;
    materialCode: string;
    description: string;
    quantity: number;
    spareType: $Enums.SpareType | null;
    createdAt: Date;
    _count: WarrantyAmcOrderCountAggregateOutputType | null;
    _avg: WarrantyAmcOrderAvgAggregateOutputType | null;
    _sum: WarrantyAmcOrderSumAggregateOutputType | null;
    _min: WarrantyAmcOrderMinAggregateOutputType | null;
    _max: WarrantyAmcOrderMaxAggregateOutputType | null;
};
type GetWarrantyAmcOrderGroupByPayload<T extends WarrantyAmcOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WarrantyAmcOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WarrantyAmcOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WarrantyAmcOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WarrantyAmcOrderGroupByOutputType[P]>;
}>>;
export type WarrantyAmcOrderWhereInput = {
    AND?: Prisma.WarrantyAmcOrderWhereInput | Prisma.WarrantyAmcOrderWhereInput[];
    OR?: Prisma.WarrantyAmcOrderWhereInput[];
    NOT?: Prisma.WarrantyAmcOrderWhereInput | Prisma.WarrantyAmcOrderWhereInput[];
    id?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    orderId?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    ticketNumber?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    customerName?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    date?: Prisma.DateTimeFilter<"WarrantyAmcOrder"> | Date | string;
    materialCode?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    description?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    quantity?: Prisma.FloatFilter<"WarrantyAmcOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableFilter<"WarrantyAmcOrder"> | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFilter<"WarrantyAmcOrder"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type WarrantyAmcOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.OrderOrderByWithRelationInput;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type WarrantyAmcOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.WarrantyAmcOrderWhereInput | Prisma.WarrantyAmcOrderWhereInput[];
    OR?: Prisma.WarrantyAmcOrderWhereInput[];
    NOT?: Prisma.WarrantyAmcOrderWhereInput | Prisma.WarrantyAmcOrderWhereInput[];
    ticketNumber?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    customerName?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    date?: Prisma.DateTimeFilter<"WarrantyAmcOrder"> | Date | string;
    materialCode?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    description?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    quantity?: Prisma.FloatFilter<"WarrantyAmcOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableFilter<"WarrantyAmcOrder"> | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFilter<"WarrantyAmcOrder"> | Date | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id" | "orderId">;
export type WarrantyAmcOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WarrantyAmcOrderCountOrderByAggregateInput;
    _avg?: Prisma.WarrantyAmcOrderAvgOrderByAggregateInput;
    _max?: Prisma.WarrantyAmcOrderMaxOrderByAggregateInput;
    _min?: Prisma.WarrantyAmcOrderMinOrderByAggregateInput;
    _sum?: Prisma.WarrantyAmcOrderSumOrderByAggregateInput;
};
export type WarrantyAmcOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.WarrantyAmcOrderScalarWhereWithAggregatesInput | Prisma.WarrantyAmcOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.WarrantyAmcOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WarrantyAmcOrderScalarWhereWithAggregatesInput | Prisma.WarrantyAmcOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WarrantyAmcOrder"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"WarrantyAmcOrder"> | string;
    ticketNumber?: Prisma.StringWithAggregatesFilter<"WarrantyAmcOrder"> | string;
    customerName?: Prisma.StringWithAggregatesFilter<"WarrantyAmcOrder"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"WarrantyAmcOrder"> | Date | string;
    materialCode?: Prisma.StringWithAggregatesFilter<"WarrantyAmcOrder"> | string;
    description?: Prisma.StringWithAggregatesFilter<"WarrantyAmcOrder"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"WarrantyAmcOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableWithAggregatesFilter<"WarrantyAmcOrder"> | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WarrantyAmcOrder"> | Date | string;
};
export type WarrantyAmcOrderCreateInput = {
    id?: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutWarrantyAmcOrderInput;
    material: Prisma.MaterialCreateNestedOneWithoutWarrantyAmcOrdersInput;
};
export type WarrantyAmcOrderUncheckedCreateInput = {
    id?: string;
    orderId: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
};
export type WarrantyAmcOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutWarrantyAmcOrderNestedInput;
    material?: Prisma.MaterialUpdateOneRequiredWithoutWarrantyAmcOrdersNestedInput;
};
export type WarrantyAmcOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarrantyAmcOrderCreateManyInput = {
    id?: string;
    orderId: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
};
export type WarrantyAmcOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarrantyAmcOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarrantyAmcOrderListRelationFilter = {
    every?: Prisma.WarrantyAmcOrderWhereInput;
    some?: Prisma.WarrantyAmcOrderWhereInput;
    none?: Prisma.WarrantyAmcOrderWhereInput;
};
export type WarrantyAmcOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WarrantyAmcOrderNullableScalarRelationFilter = {
    is?: Prisma.WarrantyAmcOrderWhereInput | null;
    isNot?: Prisma.WarrantyAmcOrderWhereInput | null;
};
export type WarrantyAmcOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WarrantyAmcOrderAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type WarrantyAmcOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WarrantyAmcOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    ticketNumber?: Prisma.SortOrder;
    customerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    spareType?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WarrantyAmcOrderSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type WarrantyAmcOrderCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput> | Prisma.WarrantyAmcOrderCreateWithoutMaterialInput[] | Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput | Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.WarrantyAmcOrderCreateManyMaterialInputEnvelope;
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
};
export type WarrantyAmcOrderUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput> | Prisma.WarrantyAmcOrderCreateWithoutMaterialInput[] | Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput | Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.WarrantyAmcOrderCreateManyMaterialInputEnvelope;
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
};
export type WarrantyAmcOrderUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput> | Prisma.WarrantyAmcOrderCreateWithoutMaterialInput[] | Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput | Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.WarrantyAmcOrderUpsertWithWhereUniqueWithoutMaterialInput | Prisma.WarrantyAmcOrderUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.WarrantyAmcOrderCreateManyMaterialInputEnvelope;
    set?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    disconnect?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    delete?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    update?: Prisma.WarrantyAmcOrderUpdateWithWhereUniqueWithoutMaterialInput | Prisma.WarrantyAmcOrderUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.WarrantyAmcOrderUpdateManyWithWhereWithoutMaterialInput | Prisma.WarrantyAmcOrderUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.WarrantyAmcOrderScalarWhereInput | Prisma.WarrantyAmcOrderScalarWhereInput[];
};
export type WarrantyAmcOrderUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput> | Prisma.WarrantyAmcOrderCreateWithoutMaterialInput[] | Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput | Prisma.WarrantyAmcOrderCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.WarrantyAmcOrderUpsertWithWhereUniqueWithoutMaterialInput | Prisma.WarrantyAmcOrderUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.WarrantyAmcOrderCreateManyMaterialInputEnvelope;
    set?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    disconnect?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    delete?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput | Prisma.WarrantyAmcOrderWhereUniqueInput[];
    update?: Prisma.WarrantyAmcOrderUpdateWithWhereUniqueWithoutMaterialInput | Prisma.WarrantyAmcOrderUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.WarrantyAmcOrderUpdateManyWithWhereWithoutMaterialInput | Prisma.WarrantyAmcOrderUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.WarrantyAmcOrderScalarWhereInput | Prisma.WarrantyAmcOrderScalarWhereInput[];
};
export type WarrantyAmcOrderCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutOrderInput;
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput;
};
export type WarrantyAmcOrderUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutOrderInput;
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput;
};
export type WarrantyAmcOrderUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.WarrantyAmcOrderUpsertWithoutOrderInput;
    disconnect?: Prisma.WarrantyAmcOrderWhereInput | boolean;
    delete?: Prisma.WarrantyAmcOrderWhereInput | boolean;
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WarrantyAmcOrderUpdateToOneWithWhereWithoutOrderInput, Prisma.WarrantyAmcOrderUpdateWithoutOrderInput>, Prisma.WarrantyAmcOrderUncheckedUpdateWithoutOrderInput>;
};
export type WarrantyAmcOrderUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.WarrantyAmcOrderCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.WarrantyAmcOrderUpsertWithoutOrderInput;
    disconnect?: Prisma.WarrantyAmcOrderWhereInput | boolean;
    delete?: Prisma.WarrantyAmcOrderWhereInput | boolean;
    connect?: Prisma.WarrantyAmcOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WarrantyAmcOrderUpdateToOneWithWhereWithoutOrderInput, Prisma.WarrantyAmcOrderUpdateWithoutOrderInput>, Prisma.WarrantyAmcOrderUncheckedUpdateWithoutOrderInput>;
};
export type WarrantyAmcOrderCreateWithoutMaterialInput = {
    id?: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutWarrantyAmcOrderInput;
};
export type WarrantyAmcOrderUncheckedCreateWithoutMaterialInput = {
    id?: string;
    orderId: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
};
export type WarrantyAmcOrderCreateOrConnectWithoutMaterialInput = {
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput>;
};
export type WarrantyAmcOrderCreateManyMaterialInputEnvelope = {
    data: Prisma.WarrantyAmcOrderCreateManyMaterialInput | Prisma.WarrantyAmcOrderCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type WarrantyAmcOrderUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutMaterialInput>;
};
export type WarrantyAmcOrderUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateWithoutMaterialInput, Prisma.WarrantyAmcOrderUncheckedUpdateWithoutMaterialInput>;
};
export type WarrantyAmcOrderUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.WarrantyAmcOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateManyMutationInput, Prisma.WarrantyAmcOrderUncheckedUpdateManyWithoutMaterialInput>;
};
export type WarrantyAmcOrderScalarWhereInput = {
    AND?: Prisma.WarrantyAmcOrderScalarWhereInput | Prisma.WarrantyAmcOrderScalarWhereInput[];
    OR?: Prisma.WarrantyAmcOrderScalarWhereInput[];
    NOT?: Prisma.WarrantyAmcOrderScalarWhereInput | Prisma.WarrantyAmcOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    orderId?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    ticketNumber?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    customerName?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    date?: Prisma.DateTimeFilter<"WarrantyAmcOrder"> | Date | string;
    materialCode?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    description?: Prisma.StringFilter<"WarrantyAmcOrder"> | string;
    quantity?: Prisma.FloatFilter<"WarrantyAmcOrder"> | number;
    spareType?: Prisma.EnumSpareTypeNullableFilter<"WarrantyAmcOrder"> | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFilter<"WarrantyAmcOrder"> | Date | string;
};
export type WarrantyAmcOrderCreateWithoutOrderInput = {
    id?: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
    material: Prisma.MaterialCreateNestedOneWithoutWarrantyAmcOrdersInput;
};
export type WarrantyAmcOrderUncheckedCreateWithoutOrderInput = {
    id?: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
};
export type WarrantyAmcOrderCreateOrConnectWithoutOrderInput = {
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutOrderInput>;
};
export type WarrantyAmcOrderUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.WarrantyAmcOrderCreateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedCreateWithoutOrderInput>;
    where?: Prisma.WarrantyAmcOrderWhereInput;
};
export type WarrantyAmcOrderUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.WarrantyAmcOrderWhereInput;
    data: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateWithoutOrderInput, Prisma.WarrantyAmcOrderUncheckedUpdateWithoutOrderInput>;
};
export type WarrantyAmcOrderUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutWarrantyAmcOrdersNestedInput;
};
export type WarrantyAmcOrderUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarrantyAmcOrderCreateManyMaterialInput = {
    id?: string;
    orderId: string;
    ticketNumber: string;
    customerName: string;
    date: Date | string;
    description: string;
    quantity: number;
    spareType?: $Enums.SpareType | null;
    createdAt?: Date | string;
};
export type WarrantyAmcOrderUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutWarrantyAmcOrderNestedInput;
};
export type WarrantyAmcOrderUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarrantyAmcOrderUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    customerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    spareType?: Prisma.NullableEnumSpareTypeFieldUpdateOperationsInput | $Enums.SpareType | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarrantyAmcOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    ticketNumber?: boolean;
    customerName?: boolean;
    date?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warrantyAmcOrder"]>;
export type WarrantyAmcOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    ticketNumber?: boolean;
    customerName?: boolean;
    date?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warrantyAmcOrder"]>;
export type WarrantyAmcOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    ticketNumber?: boolean;
    customerName?: boolean;
    date?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warrantyAmcOrder"]>;
export type WarrantyAmcOrderSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    ticketNumber?: boolean;
    customerName?: boolean;
    date?: boolean;
    materialCode?: boolean;
    description?: boolean;
    quantity?: boolean;
    spareType?: boolean;
    createdAt?: boolean;
};
export type WarrantyAmcOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "ticketNumber" | "customerName" | "date" | "materialCode" | "description" | "quantity" | "spareType" | "createdAt", ExtArgs["result"]["warrantyAmcOrder"]>;
export type WarrantyAmcOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type WarrantyAmcOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type WarrantyAmcOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $WarrantyAmcOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WarrantyAmcOrder";
    objects: {
        order: Prisma.$OrderPayload<ExtArgs>;
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        ticketNumber: string;
        customerName: string;
        date: Date;
        materialCode: string;
        description: string;
        quantity: number;
        spareType: $Enums.SpareType | null;
        createdAt: Date;
    }, ExtArgs["result"]["warrantyAmcOrder"]>;
    composites: {};
};
export type WarrantyAmcOrderGetPayload<S extends boolean | null | undefined | WarrantyAmcOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload, S>;
export type WarrantyAmcOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WarrantyAmcOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WarrantyAmcOrderCountAggregateInputType | true;
};
export interface WarrantyAmcOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WarrantyAmcOrder'];
        meta: {
            name: 'WarrantyAmcOrder';
        };
    };
    findUnique<T extends WarrantyAmcOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WarrantyAmcOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WarrantyAmcOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, WarrantyAmcOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WarrantyAmcOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WarrantyAmcOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WarrantyAmcOrderFindManyArgs>(args?: Prisma.SelectSubset<T, WarrantyAmcOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WarrantyAmcOrderCreateArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderCreateArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WarrantyAmcOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, WarrantyAmcOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WarrantyAmcOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WarrantyAmcOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WarrantyAmcOrderDeleteArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WarrantyAmcOrderUpdateArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WarrantyAmcOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, WarrantyAmcOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WarrantyAmcOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WarrantyAmcOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WarrantyAmcOrderUpsertArgs>(args: Prisma.SelectSubset<T, WarrantyAmcOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WarrantyAmcOrderCountArgs>(args?: Prisma.Subset<T, WarrantyAmcOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WarrantyAmcOrderCountAggregateOutputType> : number>;
    aggregate<T extends WarrantyAmcOrderAggregateArgs>(args: Prisma.Subset<T, WarrantyAmcOrderAggregateArgs>): Prisma.PrismaPromise<GetWarrantyAmcOrderAggregateType<T>>;
    groupBy<T extends WarrantyAmcOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WarrantyAmcOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: WarrantyAmcOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WarrantyAmcOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarrantyAmcOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WarrantyAmcOrderFieldRefs;
}
export interface Prisma__WarrantyAmcOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WarrantyAmcOrderFieldRefs {
    readonly id: Prisma.FieldRef<"WarrantyAmcOrder", 'String'>;
    readonly orderId: Prisma.FieldRef<"WarrantyAmcOrder", 'String'>;
    readonly ticketNumber: Prisma.FieldRef<"WarrantyAmcOrder", 'String'>;
    readonly customerName: Prisma.FieldRef<"WarrantyAmcOrder", 'String'>;
    readonly date: Prisma.FieldRef<"WarrantyAmcOrder", 'DateTime'>;
    readonly materialCode: Prisma.FieldRef<"WarrantyAmcOrder", 'String'>;
    readonly description: Prisma.FieldRef<"WarrantyAmcOrder", 'String'>;
    readonly quantity: Prisma.FieldRef<"WarrantyAmcOrder", 'Float'>;
    readonly spareType: Prisma.FieldRef<"WarrantyAmcOrder", 'SpareType'>;
    readonly createdAt: Prisma.FieldRef<"WarrantyAmcOrder", 'DateTime'>;
}
export type WarrantyAmcOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
};
export type WarrantyAmcOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
};
export type WarrantyAmcOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where?: Prisma.WarrantyAmcOrderWhereInput;
    orderBy?: Prisma.WarrantyAmcOrderOrderByWithRelationInput | Prisma.WarrantyAmcOrderOrderByWithRelationInput[];
    cursor?: Prisma.WarrantyAmcOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarrantyAmcOrderScalarFieldEnum | Prisma.WarrantyAmcOrderScalarFieldEnum[];
};
export type WarrantyAmcOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where?: Prisma.WarrantyAmcOrderWhereInput;
    orderBy?: Prisma.WarrantyAmcOrderOrderByWithRelationInput | Prisma.WarrantyAmcOrderOrderByWithRelationInput[];
    cursor?: Prisma.WarrantyAmcOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarrantyAmcOrderScalarFieldEnum | Prisma.WarrantyAmcOrderScalarFieldEnum[];
};
export type WarrantyAmcOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where?: Prisma.WarrantyAmcOrderWhereInput;
    orderBy?: Prisma.WarrantyAmcOrderOrderByWithRelationInput | Prisma.WarrantyAmcOrderOrderByWithRelationInput[];
    cursor?: Prisma.WarrantyAmcOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarrantyAmcOrderScalarFieldEnum | Prisma.WarrantyAmcOrderScalarFieldEnum[];
};
export type WarrantyAmcOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarrantyAmcOrderCreateInput, Prisma.WarrantyAmcOrderUncheckedCreateInput>;
};
export type WarrantyAmcOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WarrantyAmcOrderCreateManyInput | Prisma.WarrantyAmcOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WarrantyAmcOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    data: Prisma.WarrantyAmcOrderCreateManyInput | Prisma.WarrantyAmcOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WarrantyAmcOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WarrantyAmcOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateInput, Prisma.WarrantyAmcOrderUncheckedUpdateInput>;
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
};
export type WarrantyAmcOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateManyMutationInput, Prisma.WarrantyAmcOrderUncheckedUpdateManyInput>;
    where?: Prisma.WarrantyAmcOrderWhereInput;
    limit?: number;
};
export type WarrantyAmcOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateManyMutationInput, Prisma.WarrantyAmcOrderUncheckedUpdateManyInput>;
    where?: Prisma.WarrantyAmcOrderWhereInput;
    limit?: number;
    include?: Prisma.WarrantyAmcOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WarrantyAmcOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarrantyAmcOrderCreateInput, Prisma.WarrantyAmcOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WarrantyAmcOrderUpdateInput, Prisma.WarrantyAmcOrderUncheckedUpdateInput>;
};
export type WarrantyAmcOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where: Prisma.WarrantyAmcOrderWhereUniqueInput;
};
export type WarrantyAmcOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarrantyAmcOrderWhereInput;
    limit?: number;
};
export type WarrantyAmcOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
};
export {};
