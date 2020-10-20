import React from 'react';
import logo from '../../img/logo.png'
import face from '../../img/png/facebook.png'
import insta from '../../img/png/instagram.png'
import youtube from '../../img/png/youtube.png'
import whatsapp from '../../img/png/whatsapp.png'

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='container d-block'>
            <div className="row">
                <div className="col"> <img className="w-25" src={logo} /> </div>
                <div className="col">
                    <img className="w-25" src={face} />
                    <img className="w-25" src={insta} />
                    <img className="w-25" src={youtube} />
                    <img className="w-25" src={whatsapp} />

                </div>
            </div>
            <div className="row d-flex align-items-center">
                <div className="col list-unstyled">
                    <h4>Centro de Ayuda</h4>
                    <li><Link>Llamanos al +5691234567</Link></li>
                    <li><Link>cliente@recilate.cl</Link></li>
                    <li><Link>Registrate</Link></li>

                </div>
                <ul className="col list-unstyled">
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