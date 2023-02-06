import { CheckCircle, Circle, Trash } from 'phosphor-react';

import { TaskPropsWithDelete } from '../../types/Task';
import styles from './styles.module.css';
import { useTask } from './useTask';

export function Task({ id, content, status, onDelete }: TaskPropsWithDelete) {
  const { taskClassName, contentClassName, handleDeleteTask } = useTask({
    id,
    status,
    onDelete,
  });

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
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  );
}
