import React from 'react'
import styles from './list10.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useFilms from '@/hooks/use-film';
import { Pagination, Navigation } from "swiper";
import Link from 'next/link'
type Props = {}


const List10Film = (props: Props) => {
    const {data: films, error} = useFilms()
    if(!films ) return <div> loading...</div>
    if(error) return <div>error</div>
    
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
                {films.slice(0,9).map((item: any , index:any) => {
                
             return <SwiperSlide className={styles.Swiper_slide} key={index} >
                    <div className={styles.item_number}>
                        <div className={styles.number}>
                            <span>{index+1}</span>
                        </div>
                        <div className={styles.item}>
                            <Link href={`film/${item.id}`}>
                                <img src= {item.poster_path} alt='#' />
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                
                })}
                <SwiperSlide className={styles.Swiper_slide}>
                    <img src="https://i.ytimg.com/vi/TFJwUwnShnA/mqdefault.jpg" alt='' />
                </SwiperSlide>
               
            </Swiper>
        </div>
    )
}

export default List10Film