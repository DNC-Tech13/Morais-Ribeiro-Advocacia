import { instance } from "./axiosInterceptor";

import dotenv from 'dotenv';

dotenv.config();

export const fetchEquipes = async () => {
  const dataRef = process.env.EQUIPES_REF || '/data/equipe.json';
  try {
    const response = await instance.get(dataRef, {
      cache: {
        maxAge: 15 * 60 * 1000, // 15 minutes
      },
    });
    return response.data.equipe;
  } catch (error) {
    console.error('Error fetching areas:', error);
    return null;
  }
};