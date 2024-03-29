import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Hall from '../interfaces/hall';

let user: { token: string; _id: string } = JSON.parse(String(localStorage.getItem('user')));
user === undefined && user === null && (user = { token: '', _id: '' });

export const hallGetAll = async (): Promise<AxiosResponse<Hall[]>> => await axios.get(`${BASE_URL}/hall`);

export const hallGetById = async (hallId: string): Promise<AxiosResponse<{ message: string; data: Hall }>> =>
  await axios.post(`${BASE_URL}/hall/id`, { hallId });

export const hallCreate = async (hall: { name: string }): Promise<AxiosResponse<{ message: string; data: Hall }>> =>
  await axios.post(
    `${BASE_URL}/hall`,
    { ...hall, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );

export const hallUpdate = async (hall: { name: string; hallId: string }): Promise<AxiosResponse<{ message: string; data: Hall }>> =>
  await axios.put(
    `${BASE_URL}/hall`,
    { ...hall, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );

export const hallDelete = async (hallId: string): Promise<AxiosResponse> =>
  await axios.delete(`${BASE_URL}/hall`, {
    data: { hallId, userId: user._id },
    headers: {
      'x-access-token': user?.token,
    },
  });
