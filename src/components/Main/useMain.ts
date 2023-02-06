import { useState } from 'react';

import { TaskProps } from '../../types/Task';

type HandleStatusProps = {
  taskToUpdate: TaskProps;
  tasksFiltered: TaskProps[];
};

export function useMain() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addNewTask(task: TaskProps) {
    setTasks(state => [task, ...state]);
  }

  function deleteTask(taskToDeleted: string) {
    const tasksFiltered = tasks.filter(task => task.id !== taskToDeleted);

    setTasks(tasksFiltered);
  }

  function handleTaskCompleted({
    taskToUpdate,
    tasksFiltered,
  }: HandleStatusProps) {
    const taskUpdated = taskToUpdate;

    taskUpdated.status = 'completed';

    setTasks([...tasksFiltered, taskUpdated]);
  }

  function handleTaskInProgress({
    taskToUpdate,
    tasksFiltered,
  }: HandleStatusProps) {
    const taskUpdated = taskToUpdate;

    taskUpdated.status = 'in progress';

    setTasks([taskUpdated, ...tasksFiltered]);
  }

  function updateTask(taskId: string) {
    const chosenTask = tasks.find(task => task.id === taskId);

    if (!chosenTask) return;

    const tasksFiltered = tasks.filter(task => task.id !== taskId);

    chosenTask.status === 'in progress'
      ? handleTaskCompleted({ taskToUpdate: chosenTask, tasksFiltered })
      : handleTaskInProgress({ taskToUpdate: chosenTask, tasksFiltered });
  }

  return { addNewTask, deleteTask, tasks, updateTask };
}
