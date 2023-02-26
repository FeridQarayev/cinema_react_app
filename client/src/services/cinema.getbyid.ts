import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Cinema from '../interfaces/new.cinema';

export const cinemaGetById = async (cinemaId: string): Promise<AxiosResponse<{ message: string; data: Cinema }>> =>
  await axios.post(`${BASE_URL}/cinema/id`, { cinemaId });
