import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const createUser = async (): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/register`);
