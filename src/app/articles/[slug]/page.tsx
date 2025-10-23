import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "../../../styles/ArticlePage.module.css";
import Link from "next/link";
import Image from "next/image";
import { Whats } from "@/components/Whats";

type Article = {
  title: string;
  description: string;
  content: string;
};

const articles: Record<string, Article> = {
  "direito-trabalhista": {
    title: "Direito Trabalhista",
    description:
      "Entenda seus direitos trabalhistas, como rescisão, férias, 13º salário, horas extras e a importância de um advogado especializado em Direito do Trabalho.",
    content: `
      <h2>O que é o Direito Trabalhista?</h2>
      <p>O <strong>Direito Trabalhista</strong> é o ramo jurídico que regula as relações entre <strong>empregados e empregadores</strong>, assegurando condições dignas de trabalho e protegendo ambas as partes. Ele é essencial para manter o equilíbrio e o respeito nas relações profissionais.</p>

      <h2>Principais Direitos do Trabalhador</h2>
      <ul>
        <li><strong>Rescisão de contrato:</strong> envolve aviso prévio, verbas rescisórias e multas previstas pela CLT.</li>
        <li><strong>Horas extras:</strong> pagamento com adicional, geralmente de 50% em dias comuns e 100% em feriados.</li>
        <li><strong>Férias:</strong> direito a 30 dias anuais de descanso, com adicional de 1/3 sobre o salário.</li>
        <li><strong>13º salário:</strong> pagamento adicional no fim do ano proporcional ao tempo trabalhado.</li>
      </ul>

      <h2>Problemas Comuns nas Relações de Trabalho</h2>
      <p>Algumas das principais causas de <strong>conflitos trabalhistas</strong> incluem atrasos salariais, jornadas excessivas, ausência de registro em carteira, assédio moral e descumprimento de obrigações contratuais.</p>

      <h2>Por que contar com um Advogado Trabalhista?</h2>
      <p>Ter a orientação de um <strong>advogado trabalhista especializado</strong> é fundamental para garantir que seus direitos sejam respeitados. Esse profissional ajuda a prevenir litígios, negociar acordos e representar seus interesses na Justiça do Trabalho.</p>

      <p>➡️ <em>Precisa de orientação sobre questões trabalhistas?</em> Nossa equipe está pronta para oferecer suporte jurídico completo.</p>
    `,
  },

  "direito-imobiliario": {
    title: "Direito Imobiliário",
    description:
      "Descubra como o Direito Imobiliário protege suas transações: compra, venda, aluguel, usucapião e regularização de imóveis com segurança jurídica.",
    content: `
      <h2>O que é o Direito Imobiliário?</h2>
      <p>O <strong>Direito Imobiliário</strong> regula todas as relações jurídicas que envolvem bens imóveis. É uma área essencial para quem deseja realizar negociações seguras e evitar prejuízos em contratos de compra, venda, aluguel ou regularização.</p>

      <h2>Principais Temas e Atuação</h2>
      <ul>
        <li><strong>Aluguel:</strong> direitos e deveres de inquilinos e proprietários, conforme a Lei do Inquilinato.</li>
        <li><strong>Compra e venda:</strong> análise documental e elaboração de contratos seguros para evitar fraudes.</li>
        <li><strong>Usucapião:</strong> aquisição de propriedade por meio de posse prolongada.</li>
        <li><strong>Regularização de imóveis:</strong> registro em cartório, atualização de matrículas e legalização de construções.</li>
        <li><strong>Financiamento imobiliário:</strong> revisão de contratos bancários e identificação de cláusulas abusivas.</li>
      </ul>

      <h2>Conflitos e Soluções Jurídicas</h2>
      <p>É comum surgirem <strong>disputas imobiliárias</strong> envolvendo atrasos na entrega de imóveis, inadimplência de aluguel, contratos irregulares e divisão de bens em herança. Um acompanhamento jurídico especializado é essencial para resolver essas questões com segurança e rapidez.</p>

      <h2>Por que contratar um Advogado Imobiliário?</h2>
      <p>Com o suporte de um <strong>advogado imobiliário</strong>, você garante tranquilidade em todas as etapas da negociação, desde a análise do contrato até o registro do imóvel. Esse acompanhamento evita prejuízos e protege seu patrimônio.</p>

      <p>🏡 <em>Entre em contato conosco</em> para garantir segurança e confiança em suas transações imobiliárias.</p>
    `,
  },

  "direito-penal-empresarial": {
    title: "Direito Penal Empresarial",
    description:
      "Saiba como o Direito Penal Empresarial atua na prevenção de crimes econômicos, compliance corporativo e defesa jurídica de empresas e gestores.",
    content: `
      <h2>O que é o Direito Penal Empresarial?</h2>
      <p>O <strong>Direito Penal Empresarial</strong> é voltado à prevenção e defesa de <strong>infrações econômicas e corporativas</strong>, envolvendo tanto pessoas físicas quanto jurídicas. Ele se tornou fundamental no cenário empresarial moderno, onde a conformidade legal é indispensável.</p>

      <h2>Principais Áreas de Atuação</h2>
      <ul>
        <li><strong>Crimes econômicos:</strong> como lavagem de dinheiro, sonegação fiscal e fraudes contábeis.</li>
        <li><strong>Responsabilidade de sócios e administradores:</strong> situações em que gestores podem ser responsabilizados criminalmente.</li>
        <li><strong>Compliance corporativo:</strong> implantação de políticas internas para prevenir ilícitos e proteger a reputação da empresa.</li>
        <li><strong>Crimes contra a administração pública:</strong> corrupção, fraude em licitações e tráfico de influência.</li>
      </ul>

      <h2>Prevenção e Gestão de Riscos Jurídicos</h2>
      <p>A implementação de <strong>programas de compliance</strong>, auditorias internas e treinamentos jurídicos são medidas que reduzem riscos e aumentam a segurança institucional. Empresas que atuam preventivamente estão mais protegidas contra investigações e sanções legais.</p>

      <h2>Atuação do Advogado Penal Empresarial</h2>
      <p>O <strong>advogado penal empresarial</strong> atua tanto preventivamente, orientando a empresa, quanto reativamente, na defesa em processos criminais. Seu papel é estratégico para proteger gestores e garantir conformidade com as leis.</p>

      <p>⚖️ <em>Precisa de suporte jurídico especializado?</em> Nossa equipe auxilia empresas a se manterem em conformidade e seguras diante das exigências legais.</p>
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: "Artigo não encontrado | Martiniano, Surita & Advogados",
      description: "O artigo que você procura não foi encontrado.",
    };
  }

  return {
    title: `${article.title} | Martiniano, Surita & Advogados`,
    description: article.description,
    openGraph: {
      title: `${article.title} | Martiniano, Surita & Advogados`,
      description: article.description,
      url: `https://martiniano-surita.vercel.app/articles/${slug}`,
      siteName: "Martiniano, Surita & Advogados",
      locale: "pt_BR",
      type: "article",
    },
    alternates: {
      canonical: `https://martiniano-surita.vercel.app/articles/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) return notFound();

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link prefetch href={"/"}>
            <Image src={"/arrowBack.png"} alt="Voltar" width={40} height={40} />
          </Link>
        </div>
      </header>

      <main className={styles.articlePage}>
        <div className={styles.articleContent}>
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </main>

      <Whats />
    </>
  );
}
