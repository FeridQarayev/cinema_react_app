export default interface ISales {
  userId: string;
  sessionId: string;
  date: string;
  movieDate: string;
  movie: string;
  language: string;
  price: number;
  places: Array<{ coll: number; roww: number;}>;
}
