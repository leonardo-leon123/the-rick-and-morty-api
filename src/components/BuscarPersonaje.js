import React from 'react'

import '../styles/BuscarPersonaje.css'


class BuscarPersonaje extends React.Component
{
    render()
    {
        return(
            <form className="buscar-personaje-form" onSubmit={this.props.onSubmit}>
                <input className="input-buscar" type="text" name="numero" value={this.props.formValues.numero} onChange={this.props.onChange} placeholder="Escribe tu Numero aqui..."/>
                <button type="submit" className="btn-buscar" > Buscar personaje </button>
            </form>

        )
    }
}

export default BuscarPersonaje