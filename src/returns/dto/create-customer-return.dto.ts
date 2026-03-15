export class CreateCustomerReturnDto {
  returnDate: string;   // ISO date string e.g. "2026-03-15"
  materialCode: string;
  materialName: string;
  quantity: number;
  pricePerUnit: number;
  remarks?: string;
}
