import React from "react";
import { SwiperSlide } from 'swiper/react';
import ImageItem from './imageItem';

const Slide = (item) => {
  const { key, uri } = item;
  console.log(item.key);
  console.log(item.uri);
  return (
    <SwiperSlide key={key} tag="li">
      <ImageItem uri={uri} />
    </SwiperSlide>
  );
};

export default Slide;
