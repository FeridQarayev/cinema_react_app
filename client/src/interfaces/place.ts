export default interface IPlace {
  column: number;
  row: number;
  price: number;
  reserved: Array<{ col: number; row: number; _id: string }>;
}
