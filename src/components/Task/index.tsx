import { CheckCircle, Circle, Trash } from 'phosphor-react';

import styles from './styles.module.css';

type TaskProps = {
  content: string;
  status: 'completed' | 'in progress';
};

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
        <button className={styles['check-circle']}>
          <CheckCircle weight="fill" />
        </button>
      )}
      {status === 'in progress' && (
        <button className={styles.circle}>
          <Circle />
        </button>
      )}
      <p className={contentClassName}>{content}</p>
      <button title="Excluir tarefa">
        <Trash />
      </button>
    </div>
  );
}
