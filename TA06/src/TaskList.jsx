import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (task.trim()) { // Verifica que la tarea no esté vacía
      setTasks([...tasks, task]);
      setTask('');
    }
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
          <li key={index} className="task-item">{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
