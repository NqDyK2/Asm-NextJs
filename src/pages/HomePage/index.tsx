import Link from 'next/link'
import React from 'react'
import Banner from '../../components/Banner'
import List10Film from '../../components/list10film'
import styles from './home.module.css'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner />
      <List10Film />
      <div className='text-center my-20 '>
        <Link href='/film'>
          <button className={styles.btn_play}>
            Show All Film
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage