import { PlusCircle } from 'phosphor-react';

import styles from './styles.module.css';
import { InputProps } from './types';
import { useInput } from './useInput';

export function Input({ onAddNewTask }: InputProps) {
  const { handleAddNewTask, handleNewTask, isButtonAddDisabled, newTask } =
    useInput({ onAddNewTask });

  return (
    <form className={styles.input}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.entry}
        value={newTask}
        onChange={handleNewTask}
      />
      <button
        className={styles['button-add']}
        disabled={isButtonAddDisabled}
        onClick={handleAddNewTask}
      >
        Criar
        <PlusCircle />
      </button>
    </form>
  );
}
