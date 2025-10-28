import Image from "next/image";
import styles from '../styles/Faq.module.css'

export function Faq() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Perguntas Frequentes</h2>
      </div>

      <div className={styles.questionsContainer}>
        {/* Pergunta 1 */}
        <div className={styles.questionRow}>
          <Image
            src="/questionIcon.png"
            alt="Ícone de pergunta"
            width={50}
            height={50}
            className={styles.iconBorder}
          />
          <p className={styles.questionText}>
            COMO FUNCIONA O PRIMEIRO ATENDIMENTO?
          </p>
        </div>
        <div className={styles.answerRow}>
          <p className={styles.answerText}>
            O primeiro atendimento é voltado para entender o seu caso e orientar
            sobre as possibilidades jurídicas. Após essa conversa inicial, é
            definido o melhor caminho para seguir com segurança e clareza.
          </p>
          <Image
            src="/user.png"
            alt="Ícone de usuário"
            width={50}
            height={50}
            className={styles.iconBorderGray}
          />
        </div>

        {/* Pergunta 2 */}
        <div className={styles.questionRow}>
          <Image
            src="/questionIcon.png"
            alt="Ícone de pergunta"
            width={50}
            height={50}
            className={styles.iconBorder}
          />
          <p className={styles.questionText}>
            O ESCRITÓRIO ATENDE QUAIS ÁREAS DO DIREITO?
          </p>
        </div>
        <div className={styles.answerRow}>
          <p className={styles.answerText}>
            Atuamos em diversas áreas, com foco em Direito Civil, Trabalhista e
            Empresarial. Cada caso é acompanhado com atenção individualizada e
            compromisso com os melhores resultados.
          </p>
          <Image
            src="/user.png"
            alt="Ícone de usuário"
            width={50}
            height={50}
            className={styles.iconBorderGray}
          />
        </div>

        {/* Pergunta 3 */}
        <div className={styles.questionRow}>
          <Image
            src="/questionIcon.png"
            alt="Ícone de pergunta"
            width={50}
            height={50}
            className={styles.iconBorder}
          />
          <p className={styles.questionText}>
            POSSO TIRAR DÚVIDAS ONLINE?
          </p>
        </div>
        <div className={styles.answerRow}>
          <p className={styles.answerText}>
            Sim. Oferecemos atendimentos online para facilitar o contato e
            garantir praticidade, mantendo o mesmo padrão de excelência dos
            atendimentos presenciais.
          </p>
          <Image
            src="/user.png"
            alt="Ícone de usuário"
            width={50}
            height={50}
            className={styles.iconBorderGray}
          />
        </div>
      </div>
    </section>
  );
}
