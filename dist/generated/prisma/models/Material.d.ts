import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$MaterialPayload>;
export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type MaterialMinAggregateOutputType = {
    id: string | null;
    materialCode: string | null;
    description: string | null;
    materialGroup: string | null;
    createdAt: Date | null;
};
export type MaterialMaxAggregateOutputType = {
    id: string | null;
    materialCode: string | null;
    description: string | null;
    materialGroup: string | null;
    createdAt: Date | null;
};
export type MaterialCountAggregateOutputType = {
    id: number;
    materialCode: number;
    description: number;
    materialGroup: number;
    createdAt: number;
    _all: number;
};
export type MaterialMinAggregateInputType = {
    id?: true;
    materialCode?: true;
    description?: true;
    materialGroup?: true;
    createdAt?: true;
};
export type MaterialMaxAggregateInputType = {
    id?: true;
    materialCode?: true;
    description?: true;
    materialGroup?: true;
    createdAt?: true;
};
export type MaterialCountAggregateInputType = {
    id?: true;
    materialCode?: true;
    description?: true;
    materialGroup?: true;
    createdAt?: true;
    _all?: true;
};
export type MaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MaterialCountAggregateInputType;
    _min?: MaterialMinAggregateInputType;
    _max?: MaterialMaxAggregateInputType;
};
export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterial[P]> : Prisma.GetScalarType<T[P], AggregateMaterial[P]>;
};
export type MaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithAggregationInput | Prisma.MaterialOrderByWithAggregationInput[];
    by: Prisma.MaterialScalarFieldEnum[] | Prisma.MaterialScalarFieldEnum;
    having?: Prisma.MaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialCountAggregateInputType | true;
    _min?: MaterialMinAggregateInputType;
    _max?: MaterialMaxAggregateInputType;
};
export type MaterialGroupByOutputType = {
    id: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt: Date;
    _count: MaterialCountAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]>;
}>>;
export type MaterialWhereInput = {
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    id?: Prisma.StringFilter<"Material"> | string;
    materialCode?: Prisma.StringFilter<"Material"> | string;
    description?: Prisma.StringFilter<"Material"> | string;
    materialGroup?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    prices?: Prisma.MaterialPriceListRelationFilter;
    invoiceItems?: Prisma.InvoiceItemListRelationFilter;
    engineerStock?: Prisma.EngineerStockListRelationFilter;
};
export type MaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    materialGroup?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    prices?: Prisma.MaterialPriceOrderByRelationAggregateInput;
    invoiceItems?: Prisma.InvoiceItemOrderByRelationAggregateInput;
    engineerStock?: Prisma.EngineerStockOrderByRelationAggregateInput;
};
export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    materialCode?: string;
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    description?: Prisma.StringFilter<"Material"> | string;
    materialGroup?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    prices?: Prisma.MaterialPriceListRelationFilter;
    invoiceItems?: Prisma.InvoiceItemListRelationFilter;
    engineerStock?: Prisma.EngineerStockListRelationFilter;
}, "id" | "materialCode">;
export type MaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    materialGroup?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MaterialCountOrderByAggregateInput;
    _max?: Prisma.MaterialMaxOrderByAggregateInput;
    _min?: Prisma.MaterialMinOrderByAggregateInput;
};
export type MaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    materialCode?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    materialGroup?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Material"> | Date | string;
};
export type MaterialCreateInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    prices?: Prisma.MaterialPriceCreateNestedManyWithoutMaterialInput;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutMaterialInput;
    engineerStock?: Prisma.EngineerStockCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    prices?: Prisma.MaterialPriceUncheckedCreateNestedManyWithoutMaterialInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutMaterialInput;
    engineerStock?: Prisma.EngineerStockUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prices?: Prisma.MaterialPriceUpdateManyWithoutMaterialNestedInput;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutMaterialNestedInput;
    engineerStock?: Prisma.EngineerStockUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prices?: Prisma.MaterialPriceUncheckedUpdateManyWithoutMaterialNestedInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutMaterialNestedInput;
    engineerStock?: Prisma.EngineerStockUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateManyInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
};
export type MaterialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    materialGroup?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    materialGroup?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    materialCode?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    materialGroup?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MaterialScalarRelationFilter = {
    is?: Prisma.MaterialWhereInput;
    isNot?: Prisma.MaterialWhereInput;
};
export type MaterialCreateNestedOneWithoutPricesInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutPricesInput, Prisma.MaterialUncheckedCreateWithoutPricesInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutPricesInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutPricesNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutPricesInput, Prisma.MaterialUncheckedCreateWithoutPricesInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutPricesInput;
    upsert?: Prisma.MaterialUpsertWithoutPricesInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutPricesInput, Prisma.MaterialUpdateWithoutPricesInput>, Prisma.MaterialUncheckedUpdateWithoutPricesInput>;
};
export type MaterialCreateNestedOneWithoutInvoiceItemsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutInvoiceItemsInput, Prisma.MaterialUncheckedCreateWithoutInvoiceItemsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutInvoiceItemsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutInvoiceItemsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutInvoiceItemsInput, Prisma.MaterialUncheckedCreateWithoutInvoiceItemsInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutInvoiceItemsInput;
    upsert?: Prisma.MaterialUpsertWithoutInvoiceItemsInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutInvoiceItemsInput, Prisma.MaterialUpdateWithoutInvoiceItemsInput>, Prisma.MaterialUncheckedUpdateWithoutInvoiceItemsInput>;
};
export type MaterialCreateNestedOneWithoutEngineerStockInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutEngineerStockInput, Prisma.MaterialUncheckedCreateWithoutEngineerStockInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutEngineerStockInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutEngineerStockNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutEngineerStockInput, Prisma.MaterialUncheckedCreateWithoutEngineerStockInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutEngineerStockInput;
    upsert?: Prisma.MaterialUpsertWithoutEngineerStockInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutEngineerStockInput, Prisma.MaterialUpdateWithoutEngineerStockInput>, Prisma.MaterialUncheckedUpdateWithoutEngineerStockInput>;
};
export type MaterialCreateWithoutPricesInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutMaterialInput;
    engineerStock?: Prisma.EngineerStockCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutPricesInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutMaterialInput;
    engineerStock?: Prisma.EngineerStockUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutPricesInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutPricesInput, Prisma.MaterialUncheckedCreateWithoutPricesInput>;
};
export type MaterialUpsertWithoutPricesInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutPricesInput, Prisma.MaterialUncheckedUpdateWithoutPricesInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutPricesInput, Prisma.MaterialUncheckedCreateWithoutPricesInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutPricesInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutPricesInput, Prisma.MaterialUncheckedUpdateWithoutPricesInput>;
};
export type MaterialUpdateWithoutPricesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutMaterialNestedInput;
    engineerStock?: Prisma.EngineerStockUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutPricesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutMaterialNestedInput;
    engineerStock?: Prisma.EngineerStockUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateWithoutInvoiceItemsInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    prices?: Prisma.MaterialPriceCreateNestedManyWithoutMaterialInput;
    engineerStock?: Prisma.EngineerStockCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutInvoiceItemsInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    prices?: Prisma.MaterialPriceUncheckedCreateNestedManyWithoutMaterialInput;
    engineerStock?: Prisma.EngineerStockUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutInvoiceItemsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutInvoiceItemsInput, Prisma.MaterialUncheckedCreateWithoutInvoiceItemsInput>;
};
export type MaterialUpsertWithoutInvoiceItemsInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutInvoiceItemsInput, Prisma.MaterialUncheckedUpdateWithoutInvoiceItemsInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutInvoiceItemsInput, Prisma.MaterialUncheckedCreateWithoutInvoiceItemsInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutInvoiceItemsInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutInvoiceItemsInput, Prisma.MaterialUncheckedUpdateWithoutInvoiceItemsInput>;
};
export type MaterialUpdateWithoutInvoiceItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prices?: Prisma.MaterialPriceUpdateManyWithoutMaterialNestedInput;
    engineerStock?: Prisma.EngineerStockUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutInvoiceItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prices?: Prisma.MaterialPriceUncheckedUpdateManyWithoutMaterialNestedInput;
    engineerStock?: Prisma.EngineerStockUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateWithoutEngineerStockInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    prices?: Prisma.MaterialPriceCreateNestedManyWithoutMaterialInput;
    invoiceItems?: Prisma.InvoiceItemCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutEngineerStockInput = {
    id?: string;
    materialCode: string;
    description: string;
    materialGroup: string;
    createdAt?: Date | string;
    prices?: Prisma.MaterialPriceUncheckedCreateNestedManyWithoutMaterialInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutEngineerStockInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutEngineerStockInput, Prisma.MaterialUncheckedCreateWithoutEngineerStockInput>;
};
export type MaterialUpsertWithoutEngineerStockInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutEngineerStockInput, Prisma.MaterialUncheckedUpdateWithoutEngineerStockInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutEngineerStockInput, Prisma.MaterialUncheckedCreateWithoutEngineerStockInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutEngineerStockInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutEngineerStockInput, Prisma.MaterialUncheckedUpdateWithoutEngineerStockInput>;
};
export type MaterialUpdateWithoutEngineerStockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prices?: Prisma.MaterialPriceUpdateManyWithoutMaterialNestedInput;
    invoiceItems?: Prisma.InvoiceItemUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutEngineerStockInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialCode?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    materialGroup?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    prices?: Prisma.MaterialPriceUncheckedUpdateManyWithoutMaterialNestedInput;
    invoiceItems?: Prisma.InvoiceItemUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCountOutputType = {
    prices: number;
    invoiceItems: number;
    engineerStock: number;
};
export type MaterialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prices?: boolean | MaterialCountOutputTypeCountPricesArgs;
    invoiceItems?: boolean | MaterialCountOutputTypeCountInvoiceItemsArgs;
    engineerStock?: boolean | MaterialCountOutputTypeCountEngineerStockArgs;
};
export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialCountOutputTypeSelect<ExtArgs> | null;
};
export type MaterialCountOutputTypeCountPricesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialPriceWhereInput;
};
export type MaterialCountOutputTypeCountInvoiceItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvoiceItemWhereInput;
};
export type MaterialCountOutputTypeCountEngineerStockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerStockWhereInput;
};
export type MaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    materialCode?: boolean;
    description?: boolean;
    materialGroup?: boolean;
    createdAt?: boolean;
    prices?: boolean | Prisma.Material$pricesArgs<ExtArgs>;
    invoiceItems?: boolean | Prisma.Material$invoiceItemsArgs<ExtArgs>;
    engineerStock?: boolean | Prisma.Material$engineerStockArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    materialCode?: boolean;
    description?: boolean;
    materialGroup?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    materialCode?: boolean;
    description?: boolean;
    materialGroup?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectScalar = {
    id?: boolean;
    materialCode?: boolean;
    description?: boolean;
    materialGroup?: boolean;
    createdAt?: boolean;
};
export type MaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "materialCode" | "description" | "materialGroup" | "createdAt", ExtArgs["result"]["material"]>;
export type MaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prices?: boolean | Prisma.Material$pricesArgs<ExtArgs>;
    invoiceItems?: boolean | Prisma.Material$invoiceItemsArgs<ExtArgs>;
    engineerStock?: boolean | Prisma.Material$engineerStockArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Material";
    objects: {
        prices: Prisma.$MaterialPricePayload<ExtArgs>[];
        invoiceItems: Prisma.$InvoiceItemPayload<ExtArgs>[];
        engineerStock: Prisma.$EngineerStockPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        materialCode: string;
        description: string;
        materialGroup: string;
        createdAt: Date;
    }, ExtArgs["result"]["material"]>;
    composites: {};
};
export type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaterialPayload, S>;
export type MaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaterialCountAggregateInputType | true;
};
export interface MaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Material'];
        meta: {
            name: 'Material';
        };
    };
    findUnique<T extends MaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MaterialFindManyArgs>(args?: Prisma.SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MaterialCreateArgs>(args: Prisma.SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MaterialDeleteArgs>(args: Prisma.SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MaterialUpdateArgs>(args: Prisma.SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MaterialUpsertArgs>(args: Prisma.SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MaterialCountArgs>(args?: Prisma.Subset<T, MaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaterialCountAggregateOutputType> : number>;
    aggregate<T extends MaterialAggregateArgs>(args: Prisma.Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>;
    groupBy<T extends MaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: MaterialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MaterialFieldRefs;
}
export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prices<T extends Prisma.Material$pricesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoiceItems<T extends Prisma.Material$invoiceItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$invoiceItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    engineerStock<T extends Prisma.Material$engineerStockArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$engineerStockArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MaterialFieldRefs {
    readonly id: Prisma.FieldRef<"Material", 'String'>;
    readonly materialCode: Prisma.FieldRef<"Material", 'String'>;
    readonly description: Prisma.FieldRef<"Material", 'String'>;
    readonly materialGroup: Prisma.FieldRef<"Material", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Material", 'DateTime'>;
}
export type MaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type MaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type MaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
export type MaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
};
export type MaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    where?: Prisma.MaterialWhereInput;
    limit?: number;
};
export type MaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    where?: Prisma.MaterialWhereInput;
    limit?: number;
};
export type MaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
};
export type MaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where: Prisma.MaterialWhereUniqueInput;
};
export type MaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    limit?: number;
};
export type Material$pricesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Material$invoiceItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvoiceItemSelect<ExtArgs> | null;
    omit?: Prisma.InvoiceItemOmit<ExtArgs> | null;
    include?: Prisma.InvoiceItemInclude<ExtArgs> | null;
    where?: Prisma.InvoiceItemWhereInput;
    orderBy?: Prisma.InvoiceItemOrderByWithRelationInput | Prisma.InvoiceItemOrderByWithRelationInput[];
    cursor?: Prisma.InvoiceItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceItemScalarFieldEnum | Prisma.InvoiceItemScalarFieldEnum[];
};
export type Material$engineerStockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    include?: Prisma.MaterialInclude<ExtArgs> | null;
};
export {};
