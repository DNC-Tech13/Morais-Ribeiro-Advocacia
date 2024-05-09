import React from 'react'



const PublicacaoCard = ({ titulo, resumo, continuarLendo, data }) => {
    return (
      <div className='public'>
        <div className='public__section1'>
          <h1>{titulo}</h1>
          <p>{resumo}</p>
        </div>
        <div className='public__section2'>
          <div>
            <a href={continuarLendo}>continuar lendo</a>
            <span>{data}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default PublicacaoCard;