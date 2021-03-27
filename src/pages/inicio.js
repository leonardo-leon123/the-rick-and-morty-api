
import React from 'react'

import BuscarPersonaje from '../components/BuscarPersonaje'

import '../styles/inicio.css'

class inicio extends React.Component
{
    state = {
        loading: true,
        error: null,
        form: 
        {
            numero: '',
        }
    }
    handleSubmit = async evento =>
    {
        
        evento.preventDefault()
        const numero = this.state.form.numero
        this.props.history.push({
            pathname: '/resultado-de-busqueda',
            state: {numero: this.state.form.numero}  
        })
    }
    handleChange = evento => 
    {
        this.setState(
            {
                form: 
                {
                    ...this.state.form,
                    [evento.target.name]: evento.target.value
                }
            }
        )
    }
    render()
    {
        return(
            <section className="inicio" >
                <div className="main" >
                    <h1>¿Qué Personaje de Rick & Morty eres?</h1>
                    <h2>Dime un número del 1 al 671</h2>
                    <BuscarPersonaje onSubmit={this.handleSubmit} formValues={this.state.form} onChange={this.handleChange}/>
                </div>
            </section>           
        )
    }
}

export default inicio