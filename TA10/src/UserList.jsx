import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data); // Establece los usuarios en el estado
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false); // Cambia el estado de carga
      }
    };

    fetchUsers();
  }, []); // Dependencias vacías para ejecutar solo una vez

  // Manejo del estado de carga
  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="user-list">
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="user-item">
            <strong>Nombre:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
