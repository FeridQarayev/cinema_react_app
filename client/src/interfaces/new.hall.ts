import type Cinema from './new.cinema';

export default interface Hall {
  _id: string;
  name: string;
  column: number;
  row: number;
  __v: number;
  cinema: Cinema;
}
