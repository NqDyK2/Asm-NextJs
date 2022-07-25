import React from 'react'
import Banner from '../Banner'
import styles from './header.module.css'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.netflixLogo}>
                    <a className={styles.logo} href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image" /></a>
                </div>
                <nav className={styles.main_nav}>
                    <a href="#home">Home</a>
                    <a href="#tvShows">TV Shows</a>
                    <a href="#movies">Movies</a>
                    <a href="#originals">Originals</a>
                    <a href="#">Recently Added</a>
                    <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>
                </nav>
                <nav className={styles.sub_nav}>
                    <a href="#"><i className="fas fa-search sub-nav-logo" /></a>
                    <a href="#"><i className="fas fa-bell sub-nav-logo" /></a>
                    <a href="#">Account</a>
                </nav>
            </header>

        </div>

    )
}

export default Header