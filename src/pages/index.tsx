import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let user : any
  
 const ISSERVER = typeof window === "undefined" 
if (!ISSERVER) {
  // getItem local success
 const {user: userLocal} = JSON.parse(localStorage.getItem('user') || '{}')
//  console.log('userLocal', userLocal.user);
// gán variable get localStorage for user -> using user 
 user = userLocal
}

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Assigntment WEB209-FW2-NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className=''>{user.email}
        </div>
    </div>
  )
}

export default Home
