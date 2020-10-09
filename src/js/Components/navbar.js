import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'


const Navbar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-md navbar-success sticky-top">
            <div className="collapse navbar-collapse" id="navbarCollapse">

               <ul className="navbar-nav mr-auto d-flex justify-content-between align-items-center">
                  <li className="nav-item active">
                     <Link className="nav-link " href="#!">Inicio <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#!">Nosotros</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#!">Quiero Recolectar</Link>
                  </li>
                  <img className='w-25 h-25 ' src={logo} alt="Reciclaje Logo" />
                  <li className="nav-item">
                     <Link className="nav-link" href="#!">Quiero Reciclar</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" href="#!">Contacto</Link>
                  </li>
               </ul>

            </div>

         </nav>
      </>

   );
}

export default Navbar;
