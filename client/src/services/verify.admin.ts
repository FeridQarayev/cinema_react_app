import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const verifyAdmin = async (userId: string): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/verifyadmin`, { userId });
