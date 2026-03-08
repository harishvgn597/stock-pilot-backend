export declare class CreateSaleOrderDto {
    engineerId: string;
    billNumber: string;
    dateOfSale: string;
    ticketNumber?: string;
    customerName?: string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: 'Spare' | 'Additive' | 'Accessory';
    price: number;
}
