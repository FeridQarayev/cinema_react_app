import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const loginUser = async (user: { email: string; password: string }): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/login`, user);
