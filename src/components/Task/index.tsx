import { CheckCircle, Circle, Trash } from 'phosphor-react';

import { TaskProps } from '../../types/Task';
import styles from './styles.module.css';

export function Task({ content, status }: TaskProps) {
  const taskClassName =
    status === 'in progress'
      ? styles.task
      : `${styles.task} ${styles['-without-border']}`;

  const contentClassName =
    status === 'in progress'
      ? styles.content
      : `${styles.content} ${styles['-cut']}`;

  return (
    <div className={taskClassName}>
      {status === 'completed' && (
        <button
          className={styles['check-circle']}
          title="Desmarcar conclusão"
        >
          <CheckCircle weight="fill" />
        </button>
      )}
      {status === 'in progress' && (
        <button
          className={styles.circle}
          title="Marcar conclusão"
        >
          <Circle />
        </button>
      )}
      <p className={contentClassName}>{content}</p>
      <button
        title="Excluir tarefa"
        className={styles.trash}
      >
        <Trash />
      </button>
    </div>
  );
}
