import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerReturnModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerReturnPayload>;
export type AggregateCustomerReturn = {
    _count: CustomerReturnCountAggregateOutputType | null;
    _avg: CustomerReturnAvgAggregateOutputType | null;
    _sum: CustomerReturnSumAggregateOutputType | null;
    _min: CustomerReturnMinAggregateOutputType | null;
    _max: CustomerReturnMaxAggregateOutputType | null;
};
export type CustomerReturnAvgAggregateOutputType = {
    quantity: number | null;
    pricePerUnit: number | null;
    totalPrice: number | null;
};
export type CustomerReturnSumAggregateOutputType = {
    quantity: number | null;
    pricePerUnit: number | null;
    totalPrice: number | null;
};
export type CustomerReturnMinAggregateOutputType = {
    id: string | null;
    returnDate: Date | null;
    franchiseeId: string | null;
    materialCode: string | null;
    materialName: string | null;
    quantity: number | null;
    pricePerUnit: number | null;
    totalPrice: number | null;
    remarks: string | null;
    createdAt: Date | null;
};
export type CustomerReturnMaxAggregateOutputType = {
    id: string | null;
    returnDate: Date | null;
    franchiseeId: string | null;
    materialCode: string | null;
    materialName: string | null;
    quantity: number | null;
    pricePerUnit: number | null;
    totalPrice: number | null;
    remarks: string | null;
    createdAt: Date | null;
};
export type CustomerReturnCountAggregateOutputType = {
    id: number;
    returnDate: number;
    franchiseeId: number;
    materialCode: number;
    materialName: number;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks: number;
    createdAt: number;
    _all: number;
};
export type CustomerReturnAvgAggregateInputType = {
    quantity?: true;
    pricePerUnit?: true;
    totalPrice?: true;
};
export type CustomerReturnSumAggregateInputType = {
    quantity?: true;
    pricePerUnit?: true;
    totalPrice?: true;
};
export type CustomerReturnMinAggregateInputType = {
    id?: true;
    returnDate?: true;
    franchiseeId?: true;
    materialCode?: true;
    materialName?: true;
    quantity?: true;
    pricePerUnit?: true;
    totalPrice?: true;
    remarks?: true;
    createdAt?: true;
};
export type CustomerReturnMaxAggregateInputType = {
    id?: true;
    returnDate?: true;
    franchiseeId?: true;
    materialCode?: true;
    materialName?: true;
    quantity?: true;
    pricePerUnit?: true;
    totalPrice?: true;
    remarks?: true;
    createdAt?: true;
};
export type CustomerReturnCountAggregateInputType = {
    id?: true;
    returnDate?: true;
    franchiseeId?: true;
    materialCode?: true;
    materialName?: true;
    quantity?: true;
    pricePerUnit?: true;
    totalPrice?: true;
    remarks?: true;
    createdAt?: true;
    _all?: true;
};
export type CustomerReturnAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerReturnWhereInput;
    orderBy?: Prisma.CustomerReturnOrderByWithRelationInput | Prisma.CustomerReturnOrderByWithRelationInput[];
    cursor?: Prisma.CustomerReturnWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerReturnCountAggregateInputType;
    _avg?: CustomerReturnAvgAggregateInputType;
    _sum?: CustomerReturnSumAggregateInputType;
    _min?: CustomerReturnMinAggregateInputType;
    _max?: CustomerReturnMaxAggregateInputType;
};
export type GetCustomerReturnAggregateType<T extends CustomerReturnAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomerReturn]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomerReturn[P]> : Prisma.GetScalarType<T[P], AggregateCustomerReturn[P]>;
};
export type CustomerReturnGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerReturnWhereInput;
    orderBy?: Prisma.CustomerReturnOrderByWithAggregationInput | Prisma.CustomerReturnOrderByWithAggregationInput[];
    by: Prisma.CustomerReturnScalarFieldEnum[] | Prisma.CustomerReturnScalarFieldEnum;
    having?: Prisma.CustomerReturnScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerReturnCountAggregateInputType | true;
    _avg?: CustomerReturnAvgAggregateInputType;
    _sum?: CustomerReturnSumAggregateInputType;
    _min?: CustomerReturnMinAggregateInputType;
    _max?: CustomerReturnMaxAggregateInputType;
};
export type CustomerReturnGroupByOutputType = {
    id: string;
    returnDate: Date;
    franchiseeId: string;
    materialCode: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks: string | null;
    createdAt: Date;
    _count: CustomerReturnCountAggregateOutputType | null;
    _avg: CustomerReturnAvgAggregateOutputType | null;
    _sum: CustomerReturnSumAggregateOutputType | null;
    _min: CustomerReturnMinAggregateOutputType | null;
    _max: CustomerReturnMaxAggregateOutputType | null;
};
type GetCustomerReturnGroupByPayload<T extends CustomerReturnGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerReturnGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerReturnGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerReturnGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerReturnGroupByOutputType[P]>;
}>>;
export type CustomerReturnWhereInput = {
    AND?: Prisma.CustomerReturnWhereInput | Prisma.CustomerReturnWhereInput[];
    OR?: Prisma.CustomerReturnWhereInput[];
    NOT?: Prisma.CustomerReturnWhereInput | Prisma.CustomerReturnWhereInput[];
    id?: Prisma.StringFilter<"CustomerReturn"> | string;
    returnDate?: Prisma.DateTimeFilter<"CustomerReturn"> | Date | string;
    franchiseeId?: Prisma.StringFilter<"CustomerReturn"> | string;
    materialCode?: Prisma.StringFilter<"CustomerReturn"> | string;
    materialName?: Prisma.StringFilter<"CustomerReturn"> | string;
    quantity?: Prisma.FloatFilter<"CustomerReturn"> | number;
    pricePerUnit?: Prisma.FloatFilter<"CustomerReturn"> | number;
    totalPrice?: Prisma.FloatFilter<"CustomerReturn"> | number;
    remarks?: Prisma.StringNullableFilter<"CustomerReturn"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerReturn"> | Date | string;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type CustomerReturnOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    materialName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type CustomerReturnWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CustomerReturnWhereInput | Prisma.CustomerReturnWhereInput[];
    OR?: Prisma.CustomerReturnWhereInput[];
    NOT?: Prisma.CustomerReturnWhereInput | Prisma.CustomerReturnWhereInput[];
    returnDate?: Prisma.DateTimeFilter<"CustomerReturn"> | Date | string;
    franchiseeId?: Prisma.StringFilter<"CustomerReturn"> | string;
    materialCode?: Prisma.StringFilter<"CustomerReturn"> | string;
    materialName?: Prisma.StringFilter<"CustomerReturn"> | string;
    quantity?: Prisma.FloatFilter<"CustomerReturn"> | number;
    pricePerUnit?: Prisma.FloatFilter<"CustomerReturn"> | number;
    totalPrice?: Prisma.FloatFilter<"CustomerReturn"> | number;
    remarks?: Prisma.StringNullableFilter<"CustomerReturn"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerReturn"> | Date | string;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id">;
export type CustomerReturnOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    materialName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    remarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerReturnCountOrderByAggregateInput;
    _avg?: Prisma.CustomerReturnAvgOrderByAggregateInput;
    _max?: Prisma.CustomerReturnMaxOrderByAggregateInput;
    _min?: Prisma.CustomerReturnMinOrderByAggregateInput;
    _sum?: Prisma.CustomerReturnSumOrderByAggregateInput;
};
export type CustomerReturnScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerReturnScalarWhereWithAggregatesInput | Prisma.CustomerReturnScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerReturnScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerReturnScalarWhereWithAggregatesInput | Prisma.CustomerReturnScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CustomerReturn"> | string;
    returnDate?: Prisma.DateTimeWithAggregatesFilter<"CustomerReturn"> | Date | string;
    franchiseeId?: Prisma.StringWithAggregatesFilter<"CustomerReturn"> | string;
    materialCode?: Prisma.StringWithAggregatesFilter<"CustomerReturn"> | string;
    materialName?: Prisma.StringWithAggregatesFilter<"CustomerReturn"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"CustomerReturn"> | number;
    pricePerUnit?: Prisma.FloatWithAggregatesFilter<"CustomerReturn"> | number;
    totalPrice?: Prisma.FloatWithAggregatesFilter<"CustomerReturn"> | number;
    remarks?: Prisma.StringNullableWithAggregatesFilter<"CustomerReturn"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CustomerReturn"> | Date | string;
};
export type CustomerReturnCreateInput = {
    id?: string;
    returnDate: Date | string;
    franchiseeId: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks?: string | null;
    createdAt?: Date | string;
    material: Prisma.MaterialCreateNestedOneWithoutCustomerReturnsInput;
};
export type CustomerReturnUncheckedCreateInput = {
    id?: string;
    returnDate: Date | string;
    franchiseeId: string;
    materialCode: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CustomerReturnUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutCustomerReturnsNestedInput;
};
export type CustomerReturnUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerReturnCreateManyInput = {
    id?: string;
    returnDate: Date | string;
    franchiseeId: string;
    materialCode: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CustomerReturnUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerReturnUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerReturnListRelationFilter = {
    every?: Prisma.CustomerReturnWhereInput;
    some?: Prisma.CustomerReturnWhereInput;
    none?: Prisma.CustomerReturnWhereInput;
};
export type CustomerReturnOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CustomerReturnCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    materialName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerReturnAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type CustomerReturnMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    materialName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerReturnMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    returnDate?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    materialName?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    remarks?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerReturnSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    pricePerUnit?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type CustomerReturnCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.CustomerReturnCreateWithoutMaterialInput, Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput> | Prisma.CustomerReturnCreateWithoutMaterialInput[] | Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput | Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.CustomerReturnCreateManyMaterialInputEnvelope;
    connect?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
};
export type CustomerReturnUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.CustomerReturnCreateWithoutMaterialInput, Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput> | Prisma.CustomerReturnCreateWithoutMaterialInput[] | Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput | Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.CustomerReturnCreateManyMaterialInputEnvelope;
    connect?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
};
export type CustomerReturnUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerReturnCreateWithoutMaterialInput, Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput> | Prisma.CustomerReturnCreateWithoutMaterialInput[] | Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput | Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.CustomerReturnUpsertWithWhereUniqueWithoutMaterialInput | Prisma.CustomerReturnUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.CustomerReturnCreateManyMaterialInputEnvelope;
    set?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    disconnect?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    delete?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    connect?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    update?: Prisma.CustomerReturnUpdateWithWhereUniqueWithoutMaterialInput | Prisma.CustomerReturnUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.CustomerReturnUpdateManyWithWhereWithoutMaterialInput | Prisma.CustomerReturnUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.CustomerReturnScalarWhereInput | Prisma.CustomerReturnScalarWhereInput[];
};
export type CustomerReturnUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerReturnCreateWithoutMaterialInput, Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput> | Prisma.CustomerReturnCreateWithoutMaterialInput[] | Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput | Prisma.CustomerReturnCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.CustomerReturnUpsertWithWhereUniqueWithoutMaterialInput | Prisma.CustomerReturnUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.CustomerReturnCreateManyMaterialInputEnvelope;
    set?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    disconnect?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    delete?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    connect?: Prisma.CustomerReturnWhereUniqueInput | Prisma.CustomerReturnWhereUniqueInput[];
    update?: Prisma.CustomerReturnUpdateWithWhereUniqueWithoutMaterialInput | Prisma.CustomerReturnUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.CustomerReturnUpdateManyWithWhereWithoutMaterialInput | Prisma.CustomerReturnUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.CustomerReturnScalarWhereInput | Prisma.CustomerReturnScalarWhereInput[];
};
export type CustomerReturnCreateWithoutMaterialInput = {
    id?: string;
    returnDate: Date | string;
    franchiseeId: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CustomerReturnUncheckedCreateWithoutMaterialInput = {
    id?: string;
    returnDate: Date | string;
    franchiseeId: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CustomerReturnCreateOrConnectWithoutMaterialInput = {
    where: Prisma.CustomerReturnWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerReturnCreateWithoutMaterialInput, Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput>;
};
export type CustomerReturnCreateManyMaterialInputEnvelope = {
    data: Prisma.CustomerReturnCreateManyMaterialInput | Prisma.CustomerReturnCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type CustomerReturnUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.CustomerReturnWhereUniqueInput;
    update: Prisma.XOR<Prisma.CustomerReturnUpdateWithoutMaterialInput, Prisma.CustomerReturnUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.CustomerReturnCreateWithoutMaterialInput, Prisma.CustomerReturnUncheckedCreateWithoutMaterialInput>;
};
export type CustomerReturnUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.CustomerReturnWhereUniqueInput;
    data: Prisma.XOR<Prisma.CustomerReturnUpdateWithoutMaterialInput, Prisma.CustomerReturnUncheckedUpdateWithoutMaterialInput>;
};
export type CustomerReturnUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.CustomerReturnScalarWhereInput;
    data: Prisma.XOR<Prisma.CustomerReturnUpdateManyMutationInput, Prisma.CustomerReturnUncheckedUpdateManyWithoutMaterialInput>;
};
export type CustomerReturnScalarWhereInput = {
    AND?: Prisma.CustomerReturnScalarWhereInput | Prisma.CustomerReturnScalarWhereInput[];
    OR?: Prisma.CustomerReturnScalarWhereInput[];
    NOT?: Prisma.CustomerReturnScalarWhereInput | Prisma.CustomerReturnScalarWhereInput[];
    id?: Prisma.StringFilter<"CustomerReturn"> | string;
    returnDate?: Prisma.DateTimeFilter<"CustomerReturn"> | Date | string;
    franchiseeId?: Prisma.StringFilter<"CustomerReturn"> | string;
    materialCode?: Prisma.StringFilter<"CustomerReturn"> | string;
    materialName?: Prisma.StringFilter<"CustomerReturn"> | string;
    quantity?: Prisma.FloatFilter<"CustomerReturn"> | number;
    pricePerUnit?: Prisma.FloatFilter<"CustomerReturn"> | number;
    totalPrice?: Prisma.FloatFilter<"CustomerReturn"> | number;
    remarks?: Prisma.StringNullableFilter<"CustomerReturn"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CustomerReturn"> | Date | string;
};
export type CustomerReturnCreateManyMaterialInput = {
    id?: string;
    returnDate: Date | string;
    franchiseeId: string;
    materialName: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remarks?: string | null;
    createdAt?: Date | string;
};
export type CustomerReturnUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerReturnUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerReturnUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    returnDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialName?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pricePerUnit?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    remarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerReturnSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    returnDate?: boolean;
    franchiseeId?: boolean;
    materialCode?: boolean;
    materialName?: boolean;
    quantity?: boolean;
    pricePerUnit?: boolean;
    totalPrice?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerReturn"]>;
