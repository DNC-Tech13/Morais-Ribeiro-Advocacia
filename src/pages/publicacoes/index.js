import React, { useState } from 'react';
import PublicacaoComponent from "@/components/publicacaoComponent/publicacaoComponent";
import Layout from "@/components/layout/DefaultLayout";
import "./index.scss"

const Publi = () => {
  const [filtroArtigo, setFiltroArtigo] = useState('');
  const [filtroAutor, setFiltroAutor] = useState('');

  const autor1Info = {
    nome:'Dr. João Pedro Rezende Ribeiro e Moraes de Oliveira',
    foto:'fotocontainerjoao.svg',
    linkMaisInfo:'https://www.linkedin.com/in/joaopedrorrmoliveira/'
  };
  const autor2Info = {
    nome:'Dra. Nikolly Morais Silva',
    foto:'fotocontainernikolly.svg',
    linkMaisInfo:'https://www.linkedin.com/in/nikollymorais/'
  };
  
  const publicacao1Info ={
    titulo:'PJ ou CLT: Avaliando Vantagens e Desvantagens',
    autor: 'Dr. João Pedro Rezende Ribeiro e Moraes de Oliveira',
    resumo:'A decisão entre trabalhar como Pessoa Jurídica (PJ) ou sob a forma da  Consolidação das Leis do Trabalho (CLT) é crucial e deve ser  cuidadosamente ponderada, levando em consideração diversos aspectos.',
    continuarLendo:'https://www.linkedin.com/pulse/pj-ou-clt-avaliando-vantagens-e-desvantagens-jo%25C3%25A3o-pedro-x2aef',
    data:'09 de abril de 2024',
  };

  const publicacao2Info ={
    titulo:'Exposição de Dados na Dark Web e suas Consequências Jurídicas: Um Alerta para a Segurança Digital',
    autor: 'Dra. Nikolly Morais Silva',
    resumo:'A internet trouxe consigo inúmeras oportunidades, mas também  desafios significativos, especialmente no que diz respeito à segurança  dos dados. Uma das áreas mais preocupantes é a chamada "Dark Web", um  segmento oculto da internet onde atividades ilícitas muitas vezes  florescem, incluindo a venda e troca de informações pessoais e  sensíveis.',
    continuarLendo:'https://www.linkedin.com/pulse/exposi%25C3%25A7%25C3%25A3o-de-dados-na-dark-web-e-suas-consequ%25C3%25AAncias-jur%25C3%25ADdicas-silva-fclof ',
    data:'01 de abril de 2024',
  };

  // Lista de artigos
  const artigos = [publicacao1Info, publicacao2Info];

  // Atualiza o estado do filtro de artigo
  const handleFiltroArtigoChange = (e) => {
    const value = e.target.value.toLowerCase(); // Converte para minúsculas
    console.log('Valor do filtro de artigo:', value);
    setFiltroArtigo(value); // Atualiza o estado
  };

  // Atualiza o estado do filtro de autor
  const handleFiltroAutorChange = (e) => {
    const value = e.target.value.toLowerCase(); // Converte para minúsculas
    console.log('Valor do filtro de autor:', value);
    setFiltroAutor(value); // Atualiza o estado
  };

  // Filtra os artigos com base nos filtros de artigo e autor
  const filteredArtigos = artigos.filter((artigo) => {
    const artigoAutor = artigo.autor.toLowerCase(); // Converte o nome do autor para minúsculas
    return (
      artigo.titulo.toLowerCase().includes(filtroArtigo) &&
      artigoAutor.includes(filtroAutor)
    );
  });

  return (
    <>
      <Layout>
        <main className="view">
          <div className="view__Banner">
            <h1>Publicações</h1>
          </div>
          <div className="view__search">
            <div className="view__Info">
                <h1><b>Artigos</b></h1>
                <button>Entre em contato</button>            
            </div>
            <div className="view__filter">
              <input 
                type="text"
                placeholder="Pesquisar Artigo"
                className="view__a"
                value={filtroArtigo}
                onChange={handleFiltroArtigoChange} // Usa a função de atualização do filtro de artigo
              />
              <input 
                type="text"
                placeholder="Filtrar por Autor"
                className="view__b"
                value={filtroAutor}
                onChange={handleFiltroAutorChange} // Usa a função de atualização do filtro de autor
              />
            </div>
          </div>
          <div className="view__container">
            {/* Renderiza o artigo filtrado */}
            {filteredArtigos.map((artigo) => (
              <PublicacaoComponent
                key={artigo.titulo}
                className="publicacao__component"
                autorInfo={artigo.autor.toLowerCase().includes("joão pedro") ? autor1Info : autor2Info}
                publicacaoInfo={artigo}
              />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Publi;
