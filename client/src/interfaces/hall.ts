export default interface Hall {
  column: number;
  row: number;
  price: number;
  reserved: Array<{
    reservedCol: number;
    reservedRow: number;
  }>;
}
