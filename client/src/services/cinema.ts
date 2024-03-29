import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type ICinema from '../interfaces/cinema';

let user: { token: string; _id: string } = JSON.parse(String(localStorage.getItem('user')));
user === undefined && user === null && (user = { token: '', _id: '' });

export const cinemaGetAll = async (): Promise<AxiosResponse> => await axios.get(`${BASE_URL}/cinema`);

export const cinemaGetById = async (cinemaId: string): Promise<AxiosResponse<{ message: string; data: ICinema }>> =>
  await axios.post(`${BASE_URL}/cinema/id`, { cinemaId });

export const cinemaCreate = async (cinema: { name: string }): Promise<AxiosResponse<{ message: string; data: ICinema }>> =>
  await axios.post(
    `${BASE_URL}/cinema`,
    { ...cinema, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );

export const cinemaUpdate = async (cinema: { name: string; cinemaId: string }): Promise<AxiosResponse<{ message: string; data: ICinema }>> =>
  await axios.put(
    `${BASE_URL}/cinema`,
    { ...cinema, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );

export const cinemaDelete = async (id: string): Promise<AxiosResponse> =>
  await axios.delete(`${BASE_URL}/cinema`, {
    data: { cinemaId: id, userId: user._id },
    headers: {
      'x-access-token': user?.token,
    },
  });
