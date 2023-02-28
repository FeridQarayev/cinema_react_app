import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type ISession from '../interfaces/session';

let user: { token: string; _id: string } = JSON.parse(String(localStorage.getItem('user')));
user === undefined && user === null && (user = { token: '', _id: '' });

export const sessionGetAll = async (): Promise<AxiosResponse<ISession[]>> => await axios.get(`${BASE_URL}/session`);

export const sessionGetById = async (sessionId: string): Promise<AxiosResponse<{ message: string; data: ISession }>> =>
  await axios.post(`${BASE_URL}/session/id`, { sessionId });

export const sessionCreate = async (session: { language: string }): Promise<AxiosResponse<{ message: string; data: ISession }>> =>
  await axios.post(
    `${BASE_URL}/session`,
    { ...session, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );

export const sessionUpdate = async (session: { sessionId: string }): Promise<AxiosResponse<{ message: string; data: ISession }>> =>
  await axios.put(
    `${BASE_URL}/session`,
    { ...session, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );

export const sessionDelete = async (sessionId: string): Promise<AxiosResponse> =>
  await axios.delete(`${BASE_URL}/session`, {
    data: { sessionId, userId: user._id },
    headers: {
      'x-access-token': user?.token,
    },
  });
