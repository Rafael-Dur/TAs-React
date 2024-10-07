import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <h1>Mis Tarjetas</h1>
      <div className="card-container">
        <Card>
          <h2 className="card-title">Primer Proyecto</h2>
          <p className="card-description">Descripción del Proyecto 1</p>
          <p className="card-assigned">Asignado a: Ramón Gómez</p>
          <p className="card-dates">Inicio: 2024-09-01 - Fin: 2024-09-15</p>
        </Card>

        <Card>
          <h2 className="card-title">Segundo Proyecto</h2>
          <p className="card-description">Descripción del Proyecto 2</p>
          <p className="card-assigned">Asignado a: Carla Ortega</p>
          <p className="card-dates">Inicio: 2024-09-05 - Fin: 2024-09-20</p>
        </Card>

        <Card>
          <h2 className="card-title">Tercer Proyecto</h2>
          <p className="card-description">Descripción del Proyecto 3</p>
          <p className="card-assigned">Asignado a: Jorge Sánchez</p>
          <p className="card-dates">Inicio: 2024-09-10 - Fin: 2024-09-25</p>
        </Card>
      </div>
    </div>
  );
};

export default App;
