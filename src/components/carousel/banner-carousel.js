import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./carousel.scss";

export default function ImgCarousel(props) {
  return (
    <div className="carousel-wrap">
      <Carousel fade>
        <Carousel.Item>
          <Image
            src="/images/carousel/img1-mobile.svg"
            rounded
            className="carousel-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/carousel/img2-mobile.svg"
            rounded
            className="carousel-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/carousel/img3-mobile.svg"
            rounded
            className="carousel-img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/carousel/img4-mobile.svg"
            rounded
            className="carousel-img"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
