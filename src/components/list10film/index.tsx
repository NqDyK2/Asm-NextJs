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
                navigation={
                 true
                }
                modules={[Pagination, Navigation]}
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
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>2</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>3</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>4</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>5</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>6</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>7</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>8</span>
                        </div>
                        <div className={styles.item}>
                            <a href="">
                                <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='#' />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.Swiper_slide}>
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>9</span>
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
               
            </Swiper>
        </div>
    )
}

export default List10Film