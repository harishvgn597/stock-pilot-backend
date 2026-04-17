export class CreateGodownStockDto {
  materialCode: string;
  goodQuantity: number;
  defectiveQuantity?: number;  // defaults to 0
  unitPrice?: number;          // optional price per unit
  notes?: string;
}
