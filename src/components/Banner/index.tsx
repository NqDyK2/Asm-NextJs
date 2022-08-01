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
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >

        <SwiperSlide className={styles.swiper_slide}>
          <div className={styles.item_banner}>
            <div className={styles.item}>
              <div className={styles.desc}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className={styles.btn_handle_play}>
                <button className={styles.btn_play}>Phát</button>
                <button className={styles.btn_info}>Thông tin khác</button>
              </div>
            </div>
          </div>
          <img src="https://rare-gallery.com/thumbnail/44781-Po-Kung-Fu-PandaKung-Fu-Panda-3-HD-Wallpaper.jpg" alt="" /></SwiperSlide>
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
      </Swiper >
    </div >
  )
}

export default Banner