import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'

import {MenuList} from './data-menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.netflixLogo}>
                    <Link className={styles.logo} href="/">
                        <img src="https://rb.gy/ulxxee" className="absolute left-4 top-2 cursor-pointer object-contain md:left-10 md:top-6" width={200}  height={200}/>
                    </Link>
                </div>
                <nav className={styles.main_nav}>
                    {MenuList.map ((menu,index) =>(
                        <Link key={index} className={styles.Link} href= {menu.path}> 
                            <a className={styles.aLink}>
                                {menu.label}
                            </a>
                         </Link>
                    ))}
                </nav>
                <div className={styles.sub_nav}>
                    <Link href="#"><i className="fas fa-search sub-nav-logo" /></Link>
                    <Link href="#"><i className="fas fa-bell sub-nav-logo" /></Link>
                    <Link href="/signin"><button className='text-white py-2 px-5 mx-3 border rounded-lg border-white hover:border-red-500'>Login</button></Link>
                    {/* <Link href="/signup"><button className='text-white mx-3 border border-red-500	bg-red-500 py-2 px-5 mx-3 rounded-lg hover:bg-white hover:text-black hover:border-white'>Register</button></Link> */}
                </div>
            </header>

        </div>

    )
}

export default Header