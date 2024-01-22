"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Kolay Araç Kirala
          </div>

          <div className="text" data-swiper-parallax="-100">
            <p>Sadece Bir Kaç Form Doldurarak Kolayca Aracını Kirala</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Güvenli Ödeme Sayfası
          </div>

          <div className="text" data-swiper-parallax="-100">
            <p>Online Kredi Kartı ile Güvenli Ödeme ile Kolayca Ödeme Yapın.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Anında Araç Kiralama, Anında Yola Çık!
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Hızlı, pratik ve uygun fiyatlı araç kiralama seçenekleriyle her an
              yanınızdayız. İhtiyacınız olduğu anda bizi arayın, size en uygun
              aracı hemen temin edelim. Hızlı rezervasyon, kolay kullanım,
              sorunsuz yolculuk. Sizin için buradayız, sizi bekliyoruz!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
