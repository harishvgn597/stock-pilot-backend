export class CreateSaleOrderDto {
  engineerId: string;
  billNumber: string;
  dateOfSale: string; // ISO date string e.g. "2026-03-04"
  materialCode: string;
  description: string;
  quantity: number;
  spareType?: 'Spare' | 'Additive' | 'Accessory';
  price: number;
}
