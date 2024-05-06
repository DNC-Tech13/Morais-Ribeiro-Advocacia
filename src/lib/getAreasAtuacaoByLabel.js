import { instance } from "./axiosInterceptor";
import { reverseSlug } from "./createSlug";

export const fetchAreasByLabel = async (areaLabel) => {
  const dataRef = process.env.AREAS_ATUACAO_REF || '';
  try {
    const response = await instance.get(dataRef, {
      cache: {
        maxAge: 15 * 60 * 1000, // 15 minutes
      },
    });    
    console.log(areaLabel)

    
    return response.data.areas.filter(area => area.name === reverseSlug(areaLabel))[0];
  } catch (error) {
    console.error('Error fetching areas:', error);
    return null;
  }
};