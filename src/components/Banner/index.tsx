import React from 'react';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {Link} from 'react-router-dom';

import bannerImgPromo1 from '../../assets/images/promocao1.png';
import bannerImgPromo2 from '../../assets/images/promocao2.png';

SwiperCore.use([EffectCoverflow, Pagination]);


export function Banner() {
  return (
    
    <div>
    <Swiper
      effect={"fade"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      className="mySwiper"
    >
      <SwiperSlide>
      <Link to="/produtos/products-by-group/5062"><img src={bannerImgPromo1} style={{width: "100%"}} alt="Lixo Preto 100litros" /></Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="/produtos/products-by-group/5063"><img src={bannerImgPromo2} style={{width: "100%"}}  alt="Lixo Preto 150litros" /></Link>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}