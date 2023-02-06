import { useEffect, useState } from 'react';

import { TaskProps } from '../../types/Task';

type HandleStatusProps = {
  taskToUpdate: TaskProps;
  tasksFiltered: TaskProps[];
};

export function useMain() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function addNewTask(task: TaskProps) {
    setTasks(state => [task, ...state]);
  }

  function deleteTask(taskToDeleted: string) {
    const tasksFiltered = tasks.filter(task => task.id !== taskToDeleted);

    setTasks(tasksFiltered);
  }

  function changeTaskToComplete({
    taskToUpdate,
    tasksFiltered,
  }: HandleStatusProps) {
    const taskUpdated = taskToUpdate;

    taskUpdated.status = 'completed';

    setTasks([...tasksFiltered, taskUpdated]);
  }

  function changeTaskToInProgress({
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
      ? changeTaskToComplete({ taskToUpdate: chosenTask, tasksFiltered })
      : changeTaskToInProgress({ taskToUpdate: chosenTask, tasksFiltered });
  }

  function handleTasksCompleted() {
    const totalOfTasksCompleted = tasks.filter(
      task => task.status === 'completed'
    ).length;

    setTasksCompleted(totalOfTasksCompleted);
  }

  useEffect(() => {
    handleTasksCompleted();
  }, [tasks]);

  return { addNewTask, deleteTask, tasks, tasksCompleted, updateTask };
}
