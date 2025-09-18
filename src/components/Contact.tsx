import Image from "next/image";
import styles from "../styles/Contact.module.css";

export function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactWrapper}>
        <div className={styles.contactBox}>
          <p className={styles.contactItem}>
            <Image src={'/phone.svg'} alt="Phone Icon" width={24} height={24} className={styles.icon} />
            Telefone
          </p>
          <p className={styles.contactText}>(11) 4462-2735</p>

          <p className={styles.contactItem}>
            <Image src={'/local.svg'} alt="Local Icon" width={24} height={24} className={styles.icon} />
            Endereço
          </p>
          <p className={styles.contactText}>Rua Alameda Martins Fontes, 196, Santo André - SP</p>

          <p className={styles.contactItem}>
            <Image src={'/clock.svg'} alt="Clock Icon" width={24} height={24} className={styles.icon} />
            Horário
          </p>
          <p className={styles.contactText}>Seg a Sex: 08h - 17h</p>
        </div>

        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.315867390825!2d-46.535752924840104!3d-23.636842578748013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42b7806e8e91%3A0x342ecf1efc6930a7!2sAlameda%20Martins%20Fontes%2C%20196%20-%20Santa%20Terezinha%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009210-610!5e1!3m2!1spt-BR!2sbr!4v1757425236158!5m2!1spt-BR!2sbr"
          width="600" 
          height="450"  
          loading="lazy" 
          className={styles.map}
        ></iframe>
      </div>
    </section>
  );
}
