import React from 'react';
import { useUser } from './UserContext';

const UserNameDisplay = () => {
  const { userName } = useUser(); // Obtener el nombre del usuario desde el contexto

  return (
    <div>
      <h2>Nombre del Usuario:</h2>
      <p>{userName || "No hay un usuario definido"}</p>
    </div>
  );
};

export default UserNameDisplay;
