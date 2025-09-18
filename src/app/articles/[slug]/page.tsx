import { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "../../../styles/ArticlePage.module.css";
import Link from "next/link";
import Image from "next/image";

type Article = {
  title: string;
  description: string;
  content: string;
};

const articles: Record<string, Article> = {
  "direito-trabalhista": {
    title: "Direito Trabalhista",
    description:
      "Conheça os principais direitos e obrigações trabalhistas: rescisão, férias, 13º salário, horas extras e a importância da assessoria jurídica.",
    content: `
      <h2>Direitos e Obrigações</h2>
      <p>O Direito Trabalhista regula as relações entre empregados e empregadores, assegurando condições dignas de trabalho...</p>

      <h2>Aspectos Fundamentais</h2>
      <ul>
        <li><strong>Rescisão de contrato:</strong> envolve aviso prévio, verbas rescisórias e multas resguardadas pela CLT.</li>
        <li><strong>Horas extras:</strong> pagamento com adicional, geralmente de 50% em dias comuns e 100% em feriados.</li>
        <li><strong>Férias:</strong> direito a 30 dias anuais, com adicional de 1/3 sobre o salário.</li>
        <li><strong>13º salário:</strong> pagamento adicional no fim do ano proporcional ao tempo trabalhado.</li>
      </ul>

      <h2>Questões Comuns</h2>
      <p>Conflitos trabalhistas podem surgir de atrasos salariais, jornadas excessivas, falta de registro em carteira e assédio no ambiente de trabalho.</p>

      <h2>Importância da Assessoria Jurídica</h2>
      <p>Um advogado trabalhista auxilia tanto empregados quanto empresas a prevenir litígios e propor ações ou defesas em processos judiciais.</p>
    `,
  },
  "direito-imobiliario": {
    title: "Direito Imobiliário",
    description:
      "Saiba como o Direito Imobiliário regula negociações, contratos, aluguel, usucapião e regularização de imóveis, garantindo segurança jurídica.",
    content: `
      <h2>Negociações e Contratos</h2>
      <p>O Direito Imobiliário trata da regulamentação das relações jurídicas que envolvem bens imóveis...</p>

      <h2>Temas Relevantes</h2>
      <ul>
        <li><strong>Aluguel:</strong> direitos e deveres de inquilinos e proprietários, previstos na Lei do Inquilinato.</li>
        <li><strong>Compra e venda:</strong> análise de documentos e elaboração de contratos para evitar problemas futuros.</li>
        <li><strong>Usucapião:</strong> aquisição da propriedade por meio da posse prolongada.</li>
        <li><strong>Regularização de imóveis:</strong> registro em cartório e atualização de matrículas.</li>
        <li><strong>Financiamento imobiliário:</strong> revisão de contratos e cláusulas abusivas.</li>
      </ul>

      <h2>Problemas Frequentes</h2>
      <p>Entre os conflitos mais comuns estão despejos, inadimplência de aluguel, disputas por herança, atraso na entrega de imóveis e contratos irregulares.</p>

      <h2>Por que ter apoio jurídico?</h2>
      <p>Um advogado especializado garante segurança na negociação e evita prejuízos em litígios imobiliários.</p>
    `,
  },
  "direito-penal-empresarial": {
    title: "Direito Penal Empresarial",
    description:
      "Entenda como o Direito Penal Empresarial atua em crimes econômicos, compliance, responsabilidade de sócios e defesa de empresas em investigações.",
    content: `
      <h2>Proteção das Empresas</h2>
      <p>O Direito Penal Empresarial é voltado à prevenção e defesa em casos de infrações cometidas por pessoas físicas ou jurídicas...</p>

      <h2>Áreas de Atuação</h2>
      <ul>
        <li><strong>Crimes econômicos:</strong> como fraudes fiscais, lavagem de dinheiro e sonegação.</li>
        <li><strong>Responsabilidade penal de sócios e administradores:</strong> situações em que gestores podem ser responsabilizados criminalmente.</li>
        <li><strong>Compliance:</strong> implementação de regras internas para prevenção de ilícitos.</li>
        <li><strong>Crimes contra a administração pública:</strong> corrupção, fraude em licitações e tráfico de influência.</li>
      </ul>

      <h2>Prevenção e Gestão de Riscos</h2>
      <p>A adoção de programas de compliance e treinamentos internos são medidas eficazes para reduzir riscos e proteger a reputação da empresa.</p>

      <h2>Atuação do Advogado</h2>
      <p>O advogado penal empresarial atua preventivamente orientando empresas e, quando necessário, na defesa em processos criminais.</p>
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
        <div><Link prefetch href={'/'} ><Image src={'/arrowBack.png'} alt='Arrow Back' width={40} height={40} /></Link></div>
      </header>
      <main className={styles.articlePage}>
        <div className={styles.articleContent}>
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </main>
    </>
  );
}