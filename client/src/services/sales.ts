import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type ISales from '../interfaces/sales';

let user: { token: string; _id: string } = JSON.parse(String(localStorage.getItem('user')));
user === undefined && user === null && (user = { token: '', _id: '' });

export const salesGetAll = async (): Promise<AxiosResponse<ISales[]>> => await axios.get(`${BASE_URL}/sales`);

export const salesGetById = async (salesId: string): Promise<AxiosResponse<{ message: string; data: ISales }>> =>
  await axios.post(`${BASE_URL}/sales/id`, { salesId });

export const salesCreate = async (sales: {
  userId: string;
  sessionId: string;
  date: string;
  movieDate: string;
  movie: string;
  language: string;
  price: number;
  places: Array<{ coll: number; roww: number }>;
}): Promise<AxiosResponse<{ message: string; data: ISales }>> =>
  await axios.post(
    `${BASE_URL}/sales`,
    { ...sales, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );
