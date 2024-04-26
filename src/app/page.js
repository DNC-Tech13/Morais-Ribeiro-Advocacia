"use client";
import Banner from "@/components/banner/banner";
import "./page.scss";
import ImgCarousel from "@/components/carousel/banner-carousel";
import Header from "@/components/header/header";
import Layout from "@/components/layout/DefaultLayout";
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
      </main>
    </Layout>
  );
}
