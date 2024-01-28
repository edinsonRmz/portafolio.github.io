import React from 'react';
import { Link } from 'react-router-dom';
import './../css/Descripcion.css';
import HTML from './../Img/html5-original.svg';
import CSS from './../Img/css3-plain.svg';
import JAVASCRIPT from './../Img/javascript-plain.svg';
import BOOTSTRAP from './../Img/bootstrap-plain.svg';
import GITHUB from './../Img/github-original.svg';
import GIT from './../Img/git-plain.svg';
import REACT from './../Img/react-original.svg';
import SQL from './../Img/mysql-original-wordmark.svg';

function Descripcion() {
  return (
    <div className='Contenedor' id='descripcion'>
      <div className="ContenedorTitulo">
        <h1 className="Titulo">ACERCA DE MÍ</h1>
      </div>

      <div className="ContenedorDescrip">
        <h3 className="Descripción">
          Ahora un breve resumen de lo que hago, mis habilidades actuales y mis estudios basados en el ámbito de la computación, programación, diseño y tecnologías.
        </h3>
      </div>

      <div className="ContenedorContexto">
        <p className='Contexto'>
          Soy un desarrollador web especializado en frontend, centrado en la creación de interfaces para sitios web y aplicaciones. Mi enfoque se dirige hacia la mejora continua para alcanzar el éxito en cada proyecto.
          <br />
          Actualmente, estoy cursando la carrera de Ingeniería en Sistemas, con énfasis en el levantamiento de requisitos y el mantenimiento de bases de datos.
          <br />
          Me encanta desafiarme diariamente con proyectos de desarrollo web, buscando constantemente oportunidades laborales que me permitan alcanzar mis metas. Aspiro a seguir aprendiendo y experimentando para lograr tanto mi crecimiento profesional como personal.
          <br />
          Si tienes una oportunidad laboral que se alinee con mis habilidades y experiencias, y que ofrezca un entorno propicio para el crecimiento, no dudes en <Link to="/contacto">contactarme</Link>. Estoy entusiasmado por contribuir y aprender en un entorno dinámico y desafiante.
        </p>
      </div>

      <div className="ContenedorHabilidades">
        <div className="Habilidades">
          <div className='AHTML'>
            <img src={HTML} alt="React HTML Logo" />
          </div>
          <div className='ACSS'>
            <img className='ACSSIMG' src={CSS} alt="React CSS Logo" />
          </div>
          <div className='Abootstrap'>
            <img src={BOOTSTRAP} alt="React Bootstrap Logo" />
          </div>
          <div className='AJAVA'>
            <img src={JAVASCRIPT} alt="React JavaScript Logo" />
          </div>
          <div className='AREACT'>
            <img src={REACT} alt="React React Logo" />
          </div>
          <div className='AGITHUB'>
            <img src={GITHUB} alt="React GitHub Logo" />
          </div>
          <div className='AGIT'>
            <img src={GIT} alt="React Git Logo" />
          </div>
          <div className='ASQL'>
            <img src={SQL} alt="React SQL Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
