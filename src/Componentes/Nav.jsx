import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Avatar from './../../public/avataaars.png';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    setMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
    scroll.scrollToTop();
  };

  const styles = {
    ContenedorNav: {
      padding: '1.2rem 0',
      boxShadow: 'none',
      zIndex: 'auto',
    },
    NavBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '3.25rem',
    },
    ContenedorImg: {
      display: 'flex',
      alignItems: 'center',
    },
    Img: {
      marginRight: '1rem',
    },
    ImgAvatar: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
    },
    ContenedorNombre: {
      textAlign: 'center',
    },
    ContenedorLista: {
      display: 'flex',
    },
    Lista: {
      listStyle: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
    },
    ListaLi: {
      margin: '0',
    },
    Link: {
      fontSize: '18px',
      color: '#000',
      textDecoration: 'none',
    },
    LikeInicio: {},
    MediaQuery: {
      Lista: {
        display: 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: '0',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: '1',
      },
      ListaActive: {
        display: 'flex',
      },
      ListaLi: {
        margin: '10px 0',
      },
      MenuIcon: {
        display: 'block',
        cursor: 'pointer',
      },
      MenuIconSpan: {
        display: 'block',
        width: '25px',
        height: '3px',
        backgroundColor: '#000',
        margin: '5px 0',
      },
    },
  };

  return (
    <div style={styles.ContenedorNav} className="ContenedorNav">
      <nav style={styles.NavBar} className="navBar">
        <div style={styles.ContenedorImg} className="ContenedorImg">
          <div style={styles.Img} className="img">
            <RouterLink to="/" className={`likeInicio ${styles.LikeInicio}`} onClick={scrollToTop}>
              <img style={styles.ImgAvatar} src={Avatar} alt="Avatar" />
            </RouterLink>
          </div>
        </div>

        <div style={styles.ContenedorNombre} className="contenedorNombre">
          <h1 className="Nombre">Edinson Ramirez A</h1>
        </div>

        {/* Botón de hamburguesa para pantallas pequeñas */}
        <div style={styles.MediaQuery.MenuIcon} className="MenuIcon" onClick={toggleMenu}>
          <span style={styles.MediaQuery.MenuIconSpan}></span>
          <span style={styles.MediaQuery.MenuIconSpan}></span>
          <span style={styles.MediaQuery.MenuIconSpan}></span>
        </div>

        <div style={styles.MediaQuery.Lista} className={`ContenedorLista ${menuOpen ? 'active' : ''}`}>
          <ul style={styles.MediaQuery.Lista} className="Lista">
            <li style={styles.MediaQuery.ListaLi}>
              <RouterLink style={styles.Link} to="/" className={`Link likeInicio`} onClick={scrollToTop}>
                Inicio
              </RouterLink>
            </li>
            <li style={styles.MediaQuery.ListaLi}>
              <RouterLink style={styles.Link} to="/Contacto" className={`Link LinkContacto`} onClick={scrollToTop}>
                Contacto
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
