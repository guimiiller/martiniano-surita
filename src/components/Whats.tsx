import styles from '../styles/Whats.module.css'
import Image from "next/image";
import Link from 'next/link';

export function Whats(){
    return(
        <div className={styles.whats}>
            <Link href={"https://api.whatsapp.com/send?phone=+551144622735&text=Olá,%20quero%20falar%20com%20um%20Advogado.%20"} target="_blank">
                <div style={{ position: 'relative' }}>
                    <Image src={'/whats.svg'} alt="Fale Conosco pelo Whatsapp" width={65} height={65} title="Fale Conosco pelo Whatsapp" />
                    <span className={styles.notification}>1</span>
                </div>
            </Link>
        </div>
    )
}
