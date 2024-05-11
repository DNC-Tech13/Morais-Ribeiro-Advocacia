import React, { useEffect, useState } from 'react';
import Banner from "@/components/banner/banner";
import Layout from "@/components/layout/DefaultLayout";
import { getScreenSize } from "@/lib/getScreensize";
import ButtonCustomForm from "@/components/button/button";
import { CardAtuacao } from '@/components/cardAreaAtuacao/CardAtuacao';
import { fetchAreas } from '@/lib/getAerasAtuacao';

import './atuacaopage.scss'

export default function AreasAtuacao() {
  const [screenSize, setScreenSize] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 
  const [data, setData] = useState(null); 

  useEffect(() => {
    const { width } = getScreenSize();
    setScreenSize(width);
    window.addEventListener("resize", () => {
      const { width } = getScreenSize();
      setScreenSize(width);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const areas = await fetchAreas();
        setData(areas);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.error('Error fetching areas:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main>
        <Banner
          bannerImg={
            screenSize >= 768
              ? "/images/banners/atuacao-desktop.svg"
              : "/images/banners/atuacao-mobile.svg"
          }
        >
          <div className={"banner_atuacao-content-wrapper"}>
            <span>Áreas de atuação</span>
            <h1>Atuação 360º</h1>
            <h2>full service</h2>
          </div>
        </Banner>
        <section className={"atuacao-sect2"}>
          <div className={"atuacao-sect2_container"}>
            <h3>Atendemos toda e qualquer demanda de natureza jurídica, nos  destacando pela maneira objetiva, correta , moderna e eficaz que adotamos  para assessorar nossos clientes a solucionar problemas.</h3>

            <ButtonCustomForm variant="dark" position={screenSize<768?'center':'right'}>
              Entre em contato
            </ButtonCustomForm>
            <div className={"atuacao-sect2_grid"} >
              {data && data.map((area, index) => (
                <CardAtuacao
                  key={index}
                  id={index}
                  img={area.thumb}
                  label={area.name}
                  loading={isLoading}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
