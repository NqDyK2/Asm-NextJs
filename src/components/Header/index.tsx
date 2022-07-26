import Link from 'next/link'
import React from 'react'
import Banner from '../Banner'
import styles from './header.module.css'

import {MenuList} from './data-menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.netflixLogo}>
                    <Link className={styles.logo} href="/"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /></Link>
                </div>
                <nav className={styles.main_nav}>
                    {MenuList.map ((menu) =>(
                        <Link className={styles.Link} href= {menu.path}> 
                            <a className={styles.aLink}>
                                {menu.label}
                            </a>
                         </Link>
                    ))}
                </nav>
                <div className={styles.sub_nav}>
                    <Link href="#"><i className="fas fa-search sub-nav-logo" /></Link>
                    <Link href="#"><i className="fas fa-bell sub-nav-logo" /></Link>
                    <Link href="#">Account</Link>
                </div>
            </header>

        </div>

    )
}

export default Header