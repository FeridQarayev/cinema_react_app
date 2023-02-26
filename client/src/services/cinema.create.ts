import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Cinema from '../interfaces/new.cinema';

export const cinemaCreate = async (cinema: { name: string }): Promise<AxiosResponse<{ message: string; data: Cinema }>> =>
  await axios.post(`${BASE_URL}/cinema`, cinema);
