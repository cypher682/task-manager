import styles from './Task.module.css';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
      <h3>
        {task.text}
        <button 
          onClick={() => onDelete(task.id)} 
          className={styles.deleteBtn}
          aria-label={`Delete task "${task.text}"`}
        >
          Delete
        </button>
      </h3>
      <p>Created: {new Date(task.date).toLocaleDateString()}</p>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className={styles.checkbox}
        />
        <label htmlFor={`task-${task.id}`}>Mark as complete</label>
      </div>
    </div>
  );
};

export default Task;