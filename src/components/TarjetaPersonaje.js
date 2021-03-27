import React from 'react'

import {Link} from 'react-router-dom'

import '../styles/TarjetaPersonaje.css'

function TarjetaPersonaje(props)
{
    return(
        <React.Fragment>
            <div className="TarjetaPersonaje">
                <h1> Tu Personaje es: </h1>
                <img src={props.image} alt=""/>
                <div className="api-data" >
                    <p>Nombre:</p>
                    <span>{props.name}</span>
                </div>
                <div className="api-data" >
                    <p>Especie:</p>
                    <span>{props.species}</span>
                </div>
                <div className="api-data" >
                    <p>Origen:</p>
                    <span> {props.origin} </span>
                </div>
                <Link to='/'> <button type="button" className="btn-buscar" > ¡Volver a Jugar! </button></Link>
            </div>
        </React.Fragment>
        )
}

export default TarjetaPersonaje