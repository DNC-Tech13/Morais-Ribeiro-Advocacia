import { instance } from "./axiosInterceptor";


export const fetchAreas = async () => {
  const dataRef = process.env.AREAS_ATUACAO_REF || '/data/areas-de-atuacao.json';
  try {
    const response = await instance.get(dataRef, {
      cache: {
        maxAge: 15 * 60 * 1000, // 15 minutes
      },
    });
    return response.data.areas;
  } catch (error) {
    console.error('Error fetching areas:', error);
    return null;
  }
};


