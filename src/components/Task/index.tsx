import { CheckCircle, Circle, Trash } from 'phosphor-react';

import { TaskPropsWithFunctions } from '../../types/Task';
import styles from './styles.module.css';
import { useTask } from './useTask';

export function Task({
  id,
  content,
  status,
  onDelete,
  onUpdate,
}: TaskPropsWithFunctions) {
  const {
    contentClassName,
    handleDeleteTask,
    handleUpdateTask,
    taskClassName,
  } = useTask({
    id,
    status,
    onDelete,
    onUpdate,
  });

  return (
    <div className={taskClassName}>
      {status === 'completed' && (
        <button
          className={styles['check-circle']}
          title="Desmarcar conclusão"
          onClick={handleUpdateTask}
        >
          <CheckCircle weight="fill" />
        </button>
      )}
      {status === 'in progress' && (
        <button
          className={styles.circle}
          title="Marcar conclusão"
          onClick={handleUpdateTask}
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
