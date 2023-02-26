import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const cinemaDelete = async (id: string): Promise<AxiosResponse> => await axios.delete(`${BASE_URL}/cinema`, { data: { cinemaId: id } });
