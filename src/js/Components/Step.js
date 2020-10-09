import React from 'react';

const Step = () => {
    return (
        <>
            <h1>¿Como reciclar? ¡Es fácil!  <i class="fas fa-recycle" /></h1>
            <div className="card mb-3">
                <img src="..." className="card-img-left" alt="..." />
                <div className="card-body">

                  <h5 className="card-title">De manera simple registra tu basura </h5>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card mb-3">
                <img src="..." className="card-img-rigth" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Recolecta o busca un reciclador en nuestra lista</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card mb-3">
                <img src="..." className="card-img-left" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Registrarte como recolector para recibir basura!</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </>

    );
}

export default Step;

