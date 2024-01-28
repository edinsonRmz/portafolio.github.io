import React from 'react';
import './../css/Proyectos.css';
import Captura from './../../public/Captura.png';

function Proyectos() {
  return (
    <div className="ProyectosContainer">
      <div className="TituloProyectos">
        <h1 className="ProyectosText">PROYECTOS</h1>
      </div>
      <div className="DescripcionDeProyectos">
        <h3 className="AQueIrianMisProyectos">Breve participación en el siguiente proyecto </h3>
      </div>
      <div className='contenedordeproyectos'>
        <div className="proyecyo1" > 
        <a href="https://c12-28-t-node-react-wu3w.vercel.app/">
          <img src={Captura} alt="e" />
          <h1>E-Commerce Fullstack app</h1>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
