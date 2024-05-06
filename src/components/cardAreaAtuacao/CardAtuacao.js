import React, { useEffect, useState } from 'react'
import './cardAtuacao.scss'
import { useRouter } from 'next/router';
import { createSlug } from '@/lib/createSlug';

export const CardAtuacao = (props) => {
  const { img, label, } = props;
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const routerLabel = createSlug(label);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  const handleRouter = () => {
    router.push(`/areas-atuacao/${routerLabel}`);
  }

  if (props.loading) return <CardAtuacaoThumbnail />;

  return (
    <div className={`cardWrapper ${loaded ? 'loaded' : ''}`} style={{ backgroundImage: `url(${img})` }} onClick={handleRouter}>
      <img
        src={img}
        alt={label}
        onLoad={handleImageLoaded}
        style={{ visibility: loaded ? 'visible' : 'hidden', height: 0, width: 0 }}
      />
      <h3>{label}</h3>
    </div>
  );
};


export const CardAtuacaoThumbnail = () => {
  return (
    <div className={'cardWrapper thumb'} style={{backgroundColor: '#FFF'}}>
      <div className='tremDeCarregamento'></div>
    </div>
  )
}