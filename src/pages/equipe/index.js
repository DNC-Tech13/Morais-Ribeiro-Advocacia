import Banner from '@/components/banner/banner'
import Layout from '@/components/layout/DefaultLayout'
import { getScreenSize } from '@/lib/getScreensize';
import React, { useEffect, useState } from 'react'
import CardEquipe from '@/components/cardEquipe/cardEquipe';
import { fetchEquipes } from '@/lib/getEquipes';

import './equipe.scss'

const Equipe = () => {
  const [screenSize, setScreenSize] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const { width } = getScreenSize();
    setScreenSize(width);
    addEventListener("resize", () => {
      const { width } = getScreenSize();
      setScreenSize(width);
    });
    return () => {
      removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const areas = await fetchEquipes();
        setData(areas);
      } catch (error) {
        console.error('Error fetching areas:', error);
      }
    };
    fetchData();
  }, []);


  
  return (    
    <Layout>
      <Banner type={screenSize >= 1100&&'full'} position={'bottom'} bannerImg={screenSize >= 768
                  ? "/images/banners/equipe-desktop.svg"
                  : "/images/banners/equipe-mobile.svg"
              }>
                <div className="banner_equipe-content-wrapper">
                <span>Equipe</span>
                <h1>Acreditamos no poder do trabalho em equipe.</h1>
                <h2>Sabemos que nada se realiza sem colaboração.</h2>
              </div>
      </Banner>
      <section className="equipe_sect" >
        <div className='equipe_container'>
          {data && data.map((equipe, index) => {
            return <CardEquipe key={index} {...equipe} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export default Equipe