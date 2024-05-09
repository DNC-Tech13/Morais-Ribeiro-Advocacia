
import PublicacaoComponent from "@/components/publicacaoComponent/publicacaoComponent";

const publi = () => {
  const autor1Info = {
    nome:'Dr. João Pedro Rezende Ribeiro e Moraes de Oliveira',
    foto:'inserir o url da foto',
    linkMaisInfo:'inserir o url do link'
  };
  const autor2Info = {
    nome:'Dr. João Pedro Rezende Ribeiro e Moraes de Oliveira',
    foto:'inserir o url da foto',
    linkMaisInfo:'inserir o url do link'
  };
  
  const autor3Info = {
    nome:'Dr. João Pedro Rezende Ribeiro e Moraes de Oliveira',
    foto:'inserir o url da foto',
    linkMaisInfo:'inserir o url do link'
  };
  
  const publicacao1Info ={
    titulo:'PJ ou CLT: Avaliando Vantagens e Desvantagens',
    resumo:'A decisão entre trabalhar como Pessoa Jurídica (PJ) ou sob a forma da  Consolidação das Leis do <br/>Trabalho (CLT) é crucial e deve ser  cuidadosamente ponderada, levando em consideração diversos <br/>aspectos.',
    continuarLendo:'inserir o link do artigo',
    data:'09 de abril de 2024',
  };

  const publicacao2Info ={
    titulo:'PJ ou CLT: Avaliando Vantagens e Desvantagens',
    resumo:'A decisão entre trabalhar como Pessoa Jurídica (PJ) ou sob a forma da  Consolidação das Leis do <br/>Trabalho (CLT) é crucial e deve ser  cuidadosamente ponderada, levando em consideração diversos <br/>aspectos.',
    continuarLendo:'inserir o link do artigo',
    data:'09 de abril de 2024',
  };

  const publicacao3Info ={
    titulo:'Inserir o titulo do artigo publicado',
    resumo:'Inserir o resumo dos artigos utilizando a tag br para quebrar linhas',
    continuarLendo:'inserir o link do artigo',
    data:'informar a data do artigo',
  };

  return (
    <>
        <main>
          <div>
            <h1>publicacao</h1>
            <PublicacaoComponent autorInfo={autor1Info} publicacaoInfo={publicacao1Info} />
            <PublicacaoComponent autorInfo={autor2Info} publicacaoInfo={publicacao2Info} />
          </div>
        </main>
    </>
  );
};
