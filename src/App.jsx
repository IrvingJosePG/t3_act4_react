import React, { useState } from 'react';
import Task from './components/Task';
import styles from './App.module.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), text: 'Aprender las bases de React', completed: true },
    { id: crypto.randomUUID(), text: 'Desplegar proyecto', completed: false }
  ]);
  
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === '') return;
    
    const newTask = {
      id: crypto.randomUUID(),
      text: newTaskText,
      completed: false
    };
    
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Control - Tareas</h1>
      <form onSubmit={addTask} className={styles.form}>
        <input 
          type="text" 
          value={newTaskText} 
          onChange={(e) => setNewTaskText(e.target.value)} 
          placeholder="Escribe una nueva tarea..."
          className={styles.input}
        />
        <button type="submit" className={styles.btnAgregar}>Agregar</button>
      </form>

      <ul className={styles.taskList}>
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task} 
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;