import Banner from "@/components/banner/banner";
import Header from "@/components/header/header";
import Layout from "@/components/layout/DefaultLayout";
import "./missaopage.scss";
import { useEffect, useState } from "react";
import { getScreenSize } from "@/lib/getScreensize";
import ItemLista from "@/components/itemList-missao-visao-valores";



export default function MissaoVisaoValores() {
  const [screenSize, setScreenSize] = useState(null);
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

  if (screenSize !== null && screenSize < 1100) {
    return (
      <>
        <Layout>
          <main>
            <Banner
              bannerImg={
                screenSize >= 768
                  ? "/images/banners/missao-desktop.svg"
                  : "/images/banners/missao-mobile.svg"
              }
            >
              <div className="banner_missao-content-wrapper">
                <span>Somos a</span>
                <h1>Morais & Ribeiro</h1>
                <h2>Advocacia e Consultoria Juridica</h2>
              </div>
            </Banner>
            <section className="quem_somos-sect" id="QuemSomos">
            <div className="quem_somos-container">
              <h2>Quem somos</h2>
              <p>
                Somos um escritório de advocacia composto por três colegas de
                faculdade que cultivaram uma relação sólida desde os bancos
                acadêmicos, nossa sociedade nasceu da visão compartilhada de
                oferecer serviços jurídicos de excelência, moldados pela
                experiência adquirida ao longo de nossos anos de estudo e
                prática. Profissionais altamente qualificados e especializados
                em diversas áreas do direito, o Dr. Gustavo Santos Ribeiro
                possui vasta experiência em responsabilidade civil, direito do
                consumidor e isenção de imposto de renda em casos de doença
                grave; O Dr. João Pedro Ribeiro destaca-se na esfera
                trabalhista, com expertise em compliance, danos morais e LGPD; e
                a Dra. Nikolly Karoline Morais e Silva é especializada em
                Advocacia Cível e Direito Tributário, com ênfase em negociação,
                contratos e resolução de conflitos. Nosso compromisso é oferecer
                assistência jurídica de alta qualidade, eficiente e adaptada às
                necessidades únicas de cada cliente.{" "}
              </p>
            </div>
          </section>
          <section className="missao-sect" id="Missao">
            <div className="missao-container" id="Visao">
              {items.map((item, index) => (
                <ItemLista
                  key={index}
                  label={item.label}
                  index={index}
                  {...(item.lista && { lista: item.lista })}
                >
                  {item.content}
                </ItemLista>
              ))}
            </div>
          </section>
          </main>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout>
        <main>
          <Banner
            bannerImg={"/images/banners/missao-desktop.svg"}
            style={{ backgroundSize: "contain" }}
            type={"full"}
          >
            <div className="banner_missao-content-wrapper">
              <span>Somos a</span>
              <h1>Morais & Ribeiro</h1>
              <h2>Advocacia e Consultoria Juridica</h2>
            </div>
          </Banner>
          <section className="quem_somos-sect">
            <div className="quem_somos-container">
              <h2>Quem somos</h2>
              <p>
                Somos um escritório de advocacia composto por três colegas de
                faculdade que cultivaram uma relação sólida desde os bancos
                acadêmicos, nossa sociedade nasceu da visão compartilhada de
                oferecer serviços jurídicos de excelência, moldados pela
                experiência adquirida ao longo de nossos anos de estudo e
                prática. Profissionais altamente qualificados e especializados
                em diversas áreas do direito, o Dr. Gustavo Santos Ribeiro
                possui vasta experiência em responsabilidade civil, direito do
                consumidor e isenção de imposto de renda em casos de doença
                grave; O Dr. João Pedro Ribeiro destaca-se na esfera
                trabalhista, com expertise em compliance, danos morais e LGPD; e
                a Dra. Nikolly Karoline Morais e Silva é especializada em
                Advocacia Cível e Direito Tributário, com ênfase em negociação,
                contratos e resolução de conflitos. Nosso compromisso é oferecer
                assistência jurídica de alta qualidade, eficiente e adaptada às
                necessidades únicas de cada cliente.{" "}
              </p>
            </div>
          </section>
          <section className="missao-sect">
            <div className="missao-container" id="Visao">
              {items.map((item, index) => (
                <ItemLista
                  key={index}
                  label={item.label}
                  index={index}
                  {...(item.lista && { lista: item.lista })}
                >
                  {item.content}
                </ItemLista>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}


const items = [
  {
    label: "visão",
    content:
      "Uma Sociedade de Advogados alinhada às transformações sociais e seus reflexos nas dinâmicas jurídicas, adotando e adaptando-se às inovações tecnológicas em constante evolução.",
  },
  {
    label: "missão",
    content:
      "Na Morais & Ribeiro Advocacia e Consultoria Jurídica, nossa missão é conduzida por três pilares fundamentais: foco, conhecimento e inovação. Estamos comprometidos em fornecer soluções jurídicas e de negócios que transcendam as expectativas de nossos clientes e desafiem os paradigmas tradicionais da advocacia.",
  },
  {
    label: "valores",
    content:
      "Na Morais & Ribeiro Advocacia e Consultoria Jurídica, temos o compromisso de seguir princípios fundamentais do Direito, que guiam cada interação com nossos clientes. Valorizamos a confiança depositada em nossa equipe e buscamos construir relacionamentos duradouros, por meio da satisfação do cliente, sempre baseados na transparência, ética e excelência jurídica.",
      lista: [{
        titulo: 'Transparência Total',
        content: 'Acreditamos que a transparência é essencial para qualquer relação sólida. Na Morais & Ribeiro, comprometemo-nos a fornecer informações claras e compreensíveis sobre os processos legais e seus possíveis desdobramentos. Buscamos eliminar barreiras na comunicação jurídica, garantindo que nossos clientes estejam sempre informados e capacitados a tomar decisões.'
      },
      {
        titulo: 'Soluções Eficazes',
        content: 'Entendemos que cada situação jurídica é única, e abordamos cada caso com uma perspectiva personalizada. Nosso objetivo não é apenas resolver conflitos, mas fazê-lo de maneira efetiva, rápida e justa. Empregamos estratégias inovadoras, aliadas à nossa experiência, para encontrar soluções que atendam aos interesses de nossos clientes.'
      },
      {
        titulo: 'Empatia e Comprometimento',
        content: 'No coração do nosso serviço está a empatia. Compreendemos as complexidades emocionais e legais que envolvem questões jurídicas e nos comprometemos a lidar com cada cliente com respeito, empatia e compreensão. Estamos aqui para ouvir, aconselhar e agir em prol do melhor interesse de quem confia em nossa expertise.'
      }
    ]
  },
];