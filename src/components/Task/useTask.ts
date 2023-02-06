import { TaskPropsWithDelete } from '../../types/Task';
import styles from './styles.module.css';

export function useTask({ id, status, onDelete }: TaskPropsWithDelete) {
  const taskClassName =
    status === 'in progress'
      ? styles.task
      : `${styles.task} ${styles['-without-border']}`;

  const contentClassName =
    status === 'in progress'
      ? styles.content
      : `${styles.content} ${styles['-cut']}`;

  function handleDeleteTask() {
    onDelete(id);
  }

  return { taskClassName, contentClassName, handleDeleteTask };
}
