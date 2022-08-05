import Link from 'next/link'
import React from 'react'
import styles from './header.module.css'
import {MenuList} from './data-menu'
import {isAuthenticate} from '../../auth/auth'

type Props = {}
 

const Header = (props: Props) => {
    const {user} = isAuthenticate();
    
    
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
                    
                    {!user && 
                    <Link href="/signin"><button className='text-white py-2 px-5 mx-3 border rounded-lg border-white hover:border-red-500'>Login</button></Link>
                    },
                    {user && 
                        <div>{user.name}</div>
                    }
                </div>
            </header>

        </div>

    )
}

export default Header