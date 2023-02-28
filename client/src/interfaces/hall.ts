import type ICinema from './cinema';

export default interface IHall {
  _id: string;
  name: string;
  column: number;
  row: number;
  __v: number;
  cinema: ICinema;
}
