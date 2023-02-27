import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

let user: { token: string; _id: string } = JSON.parse(String(localStorage.getItem('user')));
user === undefined && user === null && (user = { token: '', _id: '' });

export const verifyAdmin = async (userId: string): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/verifyadmin`, { userId });

export const verifyAdminWithToken = async (): Promise<AxiosResponse> =>
  await axios.post(
    `${BASE_URL}/admintoken`,
    { userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );
