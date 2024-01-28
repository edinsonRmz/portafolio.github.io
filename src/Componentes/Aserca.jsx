import React from 'react';

function Descripcion() {
  const handleDownload = () => {
    const cvUrl = './../../public/EdinsonRamirezA.pdf';

    window.open(import.meta.env.BASE_URL + cvUrl, '_blank');
  };

  const styles = {
    Aserca: {
      textAlign: 'center',
      margin: '20px',
    },
    Nombre: {
      marginBottom: '40px',
    },
    HolaSoyEdinsonRamirezA: {
      fontSize: '40px',
      color: '#000',
    },
    Descripcion: {
      marginBottom: '50px',
    },
    DesarrolladorWebFrontend: {
      fontSize: '20px',
      color: '#000',
    },
    ContenedorButton: {
      marginTop: '20px',
    },
    Contato: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    ContatoHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.Aserca}>
      <div style={styles.Nombre}>
        <h1 style={styles.HolaSoyEdinsonRamirezA}>Hola soy, Edinson Ramirez A</h1>
      </div>
      <div style={styles.Descripcion}>
        <h3 style={styles.DesarrolladorWebFrontend}>Desarrollador web, Frontend que me centro en el frontend de sitios web y aplicaciones web. Y se enfoca en la continua mejora para alcanzar el éxito.</h3>
      </div>

      <div style={styles.ContenedorButton}>
        <button style={styles.Contato} onClick={handleDownload}>
          Descargar CV
        </button>
      </div>
    </div>
  );
}

export default Descripcion;
