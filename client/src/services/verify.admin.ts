import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const verifyToken = async (token: string, userId: string): Promise<AxiosResponse> =>
  await axios.post(`${BASE_URL}/verifyadmin`, { token, userId });
