/** @type {import('next').NextConfig} */
import dotenv from 'dotenv';

dotenv.config();

const nextConfig = {  
  pageExtensions: ['jsx', 'js'],
  env: {
    EQUIPES_REF: process.env.EQUIPES_REF   
  }
};

export default nextConfig;
