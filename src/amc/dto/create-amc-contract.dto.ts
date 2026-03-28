export class CreateAmcContractDto {
  icrNumber: string;
  warrantyType: 'AMC' | 'Warranty' | 'CAMC';
  price: number;
  discount?: number;       // optional — percentage or flat amount
  engineerName: string;
  date: string;            // ISO date string e.g. "2026-03-28"
}
