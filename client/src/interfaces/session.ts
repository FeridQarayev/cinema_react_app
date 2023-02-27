import type Formats from './formats';
import type Movie from './movie';
import type Hall from './new.hall';

export default interface Session {
  _id: string;
  name: string;
  date: string;
  price: number;
  language: string;
  formats: Formats;
  hall: Hall;
  movie: Movie;
  reserved: Array<{
    col: number;
    row: number;
  }>;
  __v: number;
}
