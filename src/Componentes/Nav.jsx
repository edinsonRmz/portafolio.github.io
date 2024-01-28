import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Avatar from './../../public/avataaars.png';
import './../../public/css/Nav.css';

function Nav() {
 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () => {
  setMenuOpen(!menuOpen);
 };

 const scrollToTop = () => {
  setMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
  scroll.scrollToTop();
 };

 return (
  <div className="ContenedorNav">
   <nav className='navBar'>
    <div className="ContenedorImg">
     <div className="img">
      <RouterLink to="/" className="likeInicio" onClick={scrollToTop}>
       <img className="imgAvatar" src={Avatar} alt="Avatar" />
      </RouterLink>
     </div>
    </div>

    <div className='contenedorNombre'>
     <h1 className="Nombre">Edinson Ramirez A</h1>
    </div>

    {/* Botón de hamburguesa para pantallas pequeñas */}
    <div className="MenuIcon" onClick={toggleMenu}>
     <span></span>
     <span></span>
     <span></span>
    </div>

    <div className={`ContenedorLista ${menuOpen ? 'active' : ''}`}>
     <ul className="Lista">
      <li>
       <RouterLink to="/" className="Link likeInicio" onClick={scrollToTop}>
        Inicio
       </RouterLink>
      </li>
      <li>
       <RouterLink to="/Contacto" className="Link LinkContacto" onClick={scrollToTop}>
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
