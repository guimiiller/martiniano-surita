import styles from '../../styles/PrivacyPolicy.module.css';

import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Política de Privacidade | Martiniano, Surita & Advogados",
  description:
    "Saiba como o escritório Martiniano, Surita & Advogados coleta, utiliza e protege informações de navegação em nosso site. Transparência e segurança em primeiro lugar.",
  keywords: [
    "política de privacidade",
    "privacidade dados",
    "segurança de dados",
    "cookies",
    "Martiniano Surita Advogados",
  ],
  openGraph: {
    title: "Política de Privacidade | Martiniano, Surita & Advogados",
    description:
      "Entenda como o escritório Martiniano, Surita & Advogados garante a proteção e privacidade das informações de navegação em nosso site.",
    url: "https://martiniano-surita.vercel.app/privacy",
    siteName: "Martiniano, Surita & Advogados",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "https://martiniano-surita.vercel.app/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className={styles.header}>
        <div><Link prefetch href={'/'} ><Image src={'/arrowBack.png'} alt='Arrow Back' width={40} height={40} /></Link></div>
      </header>
      <main className={styles.privacyPage}>
        <div className={styles.privacyContent}>
          <h1>Política de Privacidade</h1>
          <p>
            A <strong>M&amp;S</strong> valoriza a privacidade e a segurança dos visitantes do site. 
            Este documento explica como coletamos, utilizamos e protegemos as informações de navegação.
          </p>

          <h2>1. Coleta de Informações</h2>
          <p>
            Nosso site coleta apenas informações técnicas e de navegação, como:
          </p>
          <ul>
            <li>Endereço IP.</li>
            <li>Páginas acessadas e tempo de permanência.</li>
            <li>Cookies usados para melhorar a experiência de navegação.</li>
          </ul>

          <h2>2. Uso das Informações</h2>
          <p>As informações coletadas são utilizadas exclusivamente para:</p>
          <ul>
            <li>Melhorar o conteúdo e a performance do site.</li>
            <li>Entender como os visitantes interagem com nossas páginas.</li>
            <li>Garantir segurança e bom funcionamento da plataforma.</li>
          </ul>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            A <strong>M&amp;S</strong> não compartilha, vende ou aluga qualquer dado coletado. 
            Informações só poderão ser divulgadas em casos exigidos por lei.
          </p>

          <h2>4. Armazenamento e Segurança</h2>
          <p>
            Utilizamos medidas técnicas e administrativas adequadas para proteger informações de navegação 
            contra acessos não autorizados.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Nosso site utiliza cookies para melhorar a experiência do usuário, analisar estatísticas e personalizar conteúdos. 
            O visitante pode desativá-los nas configurações do navegador.
          </p>

          <h2>6. Direitos do Usuário</h2>
          <p>
            Mesmo não coletando dados pessoais sensíveis, os visitantes têm direito a solicitar informações sobre 
            como utilizamos os dados de navegação.
          </p>

          <h2>7. Alterações nesta Política</h2>
          <p>
            Esta política poderá ser atualizada periodicamente. Recomendamos consultar esta página regularmente 
            para estar ciente de possíveis mudanças.
          </p>

          <h2>8. Contato</h2>
          <p>
            Caso tenha dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: 
            <a href="mailto:contato@m&s.com.br"> contato@m&amp;s.com.br</a>.
          </p>
        </div>
      </main>
    </>

  );
}
