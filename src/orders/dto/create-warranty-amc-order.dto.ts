export class CreateWarrantyAmcOrderDto {
  engineerId: string;
  ticketNumber: string;
  customerName: string;
  date: string; // ISO date string e.g. "2026-03-08"
  materialCode: string;
  description: string;
  quantity: number;
  spareType?: 'Spare' | 'Additive' | 'Accessory';
}
