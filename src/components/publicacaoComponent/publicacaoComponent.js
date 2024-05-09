import React from 'react'
import "./index.scss"


const PublicacaoComponent = ({ autorInfo, publicacaoInfo }) => {
    const { nome, foto, linkMaisInfo } = autorInfo;
    const { titulo, resumo, continuarLendo, data } = publicacaoInfo;
  
    return (
      <div className="publicacao">
        {/* Integrando AutorCard diretamente */}
        <div className='publicacao__autor'>
          <div>
            <img src={foto} alt={nome}/>
          </div>
          <div>
            <h3>{nome}</h3>
          </div>
          <div className='publicacao__link'>
            <a href={linkMaisInfo}>Ver mais sobre autor </a>
            <img src='setaAutor.svg'/>
          </div>
        </div>
  
        {/* Integrando PublicacaoCard diretamente */}
        <div className='publicacao__post'>
          <div className='public__section1'>
            <h1>{titulo}</h1>
            <p>{resumo}</p>
          </div>
          <div className='public__section2'>
            <div className='public__section21'>
              <a href={continuarLendo}>continuar lendo</a>
              <span>{data}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PublicacaoComponent;

