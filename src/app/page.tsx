

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FloatingNav } from "@/components/FloatingNav";
import { Clients } from "@/components/Clients";
import { Count } from "@/components/Count";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Articles } from "@/components/Articles";
import { Whats } from "@/components/Whats";
import CtaText from "@/components/CtaText";

export default function Home() {
 

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <CtaText />
            <Link href={"https://api.whatsapp.com/send?phone=+551144622735&text=Olá,%20quero%20falar%20com%20um%20Advogado.%20"}>
              FALE COM UM ADVOGADO AGORA{" "}
              <Image src={"./buttonIcon.svg"} alt="" width={20} height={20} />
            </Link>
          </div>
        </section>

        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>
                Sobre o escritório{" "}
                <Image
                  src={"./lawyerIcon.svg"}
                  alt="Laywer Icon"
                  width={40}
                  height={40}
                />
              </h2>
              <div className={styles.aboutP}>
                <p>
                  No{" "}
                  <span className={styles.bold}>
                    Martiniano, Surita & Advogados
                  </span>
                  , unimos experiência jurídica e inovação estratégica para
                  oferecer soluções sob medida. Nosso foco é sempre gerar
                  resultados concretos para nossos clientes.
                </p>
                <p>
                  Atuamos em diversas áreas, como{" "}
                  <span className={styles.bold}>Direito Administrativo</span>,{" "}
                  <span className={styles.bold}>Bancário</span>,{" "}
                  <span className={styles.bold}>Civil</span>,{" "}
                  <span className={styles.bold}>Comercial</span>,{" "}
                  <span className={styles.bold}>Contratual</span>,{" "}
                  <span className={styles.bold}>Imobiliário</span>,{" "}
                  <span className={styles.bold}>Penal Empresarial</span>,{" "}
                  <span className={styles.bold}>Trabalhista</span>,{" "}
                  <span className={styles.bold}>
                    Previdenciário e Tributário
                  </span>
                  , garantindo atendimento personalizado e eficiente.
                </p>
                <p>
                  Com sede em{" "}
                  <span className={styles.bold}>Santo André – SP</span>, somos
                  referência regional em{" "}
                  <span className={styles.bold}>serviços jurídicos</span> de
                  qualidade, atendendo empresas e pessoas físicas com ética,
                  eficiência e compromisso com a excelência.
                </p>
              </div>
              <Link href={"https://api.whatsapp.com/send?phone=+551144622735&text=Olá,%20quero%20falar%20com%20um%20Advogado.%20"}>
                FALE COM UM ADVOGADO AGORA
                <Image src={"./buttonIcon.svg"} alt="" width={20} height={20} />
              </Link>
            </div>
            <div className={styles.aboutImage}>
              <div className={styles.imageSquare}></div>
            </div>
          </div>
        </section>



        <section className={styles.lawyersSection} id="lawyers"> 
          <div className={styles.lawyersContent}> 
            <div className={styles.lawyerTextContainer}> 
              <div>
                <h2>Conheça nossos Advogados</h2>
              </div> 
              <div className={styles.lawyersP}>
                <p>
                  Conheça nossa equipe de advogados, especialistas em diversas áreas do Direito,
                  oferecendo soluções jurídicas estratégicas para empresas e pessoas físicas.
                </p>
              </div> 
            </div> 

            <div className={styles.lawyerProfileContainer}>
              <div className={styles.lawyerProfileContent}>
                <div className={styles.lawyerProfile}>
                  <div className={styles.lawyerPhoto}><Image src={'/lawyer1.jpeg'} alt="Edgar Martiniano" width={173} height={173} style={{objectFit:'cover'}}/></div>
                  <h3>Edgar Martiniano</h3>
                  <p><span className={styles.bold}>Advogado Sócio</span>. Militante na Área Jurídica desde 2001. Formado em direito pela Universidade de Mogi das Cruzes - SP</p>
                </div>
                <div className={styles.lawyerProfile}>
                  <div className={styles.lawyerPhoto}><Image src={'/lawyer2.jpg'} alt="Eduardo Surita" width={173} height={173} style={{objectFit:'cover'}}/></div>
                  <h3>Eduardo Surita</h3>
                  <p><span className={styles.bold}>Advogado Sócio</span>. Militante na Área Jurídica desde 2001. Formado em direito pela Universidade de Mogi das Cruzes - SP</p>
                </div>
                <div className={styles.lawyerProfile}>
                  <div className={styles.lawyerPhoto}><Image src={'/lawyer3.jpeg'} alt="Juliana Martiniano" width={173} height={173} style={{objectFit:'cover'}} /></div>
                  <h3>Juliana Martiniano</h3>
                  <p><span className={styles.bold}>Advogada</span>. Militante na Área Jurídica desde 2007. Formado em direito pela Universidade Municipal de São Caetano do Sul</p>
                </div>
              </div>
            </div>
          </div> 
        </section>


        <Clients />
        <Count />
        <Articles />
        <Contact />
        <Footer />
        <Whats />
      </main>

      <FloatingNav />
    </>
  );
}
