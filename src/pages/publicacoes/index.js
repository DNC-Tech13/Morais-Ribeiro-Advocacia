import React, { useState } from 'react';
import PublicacaoComponent from "@/components/publicacaoComponent/publicacaoComponent";
import Layout from "@/components/layout/DefaultLayout";
import "./index.scss"

const Publi = () => {
  const [autorFiltro, setAutorFiltro] = useState('');

  const autor1Info = {
    nome:'Dr. João Pedro\nRezende Ribeiro\ne Moraes de Oliveira',
    foto:'fotocontainerjoao.svg',
    linkMaisInfo:'inserir o url do link'
  };
  const autor2Info = {
    nome:'Dra. Nikolly Morais Silva',
    foto:'fotocontainernikolly.svg',
    linkMaisInfo:'inserir o url do link'
  };
  
  const publicacao1Info ={
    titulo:'PJ ou CLT: Avaliando Vantagens e Desvantagens',
    resumo:'A decisão entre trabalhar como Pessoa Jurídica (PJ) ou sob a forma da  Consolidação das Leis do Trabalho (CLT) é crucial e deve ser  cuidadosamente ponderada, levando em consideração diversos aspectos.',
    continuarLendo:'inserir o link do artigo',
    data:'09 de abril de 2024',
  };

  const publicacao2Info ={
    titulo:'Exposição de Dados na Dark Web e suas Consequências Jurídicas: Um Alerta para a Segurança Digital',
    resumo:'A internet trouxe consigo inúmeras oportunidades, mas também  desafios significativos, especialmente no que diz respeito à segurança  dos dados. Uma das áreas mais preocupantes é a chamada "Dark Web", um  segmento oculto da internet onde atividades ilícitas muitas vezes  florescem, incluindo a venda e troca de informações pessoais e  sensíveis.',
    continuarLendo:'inserir o link do artigo',
    data:'01 de abril de 2024',
  };

  // Lista de autores
  const autores = [autor1Info, autor2Info];

  // Filtra os autores com base no estado autorFiltro
  const filteredAutores = autores.filter((autor) =>
    autor.nome.toLowerCase().includes(autorFiltro.toLowerCase())
  );

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
            <input type="text" placeholder="Pesquisar Artigo" className="view__a"/>
            <input 
              type="text"
              placeholder="Filtrar por Autor"
              className="view__b"
              value={autorFiltro}
              onChange={(e) => setAutorFiltro(e.target.value)}
            />
          </div>
        </div>
        <div className="view__container">
          {/* Mostra uma mensagem para caso não localize nenhum autor*/}
          {autorFiltro && filteredAutores.length === 0 && (
            <p>Nenhum autor encontrado com o filtro "{autorFiltro}"</p>
          )}

          {/* Renderiza o autor filtrado */}
          {filteredAutores.map((autor) => (
            <PublicacaoComponent
              key={autor.nome}
              className="publicacao__component"
              autorInfo={autor}
              publicacaoInfo={publicacao1Info}
            />
          ))}
        </div>
      </main>
    </Layout>
    </>
  );
};

export default Publi;
