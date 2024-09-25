//import React from 'react';
import Card from './Card';

const App = () => {
  const cardsData = [
    {
      title: 'Proyecto A',
      description: 'Descripción del Proyecto A',
      assignedTo: 'Juan Pérez',
      startDate: '2024-09-01',
      endDate: '2024-09-15',
    },
    {
      title: 'Proyecto B',
      description: 'Descripción del Proyecto B',
      assignedTo: 'María Gómez',
      startDate: '2024-09-05',
      endDate: '2024-09-20',
    },
    {
      title: 'Proyecto C',
      description: 'Descripción del Proyecto C',
      assignedTo: 'Pedro Fernández',
      startDate: '2024-09-10',
      endDate: '2024-09-25',
    },
  ];

  return (
    <div>
      <h1>Tarjetas</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            assignedTo={card.assignedTo}
            startDate={card.startDate}
            endDate={card.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
