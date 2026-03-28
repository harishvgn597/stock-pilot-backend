export class CreateAmcContractDto {
  icrNumber: string;
  warrantyType: string;    // free text e.g. "AMC 1 Year", "Warranty 6 Months", "CAMC 2 Year"
  price: number;
  discount?: number;       // optional — flat amount deducted from price
  engineerName: string;
  date: string;            // ISO date string e.g. "2026-03-28"
}
