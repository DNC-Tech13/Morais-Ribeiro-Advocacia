"use client";
import Banner from "@/components/banner/banner";
import "./page.scss";
import ImgCarousel from "@/components/carousel/banner-carousel";
import Layout from "@/components/layout/DefaultLayout";
import AreaAtuacao from "@/components/area-atuacao/AreaAtuacao";
import ButtonCustomLink from "@/components/button/button";
export default function Home() {
  return (
    <Layout>
      <main>
        <Banner bannerImg={"/images/banners/home.svg"} type={"full"}>
          <ImgCarousel />
          <div className="home-content">
            <h1>
              Na <span>Morais & Ribeiro</span>, somos mais do que apenas
              advogados - somos uma parceria fundada na amizade e no
              profissionalismo
            </h1>
          </div>
        </Banner>
        <section className={'home-sect2'}>
          <div className="home-sect2-container">
            <h3>
            Confie em nós para representar seus interesses com paixão, profissionalismo e comprometimento. Somos um escritório de atuação full service, 360º, adaptando, entendo e acolhendo cada cliente com sua respectiva demanda.
            </h3> 
            <p>Estamos honrados em fazer parte de sua jornada jurídica e ansiosos para trabalhar juntos na busca por soluções eficazes e justas.</p>
            
              <ButtonCustomLink variant={'light'} position={'right'}>
                Entre em contato
              </ButtonCustomLink>
            
          </div>
        </section>
      <AreaAtuacao />
      </main>
    </Layout>

  );
}