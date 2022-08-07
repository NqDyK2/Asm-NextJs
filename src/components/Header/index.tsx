import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'

import { MenuList } from './data-menu'
import Search from '../Search'

type Props = {}


const Header = (props: Props) => {
    return (
        <div>
            <header className='grid grid-cols-4 gap-5 my-auto h-20'>
                <div className={styles.netflixLogo}>
                    <img src="https://rb.gy/ulxxee" className="absolute left-4 top-2 cursor-pointer object-contain md:left-10 md:top-6" width={"116px"} height={"25px"} />
                </div>
                <nav className="my-auto -ml-52">
                    {MenuList.map((menu, index) => (
                        <Link key={index} className={styles.Link} href={menu.path}>
                            <a className="text-white px-3">
                                {menu.label}
                            </a>
                        </Link>
                    ))}
                </nav>
                <div className="my-auto">
                    <Search />
                </div>
                <div className="my-auto ml-56">
                    <Link href="/signin"><button className='text-white py-2 px-5 mx-3 border rounded-lg border-white hover:border-red-500'>Login</button></Link>
                </div>
            </header>
            {/* <header className="grid grid-cols-4 gap-5">
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
                <div className={styles.search}>
                    <Search/>
                </div>
                <div className={styles.sub_nav}>
                    <Link href="#"><i className="fas fa-search sub-nav-logo" /></Link>
                    <Link href="#"><i className="fas fa-bell sub-nav-logo" /></Link>
                    
                    <Link href="/signin"><button className='text-white py-2 px-5 mx-3 border rounded-lg border-white hover:border-red-500'>Login</button></Link>
                </div>
                
            </header> */}
        </div>

    )
}

export default Header