import { Empty } from '../Empty';
import { Input } from '../Input';
import { Summary } from '../Summary';
import { Task } from '../Task';
import styles from './styles.module.css';

export function Main() {
  const tasks: string[] = ['1'];

  return (
    <main className={styles.main}>
      <Input />
      <section className={styles['tasks-container']}>
        <Summary
          total={2}
          completed={1}
        />
        {tasks.length === 0 && <Empty />}
        {tasks.length !== 0 && (
          <>
            <Task
              content="Uma tarefa legal"
              status="completed"
            />
            <Task
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto quod labore nihil atque nesciunt in consequuntur minima, culpa corporis maiores quis, temporibus velit qui tempore sint consequatur eveniet placeat."
              status="in progress"
            />
          </>
        )}
      </section>
    </main>
  );
}
