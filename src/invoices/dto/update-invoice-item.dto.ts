export class UpdateInvoiceItemDto {
  quantity?: number;
  unitPrice?: number;
  totalAmount?: number;
  cgst?: number;
  sgst?: number;
  spareType?: 'Spare' | 'Additive' | 'Accessory';
}
