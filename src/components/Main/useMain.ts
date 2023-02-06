import { useState } from 'react';

import { TaskProps } from '../../types/Task';

export function useMain() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  console.log({ tasks });

  function addNewTask(task: TaskProps) {
    setTasks(state => [task, ...state]);
  }

  function deleteTask(taskToDeleted: string) {
    const tasksFiltered = tasks.filter(task => task.id !== taskToDeleted);

    setTasks(tasksFiltered);
  }

  return { addNewTask, tasks, deleteTask };
}
