'use client';

import Link from 'next/link';
import styles from '../styles/ArticleComp.module.css';

export function Articles() {
    const articles = [
        {
            title: "Direito Trabalhista",
            description: "Entenda seus direitos no ambiente de trabalho e como a lei pode protegê-lo.",
            image: "/laborLaw.jpg",
            slug: "direito-trabalhista"
        },
        {
            title: "Direito Imobiliário",
            description: "Dicas e informações sobre contratos de aluguel, compra e venda de imóveis.",
            image: "/realEstateLaw.jpg",
            slug: "direito-imobiliario"
        },
        {
            title: "Direito Penal Empresarial",
            description: "Saiba como proteger sua empresa de riscos legais e processos criminais.",
            image: "/corporateCriminalLaw.jpg",
            slug: "direito-penal-empresarial"
        }
    ];

    return (
        <section className={styles.articlesSection}>
            <div>
                <h2 className={styles.title}>Conteúdos Jurídicos</h2>
            </div>
            <div className={styles.articlesGrid}>
                {articles.map((article, index) => (
                    <Link 
                        prefetch
                        key={index} 
                        href={`/articles/${article.slug}`} 
                        className={styles.card}
                    >
                        <div 
                            className={styles.cardImage} 
                            style={{ backgroundImage: `url(${article.image})` }}
                        ></div>
                        
                        <div className={styles.overlay}></div>

                        <div className={styles.cardText}>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>

                        <div className={styles.tooltip}>
                            Clique para ver mais
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
