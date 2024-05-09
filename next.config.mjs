/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {  
  pageExtensions: ['jsx', 'js'],
  env: {
    AREAS_ATUACAO_REF:  process.env.AREAS_ATUACAO_REF,
    EQUIPES_REF: process.env.EQUIPES_REF   
  }
};

export default nextConfig;
