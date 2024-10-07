import React from 'react';
import { useUser } from './UserContext';

const UserNameUpdater = () => {
  const { userName, setUserName } = useUser(); // Obtener el nombre actual y la función para actualizarlo

  const handleInputChange = (e) => {
    setUserName(e.target.value); // Actualizar el nombre en el contexto en tiempo real
  };

  return (
    <div>
      <h3>Actualizar Nombre de Usuario</h3>
      <input
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Escribe tu nombre"
      />
    </div>
  );
};

export default UserNameUpdater;
