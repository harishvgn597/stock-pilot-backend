export declare class UpdateGodownStockDto {
    description?: string;
    hsn?: string;
    uom?: string;
    goodQuantity?: number;
    defectiveQuantity?: number;
    unitPrice?: number;
    totalAmount?: number;
    cgst?: number;
    sgst?: number;
    spareType?: 'Spare' | 'Additive' | 'Accessory';
    status?: 'Good' | 'Defective';
    notes?: string;
}
