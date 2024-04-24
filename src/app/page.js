"use client";
import Banner from "@/components/banner/banner";
import "./page.scss";
import ImgCarousel from "@/components/carousel/banner-carousel";

export default function Home() {
  return (
    <main>
      <Banner bannerImg={"/images/banners/home.svg"} type={"full"}>
        <ImgCarousel />
        <div className="home-content">
          <h1>
            Na <span>Morais & Ribeiro</span>, somos mais do que apenas advogados
            - somos uma parceria fundada na amizade e no profissionalismo
          </h1>
        </div>
      </Banner>
    </main>
  );
}
