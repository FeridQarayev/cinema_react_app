import type Formats from './formats';
import type Languages from './languages';

export default interface Movie {
  _id: string;
  name: string;
  actor: string;
  director: string;
  duration: string;
  ageLimit: number;
  sessionTime: Date;
  sessionTimeOut: Date;
  formats: Formats;
  languages: Languages;
  genre: string;
  synopsis: string;
  rating: number;
  image: string;
  coverImage: string;
  __v: number;
}
