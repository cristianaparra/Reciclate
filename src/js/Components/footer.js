import React from 'react';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container d-block  '>
            <div className="row">
                <div className="col"> <img className="w-25" src={logo} /> </div>
                <div className="col"><img className="w-25" src='../../img/png/001-facebook.png' /></div>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col list-unstyled ">
                    <h4>Centro de Ayuda</h4>
                    <li><Link>Llamanos al +5691234567</Link></li>
                    <li><Link>cliente@recilate.cl</Link></li>
                    <li><Link>Registrate</Link></li>
                   
                </div>
                <ul className="col list-unstyled ">
                    <h4>Sobre nosotros</h4>
                    <li><Link>Direccion: Hola 234,santiago, chile</Link></li>
                    <li><Link>Quienes somos</Link></li>
                    <li><Link>Registrate</Link></li>
                    
                </ul>

            </div>
        </footer>

    );
}

export default Footer;