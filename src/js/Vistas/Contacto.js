import React from "react";

export const Contacto = () => {
    return (
        <>
            <div className="card body container">
                <div className="alert alert-success" role="alert">
                    ¡Contáctanos!
		        
                
                
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10 m-auto">
                        <label for="Card#">correo electrónico </label>
                        <input type="card" className="form-control" id="card" placeholder="" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4 m-auto">
                        <label for="firstName">Nombre</label>
                        <input type="firstName" className="form-control" id="firstName" placeholder="" />
                    </div>
                    <div className="form-group col-md-4 m-auto">
                        <label for="last-name">Apellido</label>
                        <input type="last-name" className="form-control" id="last-name" placeholder="" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-10 m-auto">
                        <div className="form-group">
                            <label for="comment">Mensaje:</label>
                            <textarea className="form-control" rows="8" id="comment"></textarea>
                            <p className="text-secondary">tus comentarios.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer container">
                <div className="float-right">
                    <button type="button" className="btn btn-success btn-lg">Enviar</button>
                </div>
            </div>
        </>
    )
},

export default Contacto;