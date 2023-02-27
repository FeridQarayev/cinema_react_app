import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Movie from '../interfaces/movie';

let user: { token: string; _id: string } = JSON.parse(String(localStorage.getItem('user')));
user === undefined && user === null && (user = { token: '', _id: '' });

export const movieGetAll = async (): Promise<AxiosResponse<Movie[]>> => await axios.get(`${BASE_URL}/movie`);

export const movieGetById = async (movieId: string): Promise<AxiosResponse<{ message: string; data: Movie }>> =>
  await axios.post(`${BASE_URL}/movie/id`, { movieId });

export const movieCreate = async (movie: { name: string }): Promise<AxiosResponse<{ message: string; data: Movie }>> =>
  await axios.post(
    `${BASE_URL}/movie`,
    { ...movie, userId: user._id },
    { headers: { 'Content-Type': 'multipart/form-data', 'x-access-token': user?.token } }
  );
// await axios({
//   method: 'post',
//   url: `${BASE_URL}/movie`,
//   data: movie,
//   headers: { 'Content-Type': 'multipart/form-data'},
// });

export const movieUpdate = async (movie: { name: string; movieId: string }): Promise<AxiosResponse<{ message: string; data: Movie }>> => {
  console.log(movie);
  return await axios.put(
    `${BASE_URL}/movie`,
    { ...movie, userId: user._id },
    {
      headers: {
        'x-access-token': user?.token,
      },
    }
  );
};

export const movieDelete = async (movieId: string): Promise<AxiosResponse> =>
  await axios.delete(`${BASE_URL}/movie`, {
    data: { movieId, userId: user._id },
    headers: {
      'x-access-token': user?.token,
    },
  });
