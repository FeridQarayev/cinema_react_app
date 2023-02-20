import type Cinema from './cinema';
import type Formats from './formats';
import type Languages from './languages';

export default interface MovieList {
  id: number;
  name: string;
  sessions: string;
  sessionsDay: string;
  cinema: Cinema;
  hall: string;
  formats: Formats;
  languages: Languages;
  price: number;
  places: number;
}
