export declare class CreateWarrantyAmcOrderDto {
    engineerId: string;
    ticketNumber: string;
    customerName: string;
    date: string;
    materialCode: string;
    description: string;
    quantity: number;
    spareType?: 'Spare' | 'Additive' | 'Accessory';
}
