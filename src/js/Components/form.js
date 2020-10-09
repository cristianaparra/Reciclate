import React from "react";

const Form = () => {

    return (
        <>
            <div className="card body container">
                <div className="alert alert-success" role="alert">
                    Registrate como recolector
		    </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="Card#">Nombres</label>
                        <input type="card" className="form-control" id="card" placeholder="" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="CVC">Apellidos</label>
                        <input type="card" className="form-control" id="card" placeholder="" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="city">Rut</label>
                        <input type="city" class="form-control" id="city" placeholder="" />
                    </div>
                    <div class="form-group col-md-8 ">
                        <label htmlFor="inputState">Dirección</label>
                        <input type="postal-code" className="form-control" id="city" placeholder="" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="city">Correo electrónico</label>
                        <input type="city" className="form-control" id="city" placeholder="" />
                    </div>
                    <div class="form-group col-md-7">
                        <label htmlFor="last-name">Tipo de actividad</label>
                        <input type="last-name" className="form-control" id="last-name" placeholder="" />
                    </div>
                </div>
                <div claclassNamess="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="exampleFormControlSelect1">Selecciona el tipo de basura</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>Plásticos</option>
                            <option>Electrónicos</option>
                            <option>Neumáticos</option>
                            <option>Vidrios</option>
                            <option>Papeles y cartones</option>
                            <option>Desechos orgánicos</option>
                            <option>...</option>
                            <option>....</option>
                            <option>Otros</option>
                        </select>
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="exampleFormControlInput1">Otros</label>
                        <input type="email" cclassNamelass="form-control" id="exampleFormControlInput1" placeholder="" />
                        <p>Si seleccionaste otro tipo de basura, especifica.</p>
                    </div>
                </div>
            </div>
            <div className="card-footer container">
                <div className="float-right">
                    <button type="button" className="btn btn-secondary btn-lg">Cancelar</button>
                    <button type="button" className="btn btn-primary btn-lg">Registrarse</button>
                </div>
            </div>
        </>
    )
}

export default Form;
