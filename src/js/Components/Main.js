import React from 'react';
import ImgRecolector from '../../img/vivianne-lemay-drMdwoydMVI-unsplash.png'
import ImgUsuario from '../../img/alfonso-navarro-qph7tJfcDys-unsplash.png'

const Main = () => {
    return (
        
            <div className='row'>
                <div className='col-6' >
                    <img className='vw-100 vh-100' src={ImgRecolector}></img>
                Recolecta
            <button className='btn btn-info'>Entrar</button>
                </div>
                <div className='col-6'>
                    <img className='vw-100 vh-100' src={ImgUsuario} />
                    Reciclar<button className='btn btn-info'>Entrar</button>
                </div>
            </div>

        
    );
}

export default Main;

