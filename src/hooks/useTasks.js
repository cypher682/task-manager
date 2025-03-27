import { useState } from 'react';

const useTasks = (initialTasks = []) => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    totalTasks: tasks.length,
    completedTasks: tasks.filter((task) => task.completed).length,
  };
};

export default useTasks;