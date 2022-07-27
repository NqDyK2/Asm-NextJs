import React from 'react'
import styles from './list10.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {}
import { Pagination, Navigation } from "swiper";
const List10Film = (props: Props) => {
    return (
        <div>
            <h2 className={styles.title}>Top 10 phim tại Việt Nam ngay hôm nay</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={styles.mySwiper}
            >
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>1</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default List10Film