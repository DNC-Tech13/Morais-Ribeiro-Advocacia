import React from 'react'


const PublicacaoComponent = ({ autorInfo, publicacaoInfo }) => {
    const { nome, foto, linkMaisInfo } = autorInfo;
    const { titulo, resumo, continuarLendo, data } = publicacaoInfo;
  
    return (
      <div className="publicacao-component">
        {/* Integrando AutorCard diretamente */}
        <div>
          <img src={foto} alt={nome}/>
          <h3>{nome}</h3>
          <a href={linkMaisInfo}>Mais informações</a>
        </div>
  
        {/* Integrando PublicacaoCard diretamente */}
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
      </div>
    );
  };
  
  export default PublicacaoComponent;

