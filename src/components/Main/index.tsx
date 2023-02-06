import { Empty } from '../Empty';
import { Input } from '../Input';
import { Summary } from '../Summary';
import { Task } from '../Task';
import styles from './styles.module.css';
import { useMain } from './useMain';

export function Main() {
  const { addNewTask, deleteTask, tasks, updateTask } = useMain();

  return (
    <main className={styles.main}>
      <Input onAddNewTask={addNewTask} />
      <section className={styles['tasks-container']}>
        <Summary
          total={2}
          completed={1}
        />
        {tasks.length === 0 && <Empty />}
        {tasks.length !== 0 &&
          tasks.map(task => (
            <Task
              id={task.id}
              key={task.id}
              content={task.content}
              status={task.status}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          ))}
      </section>
    </main>
  );
}
