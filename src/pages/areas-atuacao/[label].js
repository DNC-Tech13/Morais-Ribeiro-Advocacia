import Banner from '@/components/banner/banner';
import Layout from '@/components/layout/DefaultLayout';
import { fetchAreasByLabel } from '@/lib/getAreasAtuacaoByLabel';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import './atuacaopage.scss'
import ButtonCustomLink from '@/components/button/button';

const AreaAtuacaoVisualizar = () => {
  const {label} = useRouter().query;
  const [data , setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if(label){
      try {
        const area = await fetchAreasByLabel(label);
        setData(area);
      } catch (error) {
        console.error('Error fetching areas:', error);
      }}
    };

    fetchData();
  }, [label])

  if(data === null) return (<Layout><div>Carregando...</div></Layout>)

  return (
    <Layout>
      <main>
        <Banner bannerImg={data.banner} >
        <div className={"banner_atuacao-content-wrapper"}>
            <span>Áreas de atuação</span>
            <h1>{data.name}</h1>
          </div>
        </Banner>
        <section className='visualizarArea-sect2'>         
          <div className='visualizarArea-sect2-container'>
            {data.descricao?.map((desc, index) => (
              <div className='visualizarArea-sect2-item' key={index}>
                <h2>{desc.titulo}</h2>
                {Array.isArray(desc.conteudo) ? (<ul>
                  {desc.conteudo.map((item, index) => ( <li key={index}>{item}</li>))}
                </ul>): (
                  <p>{desc.conteudo}</p>
                )}                             
              </div>
            ))}

          <ButtonCustomLink variant={'dark'} position={'right'}>
                Entre em contato
              </ButtonCustomLink>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default AreaAtuacaoVisualizar