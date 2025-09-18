import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerContent}>
                <Link prefetch href={"/privacy"}>
                    <h2 className={styles.privacyPolicy}>Políticas de Privacidade</h2>
                </Link>
                
                <div>
                    <p className={styles.copyright}>© 2025 by Martiniano, Surita & Advogados. Todos os direitos reservados</p>
                </div>

                <div className={styles.crowContainer}>
                    <h4>Criado por <Link href={'https://crowtechnology.com.br/'} target="blank">CROW<Image src={'/crowlogo.svg'} alt="Logo Crow" width={25} height={25}/></Link></h4>
                </div>  

            </div>

        </footer>
    );
}
