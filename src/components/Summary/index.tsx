import styles from './styles.module.css';

type SummaryProps = {
  total: number;
  completed: number;
};

export function Summary({ total, completed }: SummaryProps) {
  return (
    <div className={styles.summary}>
      <p className={styles.created}>
        Tarefas criadas <strong className={styles.emphasis}>{total}</strong>
      </p>
      <p className={styles.complete}>
        Concluídas
        <strong className={styles.emphasis}>
          {completed} de {total}
        </strong>
      </p>
    </div>
  );
}
