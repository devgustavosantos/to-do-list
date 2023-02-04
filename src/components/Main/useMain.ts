import { useState } from 'react';

import { TaskProps } from '../../types/Task';

export function useMain() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addNewTask(task: TaskProps) {
    setTasks(state => [task, ...state]);
  }

  return { addNewTask, tasks };
}
