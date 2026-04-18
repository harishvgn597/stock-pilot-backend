export declare class CreateGodownStockDto {
    materialCode: string;
    description?: string;
    hsn?: string;
    uom?: string;
    goodQuantity: number;
    defectiveQuantity?: number;
    unitPrice?: number;
    totalAmount?: number;
    cgst?: number;
    sgst?: number;
    spareType?: 'Spare' | 'Additive' | 'Accessory';
    notes?: string;
}
