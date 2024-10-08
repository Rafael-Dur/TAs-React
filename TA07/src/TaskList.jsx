import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]); // Agrega la tarea a la lista
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-list-container">
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Ingresa una nueva tarea"
          className="task-input"
        />
        <button type="submit" className="add-task-button">Agregar Tarea</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task} 
            <button onClick={() => handleDeleteTask(index)} className="delete-task-button">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
