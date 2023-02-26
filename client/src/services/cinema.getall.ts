import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';

export const cinemaGetAll = async (): Promise<AxiosResponse> => await axios.get(`${BASE_URL}/cinema`);
