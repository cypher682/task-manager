import { useState } from 'react';
import styles from './App.module.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import useTasks from './hooks/useTasks';

function App() {
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    totalTasks,
    completedTasks,
  } = useTasks([]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Task Manager</h1>
        <p>Keep track of your daily tasks</p>
      </header>
      <main className={styles.main}>
        <TaskForm onAdd={addTask} />
        <TaskList 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleTask} 
        />
      </main>
      <footer className={styles.footer}>
        <p>Total tasks: {totalTasks} | Completed: {completedTasks}</p>
        <p className={styles.status}>Status: Using Local State</p>
      </footer>
    </div>
  );
}

export default App;