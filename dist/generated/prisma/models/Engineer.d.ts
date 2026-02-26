import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EngineerModel = runtime.Types.Result.DefaultSelection<Prisma.$EngineerPayload>;
export type AggregateEngineer = {
    _count: EngineerCountAggregateOutputType | null;
    _min: EngineerMinAggregateOutputType | null;
    _max: EngineerMaxAggregateOutputType | null;
};
export type EngineerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    createdAt: Date | null;
};
export type EngineerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    createdAt: Date | null;
};
export type EngineerCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    createdAt: number;
    _all: number;
};
export type EngineerMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    createdAt?: true;
};
export type EngineerMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    createdAt?: true;
};
export type EngineerCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    createdAt?: true;
    _all?: true;
};
export type EngineerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerWhereInput;
    orderBy?: Prisma.EngineerOrderByWithRelationInput | Prisma.EngineerOrderByWithRelationInput[];
    cursor?: Prisma.EngineerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EngineerCountAggregateInputType;
    _min?: EngineerMinAggregateInputType;
    _max?: EngineerMaxAggregateInputType;
};
export type GetEngineerAggregateType<T extends EngineerAggregateArgs> = {
    [P in keyof T & keyof AggregateEngineer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEngineer[P]> : Prisma.GetScalarType<T[P], AggregateEngineer[P]>;
};
export type EngineerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerWhereInput;
    orderBy?: Prisma.EngineerOrderByWithAggregationInput | Prisma.EngineerOrderByWithAggregationInput[];
    by: Prisma.EngineerScalarFieldEnum[] | Prisma.EngineerScalarFieldEnum;
    having?: Prisma.EngineerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EngineerCountAggregateInputType | true;
    _min?: EngineerMinAggregateInputType;
    _max?: EngineerMaxAggregateInputType;
};
export type EngineerGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    _count: EngineerCountAggregateOutputType | null;
    _min: EngineerMinAggregateOutputType | null;
    _max: EngineerMaxAggregateOutputType | null;
};
type GetEngineerGroupByPayload<T extends EngineerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EngineerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EngineerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EngineerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EngineerGroupByOutputType[P]>;
}>>;
export type EngineerWhereInput = {
    AND?: Prisma.EngineerWhereInput | Prisma.EngineerWhereInput[];
    OR?: Prisma.EngineerWhereInput[];
    NOT?: Prisma.EngineerWhereInput | Prisma.EngineerWhereInput[];
    id?: Prisma.StringFilter<"Engineer"> | string;
    name?: Prisma.StringFilter<"Engineer"> | string;
    email?: Prisma.StringFilter<"Engineer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Engineer"> | Date | string;
    assignedGoods?: Prisma.EngineerStockListRelationFilter;
};
export type EngineerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    assignedGoods?: Prisma.EngineerStockOrderByRelationAggregateInput;
};
export type EngineerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.EngineerWhereInput | Prisma.EngineerWhereInput[];
    OR?: Prisma.EngineerWhereInput[];
    NOT?: Prisma.EngineerWhereInput | Prisma.EngineerWhereInput[];
    name?: Prisma.StringFilter<"Engineer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Engineer"> | Date | string;
    assignedGoods?: Prisma.EngineerStockListRelationFilter;
}, "id" | "email">;
export type EngineerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EngineerCountOrderByAggregateInput;
    _max?: Prisma.EngineerMaxOrderByAggregateInput;
    _min?: Prisma.EngineerMinOrderByAggregateInput;
};
export type EngineerScalarWhereWithAggregatesInput = {
    AND?: Prisma.EngineerScalarWhereWithAggregatesInput | Prisma.EngineerScalarWhereWithAggregatesInput[];
    OR?: Prisma.EngineerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EngineerScalarWhereWithAggregatesInput | Prisma.EngineerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Engineer"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Engineer"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Engineer"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Engineer"> | Date | string;
};
export type EngineerCreateInput = {
    id?: string;
    name: string;
    email: string;
    createdAt?: Date | string;
    assignedGoods?: Prisma.EngineerStockCreateNestedManyWithoutEngineerInput;
};
export type EngineerUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    createdAt?: Date | string;
    assignedGoods?: Prisma.EngineerStockUncheckedCreateNestedManyWithoutEngineerInput;
};
export type EngineerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedGoods?: Prisma.EngineerStockUpdateManyWithoutEngineerNestedInput;
};
export type EngineerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignedGoods?: Prisma.EngineerStockUncheckedUpdateManyWithoutEngineerNestedInput;
};
export type EngineerCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    createdAt?: Date | string;
};
export type EngineerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EngineerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EngineerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EngineerScalarRelationFilter = {
    is?: Prisma.EngineerWhereInput;
    isNot?: Prisma.EngineerWhereInput;
};
export type EngineerCreateNestedOneWithoutAssignedGoodsInput = {
    create?: Prisma.XOR<Prisma.EngineerCreateWithoutAssignedGoodsInput, Prisma.EngineerUncheckedCreateWithoutAssignedGoodsInput>;
    connectOrCreate?: Prisma.EngineerCreateOrConnectWithoutAssignedGoodsInput;
    connect?: Prisma.EngineerWhereUniqueInput;
};
export type EngineerUpdateOneRequiredWithoutAssignedGoodsNestedInput = {
    create?: Prisma.XOR<Prisma.EngineerCreateWithoutAssignedGoodsInput, Prisma.EngineerUncheckedCreateWithoutAssignedGoodsInput>;
    connectOrCreate?: Prisma.EngineerCreateOrConnectWithoutAssignedGoodsInput;
    upsert?: Prisma.EngineerUpsertWithoutAssignedGoodsInput;
    connect?: Prisma.EngineerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EngineerUpdateToOneWithWhereWithoutAssignedGoodsInput, Prisma.EngineerUpdateWithoutAssignedGoodsInput>, Prisma.EngineerUncheckedUpdateWithoutAssignedGoodsInput>;
};
export type EngineerCreateWithoutAssignedGoodsInput = {
    id?: string;
    name: string;
    email: string;
    createdAt?: Date | string;
};
export type EngineerUncheckedCreateWithoutAssignedGoodsInput = {
    id?: string;
    name: string;
    email: string;
    createdAt?: Date | string;
};
export type EngineerCreateOrConnectWithoutAssignedGoodsInput = {
    where: Prisma.EngineerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EngineerCreateWithoutAssignedGoodsInput, Prisma.EngineerUncheckedCreateWithoutAssignedGoodsInput>;
};
export type EngineerUpsertWithoutAssignedGoodsInput = {
    update: Prisma.XOR<Prisma.EngineerUpdateWithoutAssignedGoodsInput, Prisma.EngineerUncheckedUpdateWithoutAssignedGoodsInput>;
    create: Prisma.XOR<Prisma.EngineerCreateWithoutAssignedGoodsInput, Prisma.EngineerUncheckedCreateWithoutAssignedGoodsInput>;
    where?: Prisma.EngineerWhereInput;
};
export type EngineerUpdateToOneWithWhereWithoutAssignedGoodsInput = {
    where?: Prisma.EngineerWhereInput;
    data: Prisma.XOR<Prisma.EngineerUpdateWithoutAssignedGoodsInput, Prisma.EngineerUncheckedUpdateWithoutAssignedGoodsInput>;
};
export type EngineerUpdateWithoutAssignedGoodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerUncheckedUpdateWithoutAssignedGoodsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EngineerCountOutputType = {
    assignedGoods: number;
};
export type EngineerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignedGoods?: boolean | EngineerCountOutputTypeCountAssignedGoodsArgs;
};
export type EngineerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerCountOutputTypeSelect<ExtArgs> | null;
};
export type EngineerCountOutputTypeCountAssignedGoodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerStockWhereInput;
};
export type EngineerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    createdAt?: boolean;
    assignedGoods?: boolean | Prisma.Engineer$assignedGoodsArgs<ExtArgs>;
    _count?: boolean | Prisma.EngineerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["engineer"]>;
