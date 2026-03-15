import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OrderModel = runtime.Types.Result.DefaultSelection<Prisma.$OrderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderMinAggregateOutputType = {
    id: string | null;
    orderType: $Enums.OrderType | null;
    engineerId: string | null;
    franchiseeId: string | null;
    createdAt: Date | null;
};
export type OrderMaxAggregateOutputType = {
    id: string | null;
    orderType: $Enums.OrderType | null;
    engineerId: string | null;
    franchiseeId: string | null;
    createdAt: Date | null;
};
export type OrderCountAggregateOutputType = {
    id: number;
    orderType: number;
    engineerId: number;
    franchiseeId: number;
    createdAt: number;
    _all: number;
};
export type OrderMinAggregateInputType = {
    id?: true;
    orderType?: true;
    engineerId?: true;
    franchiseeId?: true;
    createdAt?: true;
};
export type OrderMaxAggregateInputType = {
    id?: true;
    orderType?: true;
    engineerId?: true;
    franchiseeId?: true;
    createdAt?: true;
};
export type OrderCountAggregateInputType = {
    id?: true;
    orderType?: true;
    engineerId?: true;
    franchiseeId?: true;
    createdAt?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type OrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithAggregationInput | Prisma.OrderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    id: string;
    orderType: $Enums.OrderType;
    engineerId: string;
    franchiseeId: string;
    createdAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type OrderWhereInput = {
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    orderType?: Prisma.EnumOrderTypeFilter<"Order"> | $Enums.OrderType;
    engineerId?: Prisma.StringFilter<"Order"> | string;
    franchiseeId?: Prisma.StringFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    engineer?: Prisma.XOR<Prisma.EngineerScalarRelationFilter, Prisma.EngineerWhereInput>;
    saleOrder?: Prisma.XOR<Prisma.SaleOrderNullableScalarRelationFilter, Prisma.SaleOrderWhereInput> | null;
    warrantyAmcOrder?: Prisma.XOR<Prisma.WarrantyAmcOrderNullableScalarRelationFilter, Prisma.WarrantyAmcOrderWhereInput> | null;
    returnToGodownOrder?: Prisma.XOR<Prisma.ReturnToGodownOrderNullableScalarRelationFilter, Prisma.ReturnToGodownOrderWhereInput> | null;
};
export type OrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderType?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    engineer?: Prisma.EngineerOrderByWithRelationInput;
    saleOrder?: Prisma.SaleOrderOrderByWithRelationInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderOrderByWithRelationInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderOrderByWithRelationInput;
};
export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    OR?: Prisma.OrderWhereInput[];
    NOT?: Prisma.OrderWhereInput | Prisma.OrderWhereInput[];
    orderType?: Prisma.EnumOrderTypeFilter<"Order"> | $Enums.OrderType;
    engineerId?: Prisma.StringFilter<"Order"> | string;
    franchiseeId?: Prisma.StringFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
    engineer?: Prisma.XOR<Prisma.EngineerScalarRelationFilter, Prisma.EngineerWhereInput>;
    saleOrder?: Prisma.XOR<Prisma.SaleOrderNullableScalarRelationFilter, Prisma.SaleOrderWhereInput> | null;
    warrantyAmcOrder?: Prisma.XOR<Prisma.WarrantyAmcOrderNullableScalarRelationFilter, Prisma.WarrantyAmcOrderWhereInput> | null;
    returnToGodownOrder?: Prisma.XOR<Prisma.ReturnToGodownOrderNullableScalarRelationFilter, Prisma.ReturnToGodownOrderWhereInput> | null;
}, "id">;
export type OrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderType?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.OrderCountOrderByAggregateInput;
    _max?: Prisma.OrderMaxOrderByAggregateInput;
    _min?: Prisma.OrderMinOrderByAggregateInput;
};
export type OrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrderScalarWhereWithAggregatesInput | Prisma.OrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    orderType?: Prisma.EnumOrderTypeWithAggregatesFilter<"Order"> | $Enums.OrderType;
    engineerId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    franchiseeId?: Prisma.StringWithAggregatesFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Order"> | Date | string;
};
export type OrderCreateInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
    engineer: Prisma.EngineerCreateNestedOneWithoutOrdersInput;
    saleOrder?: Prisma.SaleOrderCreateNestedOneWithoutOrderInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateInput = {
    id?: string;
    orderType: $Enums.OrderType;
    engineerId: string;
    franchiseeId: string;
    createdAt?: Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedCreateNestedOneWithoutOrderInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    engineer?: Prisma.EngineerUpdateOneRequiredWithoutOrdersNestedInput;
    saleOrder?: Prisma.SaleOrderUpdateOneWithoutOrderNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedUpdateOneWithoutOrderNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateManyInput = {
    id?: string;
    orderType: $Enums.OrderType;
    engineerId: string;
    franchiseeId: string;
    createdAt?: Date | string;
};
export type OrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderListRelationFilter = {
    every?: Prisma.OrderWhereInput;
    some?: Prisma.OrderWhereInput;
    none?: Prisma.OrderWhereInput;
};
export type OrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderType?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderType?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderType?: Prisma.SortOrder;
    engineerId?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.OrderWhereInput;
    isNot?: Prisma.OrderWhereInput;
};
export type OrderCreateNestedManyWithoutEngineerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutEngineerInput, Prisma.OrderUncheckedCreateWithoutEngineerInput> | Prisma.OrderCreateWithoutEngineerInput[] | Prisma.OrderUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutEngineerInput | Prisma.OrderCreateOrConnectWithoutEngineerInput[];
    createMany?: Prisma.OrderCreateManyEngineerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutEngineerInput, Prisma.OrderUncheckedCreateWithoutEngineerInput> | Prisma.OrderCreateWithoutEngineerInput[] | Prisma.OrderUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutEngineerInput | Prisma.OrderCreateOrConnectWithoutEngineerInput[];
    createMany?: Prisma.OrderCreateManyEngineerInputEnvelope;
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
};
export type OrderUpdateManyWithoutEngineerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutEngineerInput, Prisma.OrderUncheckedCreateWithoutEngineerInput> | Prisma.OrderCreateWithoutEngineerInput[] | Prisma.OrderUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutEngineerInput | Prisma.OrderCreateOrConnectWithoutEngineerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutEngineerInput | Prisma.OrderUpsertWithWhereUniqueWithoutEngineerInput[];
    createMany?: Prisma.OrderCreateManyEngineerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutEngineerInput | Prisma.OrderUpdateWithWhereUniqueWithoutEngineerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutEngineerInput | Prisma.OrderUpdateManyWithWhereWithoutEngineerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type OrderUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutEngineerInput, Prisma.OrderUncheckedCreateWithoutEngineerInput> | Prisma.OrderCreateWithoutEngineerInput[] | Prisma.OrderUncheckedCreateWithoutEngineerInput[];
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutEngineerInput | Prisma.OrderCreateOrConnectWithoutEngineerInput[];
    upsert?: Prisma.OrderUpsertWithWhereUniqueWithoutEngineerInput | Prisma.OrderUpsertWithWhereUniqueWithoutEngineerInput[];
    createMany?: Prisma.OrderCreateManyEngineerInputEnvelope;
    set?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    disconnect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    delete?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    connect?: Prisma.OrderWhereUniqueInput | Prisma.OrderWhereUniqueInput[];
    update?: Prisma.OrderUpdateWithWhereUniqueWithoutEngineerInput | Prisma.OrderUpdateWithWhereUniqueWithoutEngineerInput[];
    updateMany?: Prisma.OrderUpdateManyWithWhereWithoutEngineerInput | Prisma.OrderUpdateManyWithWhereWithoutEngineerInput[];
    deleteMany?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
};
export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType;
};
export type OrderCreateNestedOneWithoutSaleOrderInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSaleOrderInput, Prisma.OrderUncheckedCreateWithoutSaleOrderInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSaleOrderInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutSaleOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutSaleOrderInput, Prisma.OrderUncheckedCreateWithoutSaleOrderInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutSaleOrderInput;
    upsert?: Prisma.OrderUpsertWithoutSaleOrderInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutSaleOrderInput, Prisma.OrderUpdateWithoutSaleOrderInput>, Prisma.OrderUncheckedUpdateWithoutSaleOrderInput>;
};
export type OrderCreateNestedOneWithoutWarrantyAmcOrderInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutWarrantyAmcOrderInput, Prisma.OrderUncheckedCreateWithoutWarrantyAmcOrderInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutWarrantyAmcOrderInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutWarrantyAmcOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutWarrantyAmcOrderInput, Prisma.OrderUncheckedCreateWithoutWarrantyAmcOrderInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutWarrantyAmcOrderInput;
    upsert?: Prisma.OrderUpsertWithoutWarrantyAmcOrderInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutWarrantyAmcOrderInput, Prisma.OrderUpdateWithoutWarrantyAmcOrderInput>, Prisma.OrderUncheckedUpdateWithoutWarrantyAmcOrderInput>;
};
export type OrderCreateNestedOneWithoutReturnToGodownOrderInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutReturnToGodownOrderInput, Prisma.OrderUncheckedCreateWithoutReturnToGodownOrderInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutReturnToGodownOrderInput;
    connect?: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateOneRequiredWithoutReturnToGodownOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OrderCreateWithoutReturnToGodownOrderInput, Prisma.OrderUncheckedCreateWithoutReturnToGodownOrderInput>;
    connectOrCreate?: Prisma.OrderCreateOrConnectWithoutReturnToGodownOrderInput;
    upsert?: Prisma.OrderUpsertWithoutReturnToGodownOrderInput;
    connect?: Prisma.OrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrderUpdateToOneWithWhereWithoutReturnToGodownOrderInput, Prisma.OrderUpdateWithoutReturnToGodownOrderInput>, Prisma.OrderUncheckedUpdateWithoutReturnToGodownOrderInput>;
};
export type OrderCreateWithoutEngineerInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
    saleOrder?: Prisma.SaleOrderCreateNestedOneWithoutOrderInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutEngineerInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedCreateNestedOneWithoutOrderInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutEngineerInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutEngineerInput, Prisma.OrderUncheckedCreateWithoutEngineerInput>;
};
export type OrderCreateManyEngineerInputEnvelope = {
    data: Prisma.OrderCreateManyEngineerInput | Prisma.OrderCreateManyEngineerInput[];
    skipDuplicates?: boolean;
};
export type OrderUpsertWithWhereUniqueWithoutEngineerInput = {
    where: Prisma.OrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrderUpdateWithoutEngineerInput, Prisma.OrderUncheckedUpdateWithoutEngineerInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutEngineerInput, Prisma.OrderUncheckedCreateWithoutEngineerInput>;
};
export type OrderUpdateWithWhereUniqueWithoutEngineerInput = {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutEngineerInput, Prisma.OrderUncheckedUpdateWithoutEngineerInput>;
};
export type OrderUpdateManyWithWhereWithoutEngineerInput = {
    where: Prisma.OrderScalarWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyWithoutEngineerInput>;
};
export type OrderScalarWhereInput = {
    AND?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    OR?: Prisma.OrderScalarWhereInput[];
    NOT?: Prisma.OrderScalarWhereInput | Prisma.OrderScalarWhereInput[];
    id?: Prisma.StringFilter<"Order"> | string;
    orderType?: Prisma.EnumOrderTypeFilter<"Order"> | $Enums.OrderType;
    engineerId?: Prisma.StringFilter<"Order"> | string;
    franchiseeId?: Prisma.StringFilter<"Order"> | string;
    createdAt?: Prisma.DateTimeFilter<"Order"> | Date | string;
};
export type OrderCreateWithoutSaleOrderInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
    engineer: Prisma.EngineerCreateNestedOneWithoutOrdersInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutSaleOrderInput = {
    id?: string;
    orderType: $Enums.OrderType;
    engineerId: string;
    franchiseeId: string;
    createdAt?: Date | string;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutSaleOrderInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutSaleOrderInput, Prisma.OrderUncheckedCreateWithoutSaleOrderInput>;
};
export type OrderUpsertWithoutSaleOrderInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutSaleOrderInput, Prisma.OrderUncheckedUpdateWithoutSaleOrderInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutSaleOrderInput, Prisma.OrderUncheckedCreateWithoutSaleOrderInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutSaleOrderInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutSaleOrderInput, Prisma.OrderUncheckedUpdateWithoutSaleOrderInput>;
};
export type OrderUpdateWithoutSaleOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    engineer?: Prisma.EngineerUpdateOneRequiredWithoutOrdersNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutSaleOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateWithoutWarrantyAmcOrderInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
    engineer: Prisma.EngineerCreateNestedOneWithoutOrdersInput;
    saleOrder?: Prisma.SaleOrderCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutWarrantyAmcOrderInput = {
    id?: string;
    orderType: $Enums.OrderType;
    engineerId: string;
    franchiseeId: string;
    createdAt?: Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedCreateNestedOneWithoutOrderInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutWarrantyAmcOrderInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutWarrantyAmcOrderInput, Prisma.OrderUncheckedCreateWithoutWarrantyAmcOrderInput>;
};
export type OrderUpsertWithoutWarrantyAmcOrderInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutWarrantyAmcOrderInput, Prisma.OrderUncheckedUpdateWithoutWarrantyAmcOrderInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutWarrantyAmcOrderInput, Prisma.OrderUncheckedCreateWithoutWarrantyAmcOrderInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutWarrantyAmcOrderInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutWarrantyAmcOrderInput, Prisma.OrderUncheckedUpdateWithoutWarrantyAmcOrderInput>;
};
export type OrderUpdateWithoutWarrantyAmcOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    engineer?: Prisma.EngineerUpdateOneRequiredWithoutOrdersNestedInput;
    saleOrder?: Prisma.SaleOrderUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutWarrantyAmcOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateWithoutReturnToGodownOrderInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
    engineer: Prisma.EngineerCreateNestedOneWithoutOrdersInput;
    saleOrder?: Prisma.SaleOrderCreateNestedOneWithoutOrderInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderCreateNestedOneWithoutOrderInput;
};
export type OrderUncheckedCreateWithoutReturnToGodownOrderInput = {
    id?: string;
    orderType: $Enums.OrderType;
    engineerId: string;
    franchiseeId: string;
    createdAt?: Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedCreateNestedOneWithoutOrderInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedCreateNestedOneWithoutOrderInput;
};
export type OrderCreateOrConnectWithoutReturnToGodownOrderInput = {
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateWithoutReturnToGodownOrderInput, Prisma.OrderUncheckedCreateWithoutReturnToGodownOrderInput>;
};
export type OrderUpsertWithoutReturnToGodownOrderInput = {
    update: Prisma.XOR<Prisma.OrderUpdateWithoutReturnToGodownOrderInput, Prisma.OrderUncheckedUpdateWithoutReturnToGodownOrderInput>;
    create: Prisma.XOR<Prisma.OrderCreateWithoutReturnToGodownOrderInput, Prisma.OrderUncheckedCreateWithoutReturnToGodownOrderInput>;
    where?: Prisma.OrderWhereInput;
};
export type OrderUpdateToOneWithWhereWithoutReturnToGodownOrderInput = {
    where?: Prisma.OrderWhereInput;
    data: Prisma.XOR<Prisma.OrderUpdateWithoutReturnToGodownOrderInput, Prisma.OrderUncheckedUpdateWithoutReturnToGodownOrderInput>;
};
export type OrderUpdateWithoutReturnToGodownOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    engineer?: Prisma.EngineerUpdateOneRequiredWithoutOrdersNestedInput;
    saleOrder?: Prisma.SaleOrderUpdateOneWithoutOrderNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutReturnToGodownOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    engineerId?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedUpdateOneWithoutOrderNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderCreateManyEngineerInput = {
    id?: string;
    orderType: $Enums.OrderType;
    franchiseeId: string;
    createdAt?: Date | string;
};
export type OrderUpdateWithoutEngineerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleOrder?: Prisma.SaleOrderUpdateOneWithoutOrderNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateWithoutEngineerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    saleOrder?: Prisma.SaleOrderUncheckedUpdateOneWithoutOrderNestedInput;
    warrantyAmcOrder?: Prisma.WarrantyAmcOrderUncheckedUpdateOneWithoutOrderNestedInput;
    returnToGodownOrder?: Prisma.ReturnToGodownOrderUncheckedUpdateOneWithoutOrderNestedInput;
};
export type OrderUncheckedUpdateManyWithoutEngineerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderType?: Prisma.EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderType?: boolean;
    engineerId?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    saleOrder?: boolean | Prisma.Order$saleOrderArgs<ExtArgs>;
    warrantyAmcOrder?: boolean | Prisma.Order$warrantyAmcOrderArgs<ExtArgs>;
    returnToGodownOrder?: boolean | Prisma.Order$returnToGodownOrderArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderType?: boolean;
    engineerId?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderType?: boolean;
    engineerId?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type OrderSelectScalar = {
    id?: boolean;
    orderType?: boolean;
    engineerId?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
};
export type OrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderType" | "engineerId" | "franchiseeId" | "createdAt", ExtArgs["result"]["order"]>;
export type OrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
    saleOrder?: boolean | Prisma.Order$saleOrderArgs<ExtArgs>;
    warrantyAmcOrder?: boolean | Prisma.Order$warrantyAmcOrderArgs<ExtArgs>;
    returnToGodownOrder?: boolean | Prisma.Order$returnToGodownOrderArgs<ExtArgs>;
};
export type OrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
};
export type OrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    engineer?: boolean | Prisma.EngineerDefaultArgs<ExtArgs>;
};
export type $OrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Order";
    objects: {
        engineer: Prisma.$EngineerPayload<ExtArgs>;
        saleOrder: Prisma.$SaleOrderPayload<ExtArgs> | null;
        warrantyAmcOrder: Prisma.$WarrantyAmcOrderPayload<ExtArgs> | null;
        returnToGodownOrder: Prisma.$ReturnToGodownOrderPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderType: $Enums.OrderType;
        engineerId: string;
        franchiseeId: string;
        createdAt: Date;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrderPayload, S>;
export type OrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface OrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Order'];
        meta: {
            name: 'Order';
        };
    };
    findUnique<T extends OrderFindUniqueArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrderFindFirstArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrderFindManyArgs>(args?: Prisma.SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrderCreateArgs>(args: Prisma.SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrderCreateManyArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrderDeleteArgs>(args: Prisma.SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrderUpdateArgs>(args: Prisma.SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrderUpdateManyArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrderUpsertArgs>(args: Prisma.SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrderCountArgs>(args?: Prisma.Subset<T, OrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends OrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrderGroupByArgs['orderBy'];
    } : {
        orderBy?: OrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrderFieldRefs;
}
export interface Prisma__OrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    engineer<T extends Prisma.EngineerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EngineerDefaultArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    saleOrder<T extends Prisma.Order$saleOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$saleOrderArgs<ExtArgs>>): Prisma.Prisma__SaleOrderClient<runtime.Types.Result.GetResult<Prisma.$SaleOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    warrantyAmcOrder<T extends Prisma.Order$warrantyAmcOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$warrantyAmcOrderArgs<ExtArgs>>): Prisma.Prisma__WarrantyAmcOrderClient<runtime.Types.Result.GetResult<Prisma.$WarrantyAmcOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    returnToGodownOrder<T extends Prisma.Order$returnToGodownOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Order$returnToGodownOrderArgs<ExtArgs>>): Prisma.Prisma__ReturnToGodownOrderClient<runtime.Types.Result.GetResult<Prisma.$ReturnToGodownOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrderFieldRefs {
    readonly id: Prisma.FieldRef<"Order", 'String'>;
    readonly orderType: Prisma.FieldRef<"Order", 'OrderType'>;
    readonly engineerId: Prisma.FieldRef<"Order", 'String'>;
    readonly franchiseeId: Prisma.FieldRef<"Order", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Order", 'DateTime'>;
}
export type OrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type OrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
};
export type OrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.OrderCreateManyInput | Prisma.OrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type OrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrderUpdateManyMutationInput, Prisma.OrderUncheckedUpdateManyInput>;
    where?: Prisma.OrderWhereInput;
    limit?: number;
    include?: Prisma.OrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrderCreateInput, Prisma.OrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrderUpdateInput, Prisma.OrderUncheckedUpdateInput>;
};
export type OrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where: Prisma.OrderWhereUniqueInput;
};
export type OrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
    limit?: number;
};
export type Order$saleOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SaleOrderSelect<ExtArgs> | null;
    omit?: Prisma.SaleOrderOmit<ExtArgs> | null;
    include?: Prisma.SaleOrderInclude<ExtArgs> | null;
    where?: Prisma.SaleOrderWhereInput;
};
export type Order$warrantyAmcOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarrantyAmcOrderSelect<ExtArgs> | null;
    omit?: Prisma.WarrantyAmcOrderOmit<ExtArgs> | null;
    include?: Prisma.WarrantyAmcOrderInclude<ExtArgs> | null;
    where?: Prisma.WarrantyAmcOrderWhereInput;
};
export type Order$returnToGodownOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReturnToGodownOrderSelect<ExtArgs> | null;
    omit?: Prisma.ReturnToGodownOrderOmit<ExtArgs> | null;
    include?: Prisma.ReturnToGodownOrderInclude<ExtArgs> | null;
    where?: Prisma.ReturnToGodownOrderWhereInput;
};
export type OrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
};
export {};
