import type IHall from './hall';

export default interface ICinema {
  _id: string;
  name: string;
  halls: IHall[];
  __v: number;
}
