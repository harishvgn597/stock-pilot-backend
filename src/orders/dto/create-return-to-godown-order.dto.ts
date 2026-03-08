export class CreateReturnToGodownOrderDto {
  engineerId: string;
  referenceNumber: string;
  date: string; // ISO date string e.g. "2026-03-08"
  materialCode: string;
  description: string;
  quantity: number;
}
