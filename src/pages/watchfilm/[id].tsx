

import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import List10Film from '../../components/list10film'

import styles from './deltail.module.css'
type ProductProps = {
  product : any[]
}

const WatchFilm = (props: ProductProps ) => {
const router = useRouter()
const {id} = router.query
const {data, error} = useSWR(id ? `/films/${id}` : null)
if(!data) return <div>loading...</div>
if(error) return <div> error</div>


  return (
   <div>
    <div>
    <iframe width="100%" height="680px" src={data.video} title="Review The Black Phone (Điện Thoại Đen) | Liệu Có Thành Công Như IT ?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  <List10Film/>
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

export default WatchFilm