import React from 'react';
import {SwiperSlide} from "swiper/react";
import ImageItem from "./imageItem";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../../styles.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Carousel = ({ post }) => {
  const { media } = post;
  return (
    <>
    { media.map((item, index) => (
        <SwiperSlide key={index} tag="li" style={{ listStyle: 'none' }}>
          <ImageItem uri={item.uri} />
        </SwiperSlide>
      )
    )}
    </>
  )
};

export default Carousel;