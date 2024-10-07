
import './Card.css';

// eslint-disable-next-line react/prop-types
const Card = ({ title, description, assignedTo, startDate, endDate }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-assigned">Asignado a: {assignedTo}</p>
      <p className="card-dates">
        Inicio: {startDate} - Fin: {endDate}
      </p>
    </div>
  );
};

export default Card;
