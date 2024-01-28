import React from 'react';
import './../../public/css/Proyectos.css';
import Captura from './../../public/Captura.png';

function Proyectos() {
  return (
    <div style={{ backgroundColor: '#fff' }} className="ProyectosContainer">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }} className="TituloProyectos">
        <h1 style={{}} className="ProyectosText">PROYECTOS</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="DescripcionDeProyectos">
        <h3 style={{}} className="AQueIrianMisProyectos">Breve participación en el siguiente proyecto </h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='contenedordeproyectos'>
        <div style={{ textAlign: 'center', margin: '20px' }} className="proyecyo1">
          <a href="https://c12-28-t-node-react-wu3w.vercel.app/" style={{ textDecoration: 'none', color: '#333' }}>
            <img src={Captura} alt="e" style={{ width: '400px', borderRadius: '8px', marginBottom: '10px' }} />
            <h1 style={{}} >E-Commerce Fullstack app</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
