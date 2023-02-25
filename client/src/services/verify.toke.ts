import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const verifyToken = async (token: string): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/verify`, { token });
