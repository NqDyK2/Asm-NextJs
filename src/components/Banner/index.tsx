import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import styles from './banner.module.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
       
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
            <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner