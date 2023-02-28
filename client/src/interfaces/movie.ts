import type IFormats from './formats';
import type ILanguages from './languages';

export default interface IMovie {
  _id: string;
  name: string;
  actor: string;
  director: string;
  duration: string;
  ageLimit: number;
  sessionTime: Date;
  sessionTimeOut: Date;
  formats: IFormats;
  languages: ILanguages;
  genre: string;
  synopsis: string;
  rating: number;
  image: string;
  coverImage: string;
  __v: number;
}
