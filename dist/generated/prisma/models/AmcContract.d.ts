import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AmcContractModel = runtime.Types.Result.DefaultSelection<Prisma.$AmcContractPayload>;
export type AggregateAmcContract = {
    _count: AmcContractCountAggregateOutputType | null;
    _avg: AmcContractAvgAggregateOutputType | null;
    _sum: AmcContractSumAggregateOutputType | null;
    _min: AmcContractMinAggregateOutputType | null;
    _max: AmcContractMaxAggregateOutputType | null;
};
export type AmcContractAvgAggregateOutputType = {
    price: number | null;
    discount: number | null;
    totalPrice: number | null;
};
export type AmcContractSumAggregateOutputType = {
    price: number | null;
    discount: number | null;
    totalPrice: number | null;
};
export type AmcContractMinAggregateOutputType = {
    id: string | null;
    icrNumber: string | null;
    warrantyType: $Enums.WarrantyType | null;
    price: number | null;
    discount: number | null;
    totalPrice: number | null;
    engineerName: string | null;
    date: Date | null;
    franchiseeId: string | null;
    createdAt: Date | null;
};
export type AmcContractMaxAggregateOutputType = {
    id: string | null;
    icrNumber: string | null;
    warrantyType: $Enums.WarrantyType | null;
    price: number | null;
    discount: number | null;
    totalPrice: number | null;
    engineerName: string | null;
    date: Date | null;
    franchiseeId: string | null;
    createdAt: Date | null;
};
export type AmcContractCountAggregateOutputType = {
    id: number;
    icrNumber: number;
    warrantyType: number;
    price: number;
    discount: number;
    totalPrice: number;
    engineerName: number;
    date: number;
    franchiseeId: number;
    createdAt: number;
    _all: number;
};
export type AmcContractAvgAggregateInputType = {
    price?: true;
    discount?: true;
    totalPrice?: true;
};
export type AmcContractSumAggregateInputType = {
    price?: true;
    discount?: true;
    totalPrice?: true;
};
export type AmcContractMinAggregateInputType = {
    id?: true;
    icrNumber?: true;
    warrantyType?: true;
    price?: true;
    discount?: true;
    totalPrice?: true;
    engineerName?: true;
    date?: true;
    franchiseeId?: true;
    createdAt?: true;
};
export type AmcContractMaxAggregateInputType = {
    id?: true;
    icrNumber?: true;
    warrantyType?: true;
    price?: true;
    discount?: true;
    totalPrice?: true;
    engineerName?: true;
    date?: true;
    franchiseeId?: true;
    createdAt?: true;
};
export type AmcContractCountAggregateInputType = {
    id?: true;
    icrNumber?: true;
    warrantyType?: true;
    price?: true;
    discount?: true;
    totalPrice?: true;
    engineerName?: true;
    date?: true;
    franchiseeId?: true;
    createdAt?: true;
    _all?: true;
};
export type AmcContractAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmcContractWhereInput;
    orderBy?: Prisma.AmcContractOrderByWithRelationInput | Prisma.AmcContractOrderByWithRelationInput[];
    cursor?: Prisma.AmcContractWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AmcContractCountAggregateInputType;
    _avg?: AmcContractAvgAggregateInputType;
    _sum?: AmcContractSumAggregateInputType;
    _min?: AmcContractMinAggregateInputType;
    _max?: AmcContractMaxAggregateInputType;
};
export type GetAmcContractAggregateType<T extends AmcContractAggregateArgs> = {
    [P in keyof T & keyof AggregateAmcContract]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAmcContract[P]> : Prisma.GetScalarType<T[P], AggregateAmcContract[P]>;
};
export type AmcContractGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmcContractWhereInput;
    orderBy?: Prisma.AmcContractOrderByWithAggregationInput | Prisma.AmcContractOrderByWithAggregationInput[];
    by: Prisma.AmcContractScalarFieldEnum[] | Prisma.AmcContractScalarFieldEnum;
    having?: Prisma.AmcContractScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AmcContractCountAggregateInputType | true;
    _avg?: AmcContractAvgAggregateInputType;
    _sum?: AmcContractSumAggregateInputType;
    _min?: AmcContractMinAggregateInputType;
    _max?: AmcContractMaxAggregateInputType;
};
export type AmcContractGroupByOutputType = {
    id: string;
    icrNumber: string;
    warrantyType: $Enums.WarrantyType;
    price: number;
    discount: number | null;
    totalPrice: number;
    engineerName: string;
    date: Date;
    franchiseeId: string;
    createdAt: Date;
    _count: AmcContractCountAggregateOutputType | null;
    _avg: AmcContractAvgAggregateOutputType | null;
    _sum: AmcContractSumAggregateOutputType | null;
    _min: AmcContractMinAggregateOutputType | null;
    _max: AmcContractMaxAggregateOutputType | null;
};
type GetAmcContractGroupByPayload<T extends AmcContractGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AmcContractGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AmcContractGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AmcContractGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AmcContractGroupByOutputType[P]>;
}>>;
export type AmcContractWhereInput = {
    AND?: Prisma.AmcContractWhereInput | Prisma.AmcContractWhereInput[];
    OR?: Prisma.AmcContractWhereInput[];
    NOT?: Prisma.AmcContractWhereInput | Prisma.AmcContractWhereInput[];
    id?: Prisma.StringFilter<"AmcContract"> | string;
    icrNumber?: Prisma.StringFilter<"AmcContract"> | string;
    warrantyType?: Prisma.EnumWarrantyTypeFilter<"AmcContract"> | $Enums.WarrantyType;
    price?: Prisma.FloatFilter<"AmcContract"> | number;
    discount?: Prisma.FloatNullableFilter<"AmcContract"> | number | null;
    totalPrice?: Prisma.FloatFilter<"AmcContract"> | number;
    engineerName?: Prisma.StringFilter<"AmcContract"> | string;
    date?: Prisma.DateTimeFilter<"AmcContract"> | Date | string;
    franchiseeId?: Prisma.StringFilter<"AmcContract"> | string;
    createdAt?: Prisma.DateTimeFilter<"AmcContract"> | Date | string;
};
export type AmcContractOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    icrNumber?: Prisma.SortOrder;
    warrantyType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    engineerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AmcContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    icrNumber?: string;
    AND?: Prisma.AmcContractWhereInput | Prisma.AmcContractWhereInput[];
    OR?: Prisma.AmcContractWhereInput[];
    NOT?: Prisma.AmcContractWhereInput | Prisma.AmcContractWhereInput[];
    warrantyType?: Prisma.EnumWarrantyTypeFilter<"AmcContract"> | $Enums.WarrantyType;
    price?: Prisma.FloatFilter<"AmcContract"> | number;
    discount?: Prisma.FloatNullableFilter<"AmcContract"> | number | null;
    totalPrice?: Prisma.FloatFilter<"AmcContract"> | number;
    engineerName?: Prisma.StringFilter<"AmcContract"> | string;
    date?: Prisma.DateTimeFilter<"AmcContract"> | Date | string;
    franchiseeId?: Prisma.StringFilter<"AmcContract"> | string;
    createdAt?: Prisma.DateTimeFilter<"AmcContract"> | Date | string;
}, "id" | "icrNumber">;
export type AmcContractOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    icrNumber?: Prisma.SortOrder;
    warrantyType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    engineerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AmcContractCountOrderByAggregateInput;
    _avg?: Prisma.AmcContractAvgOrderByAggregateInput;
    _max?: Prisma.AmcContractMaxOrderByAggregateInput;
    _min?: Prisma.AmcContractMinOrderByAggregateInput;
    _sum?: Prisma.AmcContractSumOrderByAggregateInput;
};
export type AmcContractScalarWhereWithAggregatesInput = {
    AND?: Prisma.AmcContractScalarWhereWithAggregatesInput | Prisma.AmcContractScalarWhereWithAggregatesInput[];
    OR?: Prisma.AmcContractScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AmcContractScalarWhereWithAggregatesInput | Prisma.AmcContractScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AmcContract"> | string;
    icrNumber?: Prisma.StringWithAggregatesFilter<"AmcContract"> | string;
    warrantyType?: Prisma.EnumWarrantyTypeWithAggregatesFilter<"AmcContract"> | $Enums.WarrantyType;
    price?: Prisma.FloatWithAggregatesFilter<"AmcContract"> | number;
    discount?: Prisma.FloatNullableWithAggregatesFilter<"AmcContract"> | number | null;
    totalPrice?: Prisma.FloatWithAggregatesFilter<"AmcContract"> | number;
    engineerName?: Prisma.StringWithAggregatesFilter<"AmcContract"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"AmcContract"> | Date | string;
    franchiseeId?: Prisma.StringWithAggregatesFilter<"AmcContract"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AmcContract"> | Date | string;
};
export type AmcContractCreateInput = {
    id?: string;
    icrNumber: string;
    warrantyType: $Enums.WarrantyType;
    price: number;
    discount?: number | null;
    totalPrice: number;
    engineerName: string;
    date: Date | string;
    franchiseeId: string;
    createdAt?: Date | string;
};
export type AmcContractUncheckedCreateInput = {
    id?: string;
    icrNumber: string;
    warrantyType: $Enums.WarrantyType;
    price: number;
    discount?: number | null;
    totalPrice: number;
    engineerName: string;
    date: Date | string;
    franchiseeId: string;
    createdAt?: Date | string;
};
export type AmcContractUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    icrNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    warrantyType?: Prisma.EnumWarrantyTypeFieldUpdateOperationsInput | $Enums.WarrantyType;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    engineerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmcContractUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    icrNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    warrantyType?: Prisma.EnumWarrantyTypeFieldUpdateOperationsInput | $Enums.WarrantyType;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    engineerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmcContractCreateManyInput = {
    id?: string;
    icrNumber: string;
    warrantyType: $Enums.WarrantyType;
    price: number;
    discount?: number | null;
    totalPrice: number;
    engineerName: string;
    date: Date | string;
    franchiseeId: string;
    createdAt?: Date | string;
};
export type AmcContractUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    icrNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    warrantyType?: Prisma.EnumWarrantyTypeFieldUpdateOperationsInput | $Enums.WarrantyType;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    engineerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmcContractUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    icrNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    warrantyType?: Prisma.EnumWarrantyTypeFieldUpdateOperationsInput | $Enums.WarrantyType;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    discount?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    totalPrice?: Prisma.FloatFieldUpdateOperationsInput | number;
    engineerName?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmcContractCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    icrNumber?: Prisma.SortOrder;
    warrantyType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    engineerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AmcContractAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type AmcContractMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    icrNumber?: Prisma.SortOrder;
    warrantyType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    engineerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AmcContractMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    icrNumber?: Prisma.SortOrder;
    warrantyType?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    engineerName?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AmcContractSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type EnumWarrantyTypeFieldUpdateOperationsInput = {
    set?: $Enums.WarrantyType;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AmcContractSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    icrNumber?: boolean;
    warrantyType?: boolean;
    price?: boolean;
    discount?: boolean;
    totalPrice?: boolean;
    engineerName?: boolean;
    date?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["amcContract"]>;
export type AmcContractSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    icrNumber?: boolean;
    warrantyType?: boolean;
    price?: boolean;
    discount?: boolean;
    totalPrice?: boolean;
    engineerName?: boolean;
    date?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["amcContract"]>;
export type AmcContractSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    icrNumber?: boolean;
    warrantyType?: boolean;
    price?: boolean;
    discount?: boolean;
    totalPrice?: boolean;
    engineerName?: boolean;
    date?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["amcContract"]>;
export type AmcContractSelectScalar = {
    id?: boolean;
    icrNumber?: boolean;
    warrantyType?: boolean;
    price?: boolean;
    discount?: boolean;
    totalPrice?: boolean;
    engineerName?: boolean;
    date?: boolean;
    franchiseeId?: boolean;
    createdAt?: boolean;
};
export type AmcContractOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "icrNumber" | "warrantyType" | "price" | "discount" | "totalPrice" | "engineerName" | "date" | "franchiseeId" | "createdAt", ExtArgs["result"]["amcContract"]>;
export type $AmcContractPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AmcContract";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        icrNumber: string;
        warrantyType: $Enums.WarrantyType;
        price: number;
        discount: number | null;
        totalPrice: number;
        engineerName: string;
        date: Date;
        franchiseeId: string;
        createdAt: Date;
    }, ExtArgs["result"]["amcContract"]>;
    composites: {};
};
export type AmcContractGetPayload<S extends boolean | null | undefined | AmcContractDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AmcContractPayload, S>;
export type AmcContractCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AmcContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AmcContractCountAggregateInputType | true;
};
export interface AmcContractDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AmcContract'];
        meta: {
            name: 'AmcContract';
        };
    };
    findUnique<T extends AmcContractFindUniqueArgs>(args: Prisma.SelectSubset<T, AmcContractFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AmcContractFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AmcContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AmcContractFindFirstArgs>(args?: Prisma.SelectSubset<T, AmcContractFindFirstArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AmcContractFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AmcContractFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AmcContractFindManyArgs>(args?: Prisma.SelectSubset<T, AmcContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AmcContractCreateArgs>(args: Prisma.SelectSubset<T, AmcContractCreateArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AmcContractCreateManyArgs>(args?: Prisma.SelectSubset<T, AmcContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AmcContractCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AmcContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AmcContractDeleteArgs>(args: Prisma.SelectSubset<T, AmcContractDeleteArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AmcContractUpdateArgs>(args: Prisma.SelectSubset<T, AmcContractUpdateArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AmcContractDeleteManyArgs>(args?: Prisma.SelectSubset<T, AmcContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AmcContractUpdateManyArgs>(args: Prisma.SelectSubset<T, AmcContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AmcContractUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AmcContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AmcContractUpsertArgs>(args: Prisma.SelectSubset<T, AmcContractUpsertArgs<ExtArgs>>): Prisma.Prisma__AmcContractClient<runtime.Types.Result.GetResult<Prisma.$AmcContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AmcContractCountArgs>(args?: Prisma.Subset<T, AmcContractCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AmcContractCountAggregateOutputType> : number>;
    aggregate<T extends AmcContractAggregateArgs>(args: Prisma.Subset<T, AmcContractAggregateArgs>): Prisma.PrismaPromise<GetAmcContractAggregateType<T>>;
    groupBy<T extends AmcContractGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AmcContractGroupByArgs['orderBy'];
    } : {
        orderBy?: AmcContractGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AmcContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmcContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AmcContractFieldRefs;
}
export interface Prisma__AmcContractClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AmcContractFieldRefs {
    readonly id: Prisma.FieldRef<"AmcContract", 'String'>;
    readonly icrNumber: Prisma.FieldRef<"AmcContract", 'String'>;
    readonly warrantyType: Prisma.FieldRef<"AmcContract", 'WarrantyType'>;
    readonly price: Prisma.FieldRef<"AmcContract", 'Float'>;
    readonly discount: Prisma.FieldRef<"AmcContract", 'Float'>;
    readonly totalPrice: Prisma.FieldRef<"AmcContract", 'Float'>;
    readonly engineerName: Prisma.FieldRef<"AmcContract", 'String'>;
    readonly date: Prisma.FieldRef<"AmcContract", 'DateTime'>;
    readonly franchiseeId: Prisma.FieldRef<"AmcContract", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AmcContract", 'DateTime'>;
}
export type AmcContractFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where: Prisma.AmcContractWhereUniqueInput;
};
export type AmcContractFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where: Prisma.AmcContractWhereUniqueInput;
};
export type AmcContractFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where?: Prisma.AmcContractWhereInput;
    orderBy?: Prisma.AmcContractOrderByWithRelationInput | Prisma.AmcContractOrderByWithRelationInput[];
    cursor?: Prisma.AmcContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmcContractScalarFieldEnum | Prisma.AmcContractScalarFieldEnum[];
};
export type AmcContractFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where?: Prisma.AmcContractWhereInput;
    orderBy?: Prisma.AmcContractOrderByWithRelationInput | Prisma.AmcContractOrderByWithRelationInput[];
    cursor?: Prisma.AmcContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmcContractScalarFieldEnum | Prisma.AmcContractScalarFieldEnum[];
};
export type AmcContractFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where?: Prisma.AmcContractWhereInput;
    orderBy?: Prisma.AmcContractOrderByWithRelationInput | Prisma.AmcContractOrderByWithRelationInput[];
    cursor?: Prisma.AmcContractWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AmcContractScalarFieldEnum | Prisma.AmcContractScalarFieldEnum[];
};
export type AmcContractCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AmcContractCreateInput, Prisma.AmcContractUncheckedCreateInput>;
};
export type AmcContractCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AmcContractCreateManyInput | Prisma.AmcContractCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AmcContractCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    data: Prisma.AmcContractCreateManyInput | Prisma.AmcContractCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AmcContractUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AmcContractUpdateInput, Prisma.AmcContractUncheckedUpdateInput>;
    where: Prisma.AmcContractWhereUniqueInput;
};
export type AmcContractUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AmcContractUpdateManyMutationInput, Prisma.AmcContractUncheckedUpdateManyInput>;
    where?: Prisma.AmcContractWhereInput;
    limit?: number;
};
export type AmcContractUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AmcContractUpdateManyMutationInput, Prisma.AmcContractUncheckedUpdateManyInput>;
    where?: Prisma.AmcContractWhereInput;
    limit?: number;
};
export type AmcContractUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where: Prisma.AmcContractWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmcContractCreateInput, Prisma.AmcContractUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AmcContractUpdateInput, Prisma.AmcContractUncheckedUpdateInput>;
};
export type AmcContractDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
    where: Prisma.AmcContractWhereUniqueInput;
};
export type AmcContractDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmcContractWhereInput;
    limit?: number;
};
export type AmcContractDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AmcContractSelect<ExtArgs> | null;
    omit?: Prisma.AmcContractOmit<ExtArgs> | null;
};
export {};
