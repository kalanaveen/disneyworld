import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="slider1" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="slider2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="slider3" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
