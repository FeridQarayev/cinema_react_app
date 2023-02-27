import axios, { type AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/consts';
import type Session from '../interfaces/session';

export const sessionGetAll = async (): Promise<AxiosResponse<Session[]>> => await axios.get(`${BASE_URL}/session`);

export const sessionGetById = async (sessionId: string): Promise<AxiosResponse<{ message: string; data: Session }>> =>
  await axios.post(`${BASE_URL}/session/id`, { sessionId });

export const sessionCreate = async (session: { language: string }): Promise<AxiosResponse<{ message: string; data: Session }>> =>
  await axios.post(`${BASE_URL}/session`, session);

export const sessionUpdate = async (session: { sessionId: string }): Promise<AxiosResponse<{ message: string; data: Session }>> =>
  await axios.put(`${BASE_URL}/session`, session);

export const sessionDelete = async (sessionId: string): Promise<AxiosResponse> => await axios.delete(`${BASE_URL}/session`, { data: { sessionId } });
