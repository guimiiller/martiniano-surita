'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/FloatingNav.module.css";

export function FloatingNav() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${styles.floatingNav} ${visible ? styles.show : ""}`}>
            <Link href={'/'}><Image src={'./homeIcon.svg'} alt="Home" width={27} height={27}/></Link>
            <Link href={'#about'}><Image src={'./aboutIcon.svg'} alt="About" width={27} height={27}/></Link>
            <Link href={'#lawyer'}><Image src={'./lawyerIconNav.svg'} alt="Lawyer" width={27} height={27}/></Link>
            <Link href={'#clients'}><Image src={'./clientsIcon.svg'} alt="Clients" width={27} height={27}/></Link>
        </div>
    )
}
