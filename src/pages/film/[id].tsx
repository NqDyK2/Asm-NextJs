

import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import List10Film from '../../components/list10film'

import styles from './deltail.module.css'
type ProductProps = {
  product : any[]
}

const ProductPage = (props: ProductProps ) => {
const router = useRouter()
const {id} = router.query
const {data, error} = useSWR(id ? `/films/${id}` : null)
if(!data) return <div>loading...</div>
if(error) return <div> error</div>


  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

        <div className={styles.content} >
          <div className={styles.item}>
          <img src={data?.banner_img} alt="" width="100%" />
            <div className={styles.content_item}>
              <h2>{data?.name}</h2>
              <div className={styles.deltal}>
                <span><i className="fa-solid fa-calendar-days"> </i> 2022</span>
                <span className={styles.age}>16+</span>
                <span><i className="fa-solid fa-clock" /> 1g30p</span>
              </div>
              <div className={styles.content_deltai}>
                <p>{data?.overview}</p>
              </div>
              <div className={styles.deltail_play}>
                <div className={styles.play}>
                  <a href={`/watchfilm/${id}`}><i className="fa-solid fa-play" />Phát </a>
                </div>
                <div className={styles.deltai_film}>
                  <a href=""> Chi tiết phim </a>
                </div>
              </div>
              <div className={styles.story}>
                <i className="fa-solid fa-store" />
                <p> {data?.story_cart} </p>
              </div>
              <div className={styles.cast_movie}>
                <div className={styles.cast}>
                  <p>Diễn viên chính : {data?.cast}</p>
                </div>
                <div className={styles.movie}>
                  <p>Ngày ra mắt : {data?.release_date}</p>
                </div>
              </div>
            </div>


          </div>
          <List10Film/>
        </div>

      </div>

    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) => {
  const data = await ( await fetch(` http://localhost:3001/films/${context.params.id}`)).json()
  return {
    props : {
      product : data
    }
  }
}

export default ProductPage