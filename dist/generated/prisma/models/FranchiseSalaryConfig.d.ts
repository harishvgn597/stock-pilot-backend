import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FranchiseSalaryConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$FranchiseSalaryConfigPayload>;
export type AggregateFranchiseSalaryConfig = {
    _count: FranchiseSalaryConfigCountAggregateOutputType | null;
    _avg: FranchiseSalaryConfigAvgAggregateOutputType | null;
    _sum: FranchiseSalaryConfigSumAggregateOutputType | null;
    _min: FranchiseSalaryConfigMinAggregateOutputType | null;
    _max: FranchiseSalaryConfigMaxAggregateOutputType | null;
};
export type FranchiseSalaryConfigAvgAggregateOutputType = {
    ratePerSalesCall: number | null;
    rateCustomerSatisfaction: number | null;
    slabAccessory: number | null;
    slabSpare: number | null;
    slabEssential: number | null;
};
export type FranchiseSalaryConfigSumAggregateOutputType = {
    ratePerSalesCall: number | null;
    rateCustomerSatisfaction: number | null;
    slabAccessory: number | null;
    slabSpare: number | null;
    slabEssential: number | null;
};
export type FranchiseSalaryConfigMinAggregateOutputType = {
    id: string | null;
    franchiseeId: string | null;
    ratePerSalesCall: number | null;
    rateCustomerSatisfaction: number | null;
    slabAccessory: number | null;
    slabSpare: number | null;
    slabEssential: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FranchiseSalaryConfigMaxAggregateOutputType = {
    id: string | null;
    franchiseeId: string | null;
    ratePerSalesCall: number | null;
    rateCustomerSatisfaction: number | null;
    slabAccessory: number | null;
    slabSpare: number | null;
    slabEssential: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FranchiseSalaryConfigCountAggregateOutputType = {
    id: number;
    franchiseeId: number;
    ratePerSalesCall: number;
    rateCustomerSatisfaction: number;
    slabAccessory: number;
    slabSpare: number;
    slabEssential: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FranchiseSalaryConfigAvgAggregateInputType = {
    ratePerSalesCall?: true;
    rateCustomerSatisfaction?: true;
    slabAccessory?: true;
    slabSpare?: true;
    slabEssential?: true;
};
export type FranchiseSalaryConfigSumAggregateInputType = {
    ratePerSalesCall?: true;
    rateCustomerSatisfaction?: true;
    slabAccessory?: true;
    slabSpare?: true;
    slabEssential?: true;
};
export type FranchiseSalaryConfigMinAggregateInputType = {
    id?: true;
    franchiseeId?: true;
    ratePerSalesCall?: true;
    rateCustomerSatisfaction?: true;
    slabAccessory?: true;
    slabSpare?: true;
    slabEssential?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FranchiseSalaryConfigMaxAggregateInputType = {
    id?: true;
    franchiseeId?: true;
    ratePerSalesCall?: true;
    rateCustomerSatisfaction?: true;
    slabAccessory?: true;
    slabSpare?: true;
    slabEssential?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FranchiseSalaryConfigCountAggregateInputType = {
    id?: true;
    franchiseeId?: true;
    ratePerSalesCall?: true;
    rateCustomerSatisfaction?: true;
    slabAccessory?: true;
    slabSpare?: true;
    slabEssential?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FranchiseSalaryConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    orderBy?: Prisma.FranchiseSalaryConfigOrderByWithRelationInput | Prisma.FranchiseSalaryConfigOrderByWithRelationInput[];
    cursor?: Prisma.FranchiseSalaryConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FranchiseSalaryConfigCountAggregateInputType;
    _avg?: FranchiseSalaryConfigAvgAggregateInputType;
    _sum?: FranchiseSalaryConfigSumAggregateInputType;
    _min?: FranchiseSalaryConfigMinAggregateInputType;
    _max?: FranchiseSalaryConfigMaxAggregateInputType;
};
export type GetFranchiseSalaryConfigAggregateType<T extends FranchiseSalaryConfigAggregateArgs> = {
    [P in keyof T & keyof AggregateFranchiseSalaryConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFranchiseSalaryConfig[P]> : Prisma.GetScalarType<T[P], AggregateFranchiseSalaryConfig[P]>;
};
export type FranchiseSalaryConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    orderBy?: Prisma.FranchiseSalaryConfigOrderByWithAggregationInput | Prisma.FranchiseSalaryConfigOrderByWithAggregationInput[];
    by: Prisma.FranchiseSalaryConfigScalarFieldEnum[] | Prisma.FranchiseSalaryConfigScalarFieldEnum;
    having?: Prisma.FranchiseSalaryConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FranchiseSalaryConfigCountAggregateInputType | true;
    _avg?: FranchiseSalaryConfigAvgAggregateInputType;
    _sum?: FranchiseSalaryConfigSumAggregateInputType;
    _min?: FranchiseSalaryConfigMinAggregateInputType;
    _max?: FranchiseSalaryConfigMaxAggregateInputType;
};
export type FranchiseSalaryConfigGroupByOutputType = {
    id: string;
    franchiseeId: string;
    ratePerSalesCall: number;
    rateCustomerSatisfaction: number;
    slabAccessory: number;
    slabSpare: number;
    slabEssential: number;
    createdAt: Date;
    updatedAt: Date;
    _count: FranchiseSalaryConfigCountAggregateOutputType | null;
    _avg: FranchiseSalaryConfigAvgAggregateOutputType | null;
    _sum: FranchiseSalaryConfigSumAggregateOutputType | null;
    _min: FranchiseSalaryConfigMinAggregateOutputType | null;
    _max: FranchiseSalaryConfigMaxAggregateOutputType | null;
};
type GetFranchiseSalaryConfigGroupByPayload<T extends FranchiseSalaryConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FranchiseSalaryConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FranchiseSalaryConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FranchiseSalaryConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FranchiseSalaryConfigGroupByOutputType[P]>;
}>>;
export type FranchiseSalaryConfigWhereInput = {
    AND?: Prisma.FranchiseSalaryConfigWhereInput | Prisma.FranchiseSalaryConfigWhereInput[];
    OR?: Prisma.FranchiseSalaryConfigWhereInput[];
    NOT?: Prisma.FranchiseSalaryConfigWhereInput | Prisma.FranchiseSalaryConfigWhereInput[];
    id?: Prisma.StringFilter<"FranchiseSalaryConfig"> | string;
    franchiseeId?: Prisma.StringFilter<"FranchiseSalaryConfig"> | string;
    ratePerSalesCall?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    rateCustomerSatisfaction?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    slabAccessory?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    slabSpare?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    slabEssential?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    createdAt?: Prisma.DateTimeFilter<"FranchiseSalaryConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FranchiseSalaryConfig"> | Date | string;
};
export type FranchiseSalaryConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FranchiseSalaryConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    franchiseeId?: string;
    AND?: Prisma.FranchiseSalaryConfigWhereInput | Prisma.FranchiseSalaryConfigWhereInput[];
    OR?: Prisma.FranchiseSalaryConfigWhereInput[];
    NOT?: Prisma.FranchiseSalaryConfigWhereInput | Prisma.FranchiseSalaryConfigWhereInput[];
    ratePerSalesCall?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    rateCustomerSatisfaction?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    slabAccessory?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    slabSpare?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    slabEssential?: Prisma.FloatFilter<"FranchiseSalaryConfig"> | number;
    createdAt?: Prisma.DateTimeFilter<"FranchiseSalaryConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FranchiseSalaryConfig"> | Date | string;
}, "id" | "franchiseeId">;
export type FranchiseSalaryConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FranchiseSalaryConfigCountOrderByAggregateInput;
    _avg?: Prisma.FranchiseSalaryConfigAvgOrderByAggregateInput;
    _max?: Prisma.FranchiseSalaryConfigMaxOrderByAggregateInput;
    _min?: Prisma.FranchiseSalaryConfigMinOrderByAggregateInput;
    _sum?: Prisma.FranchiseSalaryConfigSumOrderByAggregateInput;
};
export type FranchiseSalaryConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.FranchiseSalaryConfigScalarWhereWithAggregatesInput | Prisma.FranchiseSalaryConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.FranchiseSalaryConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FranchiseSalaryConfigScalarWhereWithAggregatesInput | Prisma.FranchiseSalaryConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FranchiseSalaryConfig"> | string;
    franchiseeId?: Prisma.StringWithAggregatesFilter<"FranchiseSalaryConfig"> | string;
    ratePerSalesCall?: Prisma.FloatWithAggregatesFilter<"FranchiseSalaryConfig"> | number;
    rateCustomerSatisfaction?: Prisma.FloatWithAggregatesFilter<"FranchiseSalaryConfig"> | number;
    slabAccessory?: Prisma.FloatWithAggregatesFilter<"FranchiseSalaryConfig"> | number;
    slabSpare?: Prisma.FloatWithAggregatesFilter<"FranchiseSalaryConfig"> | number;
    slabEssential?: Prisma.FloatWithAggregatesFilter<"FranchiseSalaryConfig"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FranchiseSalaryConfig"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FranchiseSalaryConfig"> | Date | string;
};
export type FranchiseSalaryConfigCreateInput = {
    id?: string;
    franchiseeId: string;
    ratePerSalesCall?: number;
    rateCustomerSatisfaction?: number;
    slabAccessory?: number;
    slabSpare?: number;
    slabEssential?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FranchiseSalaryConfigUncheckedCreateInput = {
    id?: string;
    franchiseeId: string;
    ratePerSalesCall?: number;
    rateCustomerSatisfaction?: number;
    slabAccessory?: number;
    slabSpare?: number;
    slabEssential?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FranchiseSalaryConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratePerSalesCall?: Prisma.FloatFieldUpdateOperationsInput | number;
    rateCustomerSatisfaction?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabAccessory?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabSpare?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabEssential?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FranchiseSalaryConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratePerSalesCall?: Prisma.FloatFieldUpdateOperationsInput | number;
    rateCustomerSatisfaction?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabAccessory?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabSpare?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabEssential?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FranchiseSalaryConfigCreateManyInput = {
    id?: string;
    franchiseeId: string;
    ratePerSalesCall?: number;
    rateCustomerSatisfaction?: number;
    slabAccessory?: number;
    slabSpare?: number;
    slabEssential?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FranchiseSalaryConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratePerSalesCall?: Prisma.FloatFieldUpdateOperationsInput | number;
    rateCustomerSatisfaction?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabAccessory?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabSpare?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabEssential?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FranchiseSalaryConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    franchiseeId?: Prisma.StringFieldUpdateOperationsInput | string;
    ratePerSalesCall?: Prisma.FloatFieldUpdateOperationsInput | number;
    rateCustomerSatisfaction?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabAccessory?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabSpare?: Prisma.FloatFieldUpdateOperationsInput | number;
    slabEssential?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FranchiseSalaryConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FranchiseSalaryConfigAvgOrderByAggregateInput = {
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
};
export type FranchiseSalaryConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FranchiseSalaryConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    franchiseeId?: Prisma.SortOrder;
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FranchiseSalaryConfigSumOrderByAggregateInput = {
    ratePerSalesCall?: Prisma.SortOrder;
    rateCustomerSatisfaction?: Prisma.SortOrder;
    slabAccessory?: Prisma.SortOrder;
    slabSpare?: Prisma.SortOrder;
    slabEssential?: Prisma.SortOrder;
};
export type FranchiseSalaryConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    franchiseeId?: boolean;
    ratePerSalesCall?: boolean;
    rateCustomerSatisfaction?: boolean;
    slabAccessory?: boolean;
    slabSpare?: boolean;
    slabEssential?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["franchiseSalaryConfig"]>;
export type FranchiseSalaryConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    franchiseeId?: boolean;
    ratePerSalesCall?: boolean;
    rateCustomerSatisfaction?: boolean;
    slabAccessory?: boolean;
    slabSpare?: boolean;
    slabEssential?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["franchiseSalaryConfig"]>;
export type FranchiseSalaryConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    franchiseeId?: boolean;
    ratePerSalesCall?: boolean;
    rateCustomerSatisfaction?: boolean;
    slabAccessory?: boolean;
    slabSpare?: boolean;
    slabEssential?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["franchiseSalaryConfig"]>;
export type FranchiseSalaryConfigSelectScalar = {
    id?: boolean;
    franchiseeId?: boolean;
    ratePerSalesCall?: boolean;
    rateCustomerSatisfaction?: boolean;
    slabAccessory?: boolean;
    slabSpare?: boolean;
    slabEssential?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FranchiseSalaryConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "franchiseeId" | "ratePerSalesCall" | "rateCustomerSatisfaction" | "slabAccessory" | "slabSpare" | "slabEssential" | "createdAt" | "updatedAt", ExtArgs["result"]["franchiseSalaryConfig"]>;
export type $FranchiseSalaryConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FranchiseSalaryConfig";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        franchiseeId: string;
        ratePerSalesCall: number;
        rateCustomerSatisfaction: number;
        slabAccessory: number;
        slabSpare: number;
        slabEssential: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["franchiseSalaryConfig"]>;
    composites: {};
};
export type FranchiseSalaryConfigGetPayload<S extends boolean | null | undefined | FranchiseSalaryConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload, S>;
export type FranchiseSalaryConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FranchiseSalaryConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FranchiseSalaryConfigCountAggregateInputType | true;
};
export interface FranchiseSalaryConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FranchiseSalaryConfig'];
        meta: {
            name: 'FranchiseSalaryConfig';
        };
    };
    findUnique<T extends FranchiseSalaryConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FranchiseSalaryConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FranchiseSalaryConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, FranchiseSalaryConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FranchiseSalaryConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FranchiseSalaryConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FranchiseSalaryConfigFindManyArgs>(args?: Prisma.SelectSubset<T, FranchiseSalaryConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FranchiseSalaryConfigCreateArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigCreateArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FranchiseSalaryConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, FranchiseSalaryConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FranchiseSalaryConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FranchiseSalaryConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FranchiseSalaryConfigDeleteArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FranchiseSalaryConfigUpdateArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FranchiseSalaryConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, FranchiseSalaryConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FranchiseSalaryConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FranchiseSalaryConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FranchiseSalaryConfigUpsertArgs>(args: Prisma.SelectSubset<T, FranchiseSalaryConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__FranchiseSalaryConfigClient<runtime.Types.Result.GetResult<Prisma.$FranchiseSalaryConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FranchiseSalaryConfigCountArgs>(args?: Prisma.Subset<T, FranchiseSalaryConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FranchiseSalaryConfigCountAggregateOutputType> : number>;
    aggregate<T extends FranchiseSalaryConfigAggregateArgs>(args: Prisma.Subset<T, FranchiseSalaryConfigAggregateArgs>): Prisma.PrismaPromise<GetFranchiseSalaryConfigAggregateType<T>>;
    groupBy<T extends FranchiseSalaryConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FranchiseSalaryConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: FranchiseSalaryConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FranchiseSalaryConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranchiseSalaryConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FranchiseSalaryConfigFieldRefs;
}
export interface Prisma__FranchiseSalaryConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FranchiseSalaryConfigFieldRefs {
    readonly id: Prisma.FieldRef<"FranchiseSalaryConfig", 'String'>;
    readonly franchiseeId: Prisma.FieldRef<"FranchiseSalaryConfig", 'String'>;
    readonly ratePerSalesCall: Prisma.FieldRef<"FranchiseSalaryConfig", 'Float'>;
    readonly rateCustomerSatisfaction: Prisma.FieldRef<"FranchiseSalaryConfig", 'Float'>;
    readonly slabAccessory: Prisma.FieldRef<"FranchiseSalaryConfig", 'Float'>;
    readonly slabSpare: Prisma.FieldRef<"FranchiseSalaryConfig", 'Float'>;
    readonly slabEssential: Prisma.FieldRef<"FranchiseSalaryConfig", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"FranchiseSalaryConfig", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FranchiseSalaryConfig", 'DateTime'>;
}
export type FranchiseSalaryConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where: Prisma.FranchiseSalaryConfigWhereUniqueInput;
};
export type FranchiseSalaryConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where: Prisma.FranchiseSalaryConfigWhereUniqueInput;
};
export type FranchiseSalaryConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    orderBy?: Prisma.FranchiseSalaryConfigOrderByWithRelationInput | Prisma.FranchiseSalaryConfigOrderByWithRelationInput[];
    cursor?: Prisma.FranchiseSalaryConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FranchiseSalaryConfigScalarFieldEnum | Prisma.FranchiseSalaryConfigScalarFieldEnum[];
};
export type FranchiseSalaryConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    orderBy?: Prisma.FranchiseSalaryConfigOrderByWithRelationInput | Prisma.FranchiseSalaryConfigOrderByWithRelationInput[];
    cursor?: Prisma.FranchiseSalaryConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FranchiseSalaryConfigScalarFieldEnum | Prisma.FranchiseSalaryConfigScalarFieldEnum[];
};
export type FranchiseSalaryConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    orderBy?: Prisma.FranchiseSalaryConfigOrderByWithRelationInput | Prisma.FranchiseSalaryConfigOrderByWithRelationInput[];
    cursor?: Prisma.FranchiseSalaryConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FranchiseSalaryConfigScalarFieldEnum | Prisma.FranchiseSalaryConfigScalarFieldEnum[];
};
export type FranchiseSalaryConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FranchiseSalaryConfigCreateInput, Prisma.FranchiseSalaryConfigUncheckedCreateInput>;
};
export type FranchiseSalaryConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FranchiseSalaryConfigCreateManyInput | Prisma.FranchiseSalaryConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FranchiseSalaryConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    data: Prisma.FranchiseSalaryConfigCreateManyInput | Prisma.FranchiseSalaryConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FranchiseSalaryConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FranchiseSalaryConfigUpdateInput, Prisma.FranchiseSalaryConfigUncheckedUpdateInput>;
    where: Prisma.FranchiseSalaryConfigWhereUniqueInput;
};
export type FranchiseSalaryConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FranchiseSalaryConfigUpdateManyMutationInput, Prisma.FranchiseSalaryConfigUncheckedUpdateManyInput>;
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    limit?: number;
};
export type FranchiseSalaryConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FranchiseSalaryConfigUpdateManyMutationInput, Prisma.FranchiseSalaryConfigUncheckedUpdateManyInput>;
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    limit?: number;
};
export type FranchiseSalaryConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where: Prisma.FranchiseSalaryConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.FranchiseSalaryConfigCreateInput, Prisma.FranchiseSalaryConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FranchiseSalaryConfigUpdateInput, Prisma.FranchiseSalaryConfigUncheckedUpdateInput>;
};
export type FranchiseSalaryConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
    where: Prisma.FranchiseSalaryConfigWhereUniqueInput;
};
export type FranchiseSalaryConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FranchiseSalaryConfigWhereInput;
    limit?: number;
};
export type FranchiseSalaryConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FranchiseSalaryConfigSelect<ExtArgs> | null;
    omit?: Prisma.FranchiseSalaryConfigOmit<ExtArgs> | null;
};
export {};
