import React, { useState } from 'react';
import './ToggleText.css';
import cybertruck from './cybertruck.png';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      {/* Caja contenedora con un margen de 20px */}
      <div className="box">
        {/* Botón que alterna la visibilidad del texto */}
        <button onClick={toggleText} className="toggle-button">
          {isVisible ? 'Ocultar texto' : 'Mostrar texto'}
        </button>

        {/* Texto que aparece y desaparece */}
        {isVisible && (
          <div>
            <h1 className="toggle-title">Tesla Cybertruck</h1> {}
            <p className="toggle-text">
        El Tesla Cybertruck es un vehículo totalmente eléctrico de tipo pickup que fue presentado por Tesla en noviembre de 2019. 
        El diseño futurista y minimalista del Cybertruck es uno de sus rasgos más distintivos, con una carrocería hecha de acero 
        inoxidable ultrarresistente. Algunas características clave del Tesla Cybertruck incluyen:<br />

        Chasis: El Cybertruck tiene una estructura exterior hecha de acero inoxidable laminado en frío, lo que lo hace extremadamente 
        resistente a impactos, arañazos y corrosión.<br />
        Rendimiento: Dependiendo del modelo, ofrece tracción en dos o en las cuatro ruedas, y una aceleración de 0 a 100 km/h en menos 
        de 3 segundos en su versión más potente.<br />
        Autonomía: Las versiones varían entre 400 y 800 kilómetros de autonomía con una sola carga, dependiendo del modelo y la 
        configuración de las baterías.<br />
        Carga: Tiene una capacidad de carga superior a 1,500 kg y puede remolcar hasta 6,350 kg, siendo una opción atractiva tanto 
        para el uso recreativo como para el trabajo.<br />
        Interior: El interior es espacioso y minimalista, con asientos para seis personas y una pantalla táctil central de 17 pulgadas.<br />
        Sistemas avanzados: Equipado con el hardware necesario para la conducción autónoma total, que se espera ser habilitada a través 
        de actualizaciones de software futuras.</p>

          {/* Imagen que aparece debajo del texto */}
          <img
            src={cybertruck}
            className="toggle-image"
          />
        </div>
      )}
      </div>
    </div>
  );
};

export default ToggleText;
