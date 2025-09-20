'use client'

import Image from "next/image"
import styles from '../styles/Header.module.css'
import Link from "next/link"
import { useEffect, useState } from "react"

export function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setMenuOpen(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return(
        <>
            <header className={styles.header}>
                <div>
                    <Image src={"./logo.svg"} alt="Logo M&S" width={200} height={80} className={styles.navLogo}/>
                </div>
                <div>
                    <ul className={styles.navList}>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'#about'}>Sobre Nós</Link></li>
                        <li><Link href={'#lawyers'}>Advogados</Link></li>
                        <li><Link href={'#clients'}>Clientes</Link></li>
                        <li><Link href={'#contact'}>Contato</Link></li>
                    </ul>
                </div> 

                <div className={styles.navSocials}>
                    <Link prefetch href={'https://www.instagram.com/martinianosuritaadvogados/'} target="blank"><Image src={'./instagramIcon.svg'} alt="Instagram Icon" width={20} height={20}/></Link>
                    <Link prefetch href={'https://www.facebook.com/martiniano.surita'} target="blank"><Image src={'./facebookIcon.svg'} alt="Facebook Icon" width={20} height={20}/></Link>
                </div>


                <div className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`${styles.line1} ${menuOpen ? styles.open1 : ''}`}></div>
                    <div className={`${styles.line2} ${menuOpen ? styles.open2 : ''}`}></div>
                    <div className={`${styles.line3} ${menuOpen ? styles.close : ''}`}></div>
                </div>

                

                <div className={`${styles.headerMenu} ${menuOpen ? styles.showMenu : ''}`}>
                    <ul className={styles.mobileList}>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'#about'}>Sobre Nós</Link></li>
                        <li><Link href={'#lawyers'}>Advogados</Link></li>
                        <li><Link href={'#clients'}>Clientes</Link></li>
                        <li><Link href={'#contact'}>Contato</Link></li>
                    </ul>
                    <div className={styles.navSocialsMobile}>
                        <Link prefetch target="blank" href={'https://www.instagram.com/martinianosuritaadvogados/'}><Image src={'./instagramIcon.svg'} alt="Instagram Icon" width={20} height={20}/></Link>
                        <Link prefetch target="blank" href={'https://www.facebook.com/martiniano.surita'}><Image src={'./facebookIcon.svg'} alt="Facebook Icon" width={20} height={20}/></Link>
                    </div>
                </div>
            </header>
        </>
    )
}