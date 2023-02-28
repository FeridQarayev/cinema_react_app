import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type IUser from '../interfaces/user';

export const createUser = async (user: IUser): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/register`, user);
