export declare class CreateAmcContractDto {
    icrNumber: string;
    warrantyType: 'AMC' | 'Warranty' | 'CAMC';
    price: number;
    discount?: number;
    engineerName: string;
    date: string;
}
