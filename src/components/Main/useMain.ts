import { useEffect, useState } from 'react';

import { TaskProps } from '../../types/Task';
import { AlertMessages } from './alertMessages';

type HandleStatusProps = {
  taskToUpdate: TaskProps;
  tasksFiltered: TaskProps[];
};

export function useMain() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  const { taskAdded, taskCompleted, onDeleteTask } = AlertMessages();

  function addNewTask(task: TaskProps) {
    const tasksUpdated = [task, ...tasks];

    setTasks(tasksUpdated);

    saveOnMemory(tasksUpdated);

    taskAdded();
  }

  async function deleteTask(taskToDeleted: string) {
    await onDeleteTask();

    const tasksFiltered = tasks.filter(task => task.id !== taskToDeleted);

    setTasks(tasksFiltered);

    saveOnMemory(tasksFiltered);
  }

  function changeTaskToComplete({
    taskToUpdate,
    tasksFiltered,
  }: HandleStatusProps) {
    const taskUpdated = taskToUpdate;

    taskUpdated.status = 'completed';

    const tasksUpdated = [...tasksFiltered, taskUpdated];

    setTasks(tasksUpdated);

    taskCompleted();

    return tasksUpdated;
  }

  function changeTaskToInProgress({
    taskToUpdate,
    tasksFiltered,
  }: HandleStatusProps) {
    const taskUpdated = taskToUpdate;

    taskUpdated.status = 'in progress';

    const tasksUpdated = [taskUpdated, ...tasksFiltered];

    setTasks(tasksUpdated);

    return tasksUpdated;
  }

  function updateTask(taskId: string) {
    const chosenTask = tasks.find(task => task.id === taskId);

    if (!chosenTask) return;

    const tasksFiltered = tasks.filter(task => task.id !== taskId);

    const tasksUpdated =
      chosenTask.status === 'in progress'
        ? changeTaskToComplete({ taskToUpdate: chosenTask, tasksFiltered })
        : changeTaskToInProgress({ taskToUpdate: chosenTask, tasksFiltered });

    saveOnMemory(tasksUpdated);
  }

  function handleTasksCompleted() {
    const totalOfTasksCompleted = tasks.filter(
      task => task.status === 'completed'
    ).length;

    setTasksCompleted(totalOfTasksCompleted);
  }

  function saveOnMemory(tasksUpdated: TaskProps[]) {
    localStorage.setItem('@todo_list:tasks', JSON.stringify(tasksUpdated));
  }

  function getTasksSaveOnMemory() {
    const tasksSaveOnMemory = localStorage.getItem('@todo_list:tasks');

    if (tasksSaveOnMemory) {
      setTasks(JSON.parse(tasksSaveOnMemory));
    }
  }

  useEffect(() => {
    handleTasksCompleted();
  }, [tasks]);

  useEffect(() => {
    getTasksSaveOnMemory();
  }, []);

  return { addNewTask, deleteTask, tasks, tasksCompleted, updateTask };
}
