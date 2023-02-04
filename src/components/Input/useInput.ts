import { ChangeEvent, FormEvent, useState } from 'react';

import { TaskProps } from '../../types/Task';
import { InputProps } from './types';

export function useInput({ onAddNewTask }: InputProps) {
  const [newTask, setNewTask] = useState('');

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    const newTaskToAdd: TaskProps = {
      id: crypto.randomUUID(),
      content: newTask.trim(),
      status: 'in progress',
    };

    onAddNewTask(newTaskToAdd);

    setNewTask('');
  }

  const isButtonAddDisabled = newTask.trim() === '';

  return { handleAddNewTask, handleNewTask, isButtonAddDisabled, newTask };
}
