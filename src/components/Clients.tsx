'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Clients.module.css';

interface Clients {
  name: string;
  profession: string;
  message: string;
  image: string;
}

const clients: Clients[] = [
  {
    name: 'Mariana',
    profession: 'Empresária do setor imobiliário',
    message:
      'O time da M&S foi essencial para resolver uma questão complexa envolvendo um contrato de compra e venda. Sempre atenciosos, me passaram muita segurança e clareza em cada etapa do processo.',
    image: '/testimony1.jpg',
  },
  {
    name: 'Ricardo',
    profession: 'Engenheiro Civil',
    message:
      'Precisei de orientação em um processo trabalhista e fui muito bem atendido. O advogado explicou tudo de forma simples e direta, e conseguimos um resultado muito melhor do que eu esperava.',
    image: '/testimony2.jpg',
  },
  {
    name: 'Fernanda',
    profession: 'Professora Universitária',
    message:
      'Eu tinha muitas dúvidas jurídicas no âmbito civil, principalmente em relação a um inventário. A equipe da M&S foi extremamente profissional e acolhedora, me ajudando a resolver tudo de forma rápida e tranquila.',
    image: '/testimony3.jpg',
  },
];

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.clientsSection} id='clients'>
      <div>
        <h2 className={styles.title}>O que nossos clientes dizem</h2>
      </div>

      <div className={styles.clientsContainer}>
        <div className={styles.clientsWrapper}>
          {clients.map((client, index) => (
            <div
              key={index}
              className={`${styles.clientCard} ${
                index === currentIndex ? styles.active : styles.inactive
              }`}
            >
              <div className={styles.clientInfo}>
                <Image
                  src={client.image}
                  alt={client.name}
                  className={styles.clientImage}
                  width={75}
                  height={75}
                />
                <div className={styles.clientText}>
                  <h3>{client.name}</h3>
                  <p>{client.profession}</p>
                </div>
              </div>

              <p className={styles.clientMessage}>{client.message}</p>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
            <button onClick={handlePrevious} className={styles.arrowButton}>
              <Image src={'./arrowtop.svg'} alt="Anterior" width={30} height={30} />
            </button>
            <div className={styles.divider}></div>
            <button onClick={handleNext} className={styles.arrowButton}>
              <Image src={'./arrowbottom.svg'} alt="Próximo" width={30} height={30} />
            </button>
        </div>
      </div>
    </section>
  );
}
