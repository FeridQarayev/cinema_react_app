import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type User from '../interfaces/user';

export const createUser = async (user: User): Promise<AxiosResponse> => await axios.post(`${BASE_URL}/register`, user);
