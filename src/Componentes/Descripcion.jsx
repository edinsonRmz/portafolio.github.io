import React from 'react';
import { Link } from 'react-router-dom';

import HTML from './../../public/html5-original.svg';
import CSS from './../../public/css3-plain.svg';
import JAVASCRIPT from './../../public/javascript-plain.svg';
import BOOTSTRAP from './../../public/bootstrap-plain.svg';
import GITHUB from './../../public/github-original.svg';
import GIT from './../../public/git-plain.svg';
import REACT from './../../public/react-original.svg';
import SQL from './../../public/mysql-original-wordmark.svg';

function Descripcion() {
  const styles = {
    Contenedor: {
      padding: '20px',
    },
    ContenedorTitulo: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    Titulo: {
      fontSize: '28px',
      color: '#000',
    },
    ContenedorDescrip: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    Descripción: {
      fontSize: '20px',
      color: '#000',
    },
    ContenedorContexto: {
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'justify',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    Contexto: {
      fontSize: '16px',
      color: '#000',
      textAlign: 'center',
      padding: '30px',
    },
    ContenedorHabilidades: {
      textAlign: 'center',
      width: '100%',
    },
    Habilidades: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8b8b8b23',
      padding: '10px',
    },
    AHTML: {
      display: 'flex',
      width: '110px',
      height: '110px',
      backgroundColor: '#eeeeee00',
      borderRadius: '50%',
      margin: '5px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    Abootstrap: {
      ...styles.AHTML,
    },
    ACSS: {
      ...styles.AHTML,
    },
    AJAVA: {
      ...styles.AHTML,
    },
    AREACT: {
      ...styles.AHTML,
    },
    AGITHUB: {
      ...styles.AHTML,
    },
    AGIT: {
      ...styles.AHTML,
    },
    ASQL: {
      ...styles.AHTML,
    },
    ACSSIMG: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  };

  return (
    <div style={styles.Contenedor} className='Contenedor' id='descripcion'>
      <div style={styles.ContenedorTitulo} className="ContenedorTitulo">
        <h1 style={styles.Titulo} className="Titulo">ACERCA DE MÍ</h1>
      </div>

      <div style={styles.ContenedorDescrip} className="ContenedorDescrip">
        <h3 style={styles.Descripción} className="Descripción">
          Ahora un breve resumen de lo que hago, mis habilidades actuales y mis estudios basados en el ámbito de la computación, programación, diseño y tecnologías.
        </h3>
      </div>

      <div style={styles.ContenedorContexto} className="ContenedorContexto">
        <p style={styles.Contexto} className='Contexto'>
          Soy un desarrollador web especializado en frontend, centrado en la creación de interfaces para sitios web y aplicaciones. Mi enfoque se dirige hacia la mejora continua para alcanzar el éxito en cada proyecto.
          <br />
          Actualmente, estoy cursando la carrera de Ingeniería en Sistemas, con énfasis en el levantamiento de requisitos y el mantenimiento de bases de datos.
          <br />
          Me encanta desafiarme diariamente con proyectos de desarrollo web, buscando constantemente oportunidades laborales que me permitan alcanzar mis metas. Aspiro a seguir aprendiendo y experimentando para lograr tanto mi crecimiento profesional como personal.
          <br />
          Si tienes una oportunidad laboral que se alinee con mis habilidades y experiencias, y que ofrezca un entorno propicio para el crecimiento, no dudes en <Link to="/contacto">contactarme</Link>. Estoy entusiasmado por contribuir y aprender en un entorno dinámico y desafiante.
        </p>
      </div>

      <div style={styles.ContenedorHabilidades} className="ContenedorHabilidades">
        <div style={styles.Habilidades} className="Habilidades">
          <div style={styles.AHTML} className='AHTML'>
            <img style={styles.ACSSIMG} src={HTML} alt="React HTML Logo" />
          </div>
          <div style={styles.ACSS} className='ACSS'>
            <img style={styles.ACSSIMG} src={CSS} alt="React CSS Logo" />
          </div>
          <div style={styles.Abootstrap} className='Abootstrap'>
            <img style={styles.ACSSIMG} src={BOOTSTRAP} alt="React Bootstrap Logo" />
          </div>
          <div style={styles.AJAVA} className='AJAVA'>
            <img style={styles.ACSSIMG} src={JAVASCRIPT} alt="React JavaScript Logo" />
          </div>
          <div style={styles.AREACT} className='AREACT'>
            <img style={styles.ACSSIMG} src={REACT} alt="React React Logo" />
          </div>
          <div style={styles.AGITHUB} className='AGITHUB'>
            <img style={styles.ACSSIMG} src={GITHUB} alt="React GitHub Logo" />
          </div>
          <div style={styles.AGIT} className='AGIT'>
            <img style={styles.ACSSIMG} src={GIT} alt="React Git Logo" />
          </div>
          <div style={styles.ASQL} className='ASQL'>
            <img style={styles.ACSSIMG} src={SQL} alt="React SQL Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
