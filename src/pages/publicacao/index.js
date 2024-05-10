
import PublicacaoComponent from "@/components/publicacaoComponent/publicacaoComponent";
import "./index.scss"

const publi = () => {
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

  return (
    <>
        <main className="view">
        <h1>publicacao</h1>
          <div className="view__container">
            <PublicacaoComponent className="publicacao__component" autorInfo={autor1Info} publicacaoInfo={publicacao1Info} />
            <PublicacaoComponent className="publicacao__component" autorInfo={autor2Info} publicacaoInfo={publicacao2Info} />
          </div>
        </main>
    </>
  );
};

export default publi;
