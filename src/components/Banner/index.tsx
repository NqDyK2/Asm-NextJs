import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from './banner.module.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useFilms from '@/hooks/use-film';

const Banner = () => {
  const { data: films, error } = useFilms();
  if (error) return <div>failed to load...</div>
  if (!films) return <div> loading...</div>
  console.log('films', films);
  // Object.values(data).map((x) => console.log(x))
  return (
    <div>
      {/* {films.map((item: any) => {
        return <div key={item.id}><li>{item.name}</li></div>
      })} */}
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
        {films.map((item: any, index:any) => {
            return<SwiperSlide className={styles.swiper_slide}>
             <div key={index} className={styles.item_banner}>
              <div className={styles.item}>
                <div className={styles.desc}>
                  <p>
                    {item.overview}
                  </p>
                </div>
                <div className={styles.btn_handle_play}>
                  <button className={styles.btn_play}> Phát</button>
                  <button className={styles.btn_info} >Thông tin khác</button>
                </div>
              </div>
            </div>
              <img src={item.poster_path} alt="" />

          </SwiperSlide>
          })}
        {/* <SwiperSlide className={styles.swiper_slide}>
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
          <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="" /></SwiperSlide> */}
      </Swiper >

    </div >
  )
}

export default Banner