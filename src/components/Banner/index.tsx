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
        {films.map((item: any, index:any) => {
            return<SwiperSlide className={styles.swiper_slide}>
             <div key={index} className={styles.item_banner}>
              <div className={styles.item}>
                <div className={styles.desc}>
                  <h1 className='text-white font-bold text-5xl py-4 '>{item.name}</h1>
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
              <img src={item.banner_img} alt="" />
          </SwiperSlide>
          })}
      </Swiper >

    </div >
  )
}

export default Banner