import { instance } from "./axiosInterceptor";
import { reverseSlug } from "./createSlug";
import dotenv from 'dotenv';

dotenv.config();

export const fetchAreasByLabel = async (areaLabel) => {
  const dataRef = process.env.AREAS_ATUACAO_REF || '/data/areas-de-atuacao.json';
  try {
    const response = await instance.get(dataRef, {
      cache: {
        maxAge: 15 * 60 * 1000, // 15 minutes
      },
    });    

    
    return response.data.areas.filter(area => area.name === reverseSlug(areaLabel))[0];
  } catch (error) {
    console.error('Error fetching areas:', error);
    return null;
  }
};