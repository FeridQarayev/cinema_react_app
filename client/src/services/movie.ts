import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Movie from '../interfaces/movie';

export const movieGetAll = async (): Promise<AxiosResponse<Movie[]>> => await axios.get(`${BASE_URL}/movie`);

export const movieGetById = async (movieId: string): Promise<AxiosResponse<{ message: string; data: Movie }>> =>
  await axios.post(`${BASE_URL}/movie/id`, { movieId });

export const movieCreate = async (movie: { name: string }): Promise<AxiosResponse<{ message: string; data: Movie }>> =>
  await axios({ method: 'post', url: `${BASE_URL}/movie`, data: movie, headers: { 'Content-Type': 'multipart/form-data' } });

export const movieUpdate = async (movie: { name: string; movieId: string }): Promise<AxiosResponse<{ message: string; data: Movie }>> =>
  await axios.put(`${BASE_URL}/movie`, movie);

export const movieDelete = async (movieId: string): Promise<AxiosResponse> => await axios.delete(`${BASE_URL}/movie`, { data: { movieId } });
