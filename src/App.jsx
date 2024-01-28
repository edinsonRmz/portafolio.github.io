import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Nav from './Componentes/Nav';
import Aserca from './Componentes/Aserca';
import Proyectos from './Componentes/Proyectos';
import Pie from './Componentes/Pie';
import Descripcion from './Componentes/Descripcion';
import Contacto from './Componentes/Contacto';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Aserca />
              <Descripcion />
              <Proyectos />
              <Pie />
            </div>
          }
        />
        <Route
          path='/contacto'
          element={<Contacto />}
        />
      </Routes>
    </div>
  );
}

export default App;