export type EngineerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["engineer"]>;
export type EngineerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["engineer"]>;
export type EngineerSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    createdAt?: boolean;
};
export type EngineerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "createdAt", ExtArgs["result"]["engineer"]>;
export type EngineerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    assignedGoods?: boolean | Prisma.Engineer$assignedGoodsArgs<ExtArgs>;
    _count?: boolean | Prisma.EngineerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EngineerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EngineerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EngineerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Engineer";
    objects: {
        assignedGoods: Prisma.$EngineerStockPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        createdAt: Date;
    }, ExtArgs["result"]["engineer"]>;
    composites: {};
};
export type EngineerGetPayload<S extends boolean | null | undefined | EngineerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EngineerPayload, S>;
export type EngineerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EngineerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EngineerCountAggregateInputType | true;
};
export interface EngineerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Engineer'];
        meta: {
            name: 'Engineer';
        };
    };
    findUnique<T extends EngineerFindUniqueArgs>(args: Prisma.SelectSubset<T, EngineerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EngineerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EngineerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EngineerFindFirstArgs>(args?: Prisma.SelectSubset<T, EngineerFindFirstArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EngineerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EngineerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EngineerFindManyArgs>(args?: Prisma.SelectSubset<T, EngineerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EngineerCreateArgs>(args: Prisma.SelectSubset<T, EngineerCreateArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EngineerCreateManyArgs>(args?: Prisma.SelectSubset<T, EngineerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EngineerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EngineerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EngineerDeleteArgs>(args: Prisma.SelectSubset<T, EngineerDeleteArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EngineerUpdateArgs>(args: Prisma.SelectSubset<T, EngineerUpdateArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EngineerDeleteManyArgs>(args?: Prisma.SelectSubset<T, EngineerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EngineerUpdateManyArgs>(args: Prisma.SelectSubset<T, EngineerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EngineerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EngineerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EngineerUpsertArgs>(args: Prisma.SelectSubset<T, EngineerUpsertArgs<ExtArgs>>): Prisma.Prisma__EngineerClient<runtime.Types.Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EngineerCountArgs>(args?: Prisma.Subset<T, EngineerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EngineerCountAggregateOutputType> : number>;
    aggregate<T extends EngineerAggregateArgs>(args: Prisma.Subset<T, EngineerAggregateArgs>): Prisma.PrismaPromise<GetEngineerAggregateType<T>>;
    groupBy<T extends EngineerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EngineerGroupByArgs['orderBy'];
    } : {
        orderBy?: EngineerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EngineerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngineerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EngineerFieldRefs;
}
export interface Prisma__EngineerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    assignedGoods<T extends Prisma.Engineer$assignedGoodsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Engineer$assignedGoodsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EngineerStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EngineerFieldRefs {
    readonly id: Prisma.FieldRef<"Engineer", 'String'>;
    readonly name: Prisma.FieldRef<"Engineer", 'String'>;
    readonly email: Prisma.FieldRef<"Engineer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Engineer", 'DateTime'>;
}
export type EngineerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where: Prisma.EngineerWhereUniqueInput;
};
export type EngineerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where: Prisma.EngineerWhereUniqueInput;
};
export type EngineerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where?: Prisma.EngineerWhereInput;
    orderBy?: Prisma.EngineerOrderByWithRelationInput | Prisma.EngineerOrderByWithRelationInput[];
    cursor?: Prisma.EngineerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EngineerScalarFieldEnum | Prisma.EngineerScalarFieldEnum[];
};
export type EngineerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where?: Prisma.EngineerWhereInput;
    orderBy?: Prisma.EngineerOrderByWithRelationInput | Prisma.EngineerOrderByWithRelationInput[];
    cursor?: Prisma.EngineerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EngineerScalarFieldEnum | Prisma.EngineerScalarFieldEnum[];
};
export type EngineerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where?: Prisma.EngineerWhereInput;
    orderBy?: Prisma.EngineerOrderByWithRelationInput | Prisma.EngineerOrderByWithRelationInput[];
    cursor?: Prisma.EngineerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EngineerScalarFieldEnum | Prisma.EngineerScalarFieldEnum[];
};
export type EngineerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EngineerCreateInput, Prisma.EngineerUncheckedCreateInput>;
};
export type EngineerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EngineerCreateManyInput | Prisma.EngineerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EngineerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    data: Prisma.EngineerCreateManyInput | Prisma.EngineerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EngineerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EngineerUpdateInput, Prisma.EngineerUncheckedUpdateInput>;
    where: Prisma.EngineerWhereUniqueInput;
};
export type EngineerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EngineerUpdateManyMutationInput, Prisma.EngineerUncheckedUpdateManyInput>;
    where?: Prisma.EngineerWhereInput;
    limit?: number;
};
export type EngineerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EngineerUpdateManyMutationInput, Prisma.EngineerUncheckedUpdateManyInput>;
    where?: Prisma.EngineerWhereInput;
    limit?: number;
};
export type EngineerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where: Prisma.EngineerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EngineerCreateInput, Prisma.EngineerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EngineerUpdateInput, Prisma.EngineerUncheckedUpdateInput>;
};
export type EngineerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
    where: Prisma.EngineerWhereUniqueInput;
};
export type EngineerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EngineerWhereInput;
    limit?: number;
};
export type Engineer$assignedGoodsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EngineerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EngineerSelect<ExtArgs> | null;
    omit?: Prisma.EngineerOmit<ExtArgs> | null;
    include?: Prisma.EngineerInclude<ExtArgs> | null;
};
export {};
