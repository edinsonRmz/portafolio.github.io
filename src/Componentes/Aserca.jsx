import React from 'react';
import './../css/Aserca.css';

function Descripcion() {
  const handleDownload = () => {
    const cvUrl = './../../public/EdinsonRamirezA.pdf'; 

    window.open(import.meta.env.BASE_URL + cvUrl, '_blank');
  };

  return (
    <div className="Aserca">
      <div className="Nombre">
        <h1 className="HolaSoyEdinsonRamirezA">Hola soy, Edinson Ramirez A</h1>
      </div>
      <div className="Descripcion">
        <h3 className="DesarrolladorWebFrontend">Desarrollador web, Frontend que me centro en el frontend de sitios web y aplicaciones web. Y se enfoca en la continua mejora para alcanzar el éxito.</h3>
      </div>

      <div className="Contenedor-button">
        <button className="Contato" onClick={handleDownload}>
          Descargar CV
        </button>
      </div>
    </div>
  );
}

export default Descripcion;
