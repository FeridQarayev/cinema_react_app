import type IFormats from './formats';
import type IHall from './hall';
import type IMovie from './movie';

export default interface ISession {
  _id: string;
  date: string;
  price: number;
  language: string;
  formats: IFormats;
  hall: IHall;
  movie: IMovie;
  reserved: Array<{
    col: number;
    row: number;
  }>;
  __v: number;
}