export type CustomerReturnSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    returnDate?: boolean;
    franchiseeId?: boolean;
    materialCode?: boolean;
    materialName?: boolean;
    quantity?: boolean;
    pricePerUnit?: boolean;
    totalPrice?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerReturn"]>;
export type CustomerReturnSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    returnDate?: boolean;
    franchiseeId?: boolean;
    materialCode?: boolean;
    materialName?: boolean;
    quantity?: boolean;
    pricePerUnit?: boolean;
    totalPrice?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customerReturn"]>;
export type CustomerReturnSelectScalar = {
    id?: boolean;
    returnDate?: boolean;
    franchiseeId?: boolean;
    materialCode?: boolean;
    materialName?: boolean;
    quantity?: boolean;
    pricePerUnit?: boolean;
    totalPrice?: boolean;
    remarks?: boolean;
    createdAt?: boolean;
};
export type CustomerReturnOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "returnDate" | "franchiseeId" | "materialCode" | "materialName" | "quantity" | "pricePerUnit" | "totalPrice" | "remarks" | "createdAt", ExtArgs["result"]["customerReturn"]>;
export type CustomerReturnInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type CustomerReturnIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type CustomerReturnIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $CustomerReturnPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CustomerReturn";
    objects: {
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        returnDate: Date;
        franchiseeId: string;
        materialCode: string;
        materialName: string;
        quantity: number;
        pricePerUnit: number;
        totalPrice: number;
        remarks: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["customerReturn"]>;
    composites: {};
};
export type CustomerReturnGetPayload<S extends boolean | null | undefined | CustomerReturnDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload, S>;
export type CustomerReturnCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerReturnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerReturnCountAggregateInputType | true;
};
export interface CustomerReturnDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CustomerReturn'];
        meta: {
            name: 'CustomerReturn';
        };
    };
    findUnique<T extends CustomerReturnFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerReturnFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerReturnFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerReturnFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerReturnFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerReturnFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerReturnFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerReturnFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerReturnFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerReturnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerReturnCreateArgs>(args: Prisma.SelectSubset<T, CustomerReturnCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerReturnCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerReturnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerReturnCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerReturnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerReturnDeleteArgs>(args: Prisma.SelectSubset<T, CustomerReturnDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerReturnUpdateArgs>(args: Prisma.SelectSubset<T, CustomerReturnUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerReturnDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerReturnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerReturnUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerReturnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerReturnUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerReturnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerReturnUpsertArgs>(args: Prisma.SelectSubset<T, CustomerReturnUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerReturnClient<runtime.Types.Result.GetResult<Prisma.$CustomerReturnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerReturnCountArgs>(args?: Prisma.Subset<T, CustomerReturnCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerReturnCountAggregateOutputType> : number>;
    aggregate<T extends CustomerReturnAggregateArgs>(args: Prisma.Subset<T, CustomerReturnAggregateArgs>): Prisma.PrismaPromise<GetCustomerReturnAggregateType<T>>;
    groupBy<T extends CustomerReturnGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerReturnGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerReturnGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerReturnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerReturnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerReturnFieldRefs;
}
export interface Prisma__CustomerReturnClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerReturnFieldRefs {
    readonly id: Prisma.FieldRef<"CustomerReturn", 'String'>;
    readonly returnDate: Prisma.FieldRef<"CustomerReturn", 'DateTime'>;
    readonly franchiseeId: Prisma.FieldRef<"CustomerReturn", 'String'>;
    readonly materialCode: Prisma.FieldRef<"CustomerReturn", 'String'>;
    readonly materialName: Prisma.FieldRef<"CustomerReturn", 'String'>;
    readonly quantity: Prisma.FieldRef<"CustomerReturn", 'Float'>;
    readonly pricePerUnit: Prisma.FieldRef<"CustomerReturn", 'Float'>;
    readonly totalPrice: Prisma.FieldRef<"CustomerReturn", 'Float'>;
    readonly remarks: Prisma.FieldRef<"CustomerReturn", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CustomerReturn", 'DateTime'>;
}
export type CustomerReturnFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where: Prisma.CustomerReturnWhereUniqueInput;
};
export type CustomerReturnFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where: Prisma.CustomerReturnWhereUniqueInput;
};
export type CustomerReturnFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where?: Prisma.CustomerReturnWhereInput;
    orderBy?: Prisma.CustomerReturnOrderByWithRelationInput | Prisma.CustomerReturnOrderByWithRelationInput[];
    cursor?: Prisma.CustomerReturnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerReturnScalarFieldEnum | Prisma.CustomerReturnScalarFieldEnum[];
};
export type CustomerReturnFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where?: Prisma.CustomerReturnWhereInput;
    orderBy?: Prisma.CustomerReturnOrderByWithRelationInput | Prisma.CustomerReturnOrderByWithRelationInput[];
    cursor?: Prisma.CustomerReturnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerReturnScalarFieldEnum | Prisma.CustomerReturnScalarFieldEnum[];
};
export type CustomerReturnFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where?: Prisma.CustomerReturnWhereInput;
    orderBy?: Prisma.CustomerReturnOrderByWithRelationInput | Prisma.CustomerReturnOrderByWithRelationInput[];
    cursor?: Prisma.CustomerReturnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerReturnScalarFieldEnum | Prisma.CustomerReturnScalarFieldEnum[];
};
export type CustomerReturnCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerReturnCreateInput, Prisma.CustomerReturnUncheckedCreateInput>;
};
export type CustomerReturnCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerReturnCreateManyInput | Prisma.CustomerReturnCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerReturnCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    data: Prisma.CustomerReturnCreateManyInput | Prisma.CustomerReturnCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerReturnIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerReturnUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerReturnUpdateInput, Prisma.CustomerReturnUncheckedUpdateInput>;
    where: Prisma.CustomerReturnWhereUniqueInput;
};
export type CustomerReturnUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerReturnUpdateManyMutationInput, Prisma.CustomerReturnUncheckedUpdateManyInput>;
    where?: Prisma.CustomerReturnWhereInput;
    limit?: number;
};
export type CustomerReturnUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerReturnUpdateManyMutationInput, Prisma.CustomerReturnUncheckedUpdateManyInput>;
    where?: Prisma.CustomerReturnWhereInput;
    limit?: number;
    include?: Prisma.CustomerReturnIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerReturnUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where: Prisma.CustomerReturnWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerReturnCreateInput, Prisma.CustomerReturnUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerReturnUpdateInput, Prisma.CustomerReturnUncheckedUpdateInput>;
};
export type CustomerReturnDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
    where: Prisma.CustomerReturnWhereUniqueInput;
};
export type CustomerReturnDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerReturnWhereInput;
    limit?: number;
};
export type CustomerReturnDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerReturnSelect<ExtArgs> | null;
    omit?: Prisma.CustomerReturnOmit<ExtArgs> | null;
    include?: Prisma.CustomerReturnInclude<ExtArgs> | null;
};
export {};
