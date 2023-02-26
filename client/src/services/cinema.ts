import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Cinema from '../interfaces/new.cinema';

export const cinemaGetAll = async (): Promise<AxiosResponse> => await axios.get(`${BASE_URL}/cinema`);

export const cinemaGetById = async (cinemaId: string): Promise<AxiosResponse<{ message: string; data: Cinema }>> =>
  await axios.post(`${BASE_URL}/cinema/id`, { cinemaId });

export const cinemaCreate = async (cinema: { name: string }): Promise<AxiosResponse<{ message: string; data: Cinema }>> =>
  await axios.post(`${BASE_URL}/cinema`, cinema);

export const cinemaUpdate = async (cinema: Cinema): Promise<AxiosResponse<{ message: string; data: Cinema }>> =>
  await axios.put(`${BASE_URL}/cinema/id`, cinema);

export const cinemaDelete = async (id: string): Promise<AxiosResponse> => await axios.delete(`${BASE_URL}/cinema`, { data: { cinemaId: id } });
