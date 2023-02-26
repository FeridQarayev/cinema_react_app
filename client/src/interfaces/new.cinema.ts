import type Hall from './new.hall';

export default interface Cinema {
  _id: string;
  name: string;
  halls: Hall[];
  __v: number;
}
