import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) { // Verifica que la tarea no esté vacía
      if (editIndex !== null) {
        // Si estamos editando una tarea, actualizamos en lugar de agregar
        const updatedTasks = tasks.map((t, index) => (index === editIndex ? task : t));
        setTasks(updatedTasks);
        setEditIndex(null); // Reinicia el índice de edición
      } else {
        // Agrega la tarea a la lista
        setTasks([...tasks, task]);
      }
      setTask(''); // Limpia el input
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]); // Carga la tarea en el input
    setEditIndex(index); // Establece el índice de la tarea a editar
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
        <button type="submit" className="add-task-button">{editIndex !== null ? 'Actualizar Tarea' : 'Agregar Tarea'}</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task} 
            <button onClick={() => handleEditTask(index)} className="edit-task-button">Editar</button>
            <button onClick={() => handleDeleteTask(index)} className="delete-task-button">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
