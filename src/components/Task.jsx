import React from 'react';
import styles from './Task.module.css';
import { Trash, CheckCircle, Circle } from 'lucide-react'; 

function Task({ task, toggleTask, deleteTask }) {
  return (
    <li className={styles.taskItem}>
      
      <span className={`${styles.taskText} ${task.completed ? styles.completed : ''}`}>
        {task.text}
      </span>
      
      <button 
        className={`${styles.btnAccion} ${styles.btnToggle}`} 
        onClick={() => toggleTask(task.id)}
        title={task.completed ? "Desmarcar tarea" : "Completar tarea"}
      >
        {task.completed ? <CheckCircle size={22} /> : <Circle size={22} />}
      </button>
      
      <button 
        className={`${styles.btnAccion} ${styles.btnEliminar}`} 
        onClick={() => deleteTask(task.id)}
        title="Eliminar tarea"
      >
        <Trash size={22} />
      </button>
    </li>
  );
}

export default Task;