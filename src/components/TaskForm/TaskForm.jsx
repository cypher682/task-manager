import { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      date: new Date().toISOString()
    };
    
    onAdd(newTask);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className={styles.input}
        aria-label="Task description"
      />
      <button type="submit" className={styles.submitButton}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;