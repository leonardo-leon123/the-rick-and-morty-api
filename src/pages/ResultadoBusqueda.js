import React from 'react'

import TarjetaPersonaje from '../components/TarjetaPersonaje'

import '../styles/Resultado.css'

import '../styles/TarjetaPersonaje.css'

import Loader from '../components/Loader'

import {Link} from 'react-router-dom'


class ResultadoBusqueda extends React.Component
{
    state = {
        loading: true,
        error: null,
        data : {
            image: '',
            name : '',
            species:'',
            origin: '',
        },
    }
    componentDidMount()
    {
        this.fetchData()
        
    }
    fetchData = async () => 
    {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.props.location.state.numero}`)
        const data = await response.json()
        try
        {
            this.setState(
                {
                    loading:false,
                    data:{
                        image: data.image,
                        name: data.name,
                        species: data.species,
                        origin: data.origin.name,
                    }
                })
        }
        catch(error)
        {
            this.setState({
                loading:false,
                error:data.error,
            })
        }

    }
    render()
    {
        if(this.state.loading)
        {
            return(
                <section className="resultado"> 
                    <div className="TarjetaPersonaje"> 
                        <Loader/>
                        <Link to='/'> <button type="button" className="btn-buscar" > Intentar otra vez </button></Link>
                    </div>
                </section>
            ) 
        }
        if(this.state.error)
        {
            return( 
            <section className="resultado"> 
                <div className="TarjetaPersonaje"> 
                    <h1>Error: {this.state.error}</h1> 
                    <Link to='/'> <button type="button" className="btn-buscar" > Intentar otra vez </button></Link>
                </div> 
            </section>
            ) 
        }
        if(this.props.location.state.numero === "")
        {
            return(
            <section className="resultado"> 
                <div className="TarjetaPersonaje"> 
                    <h1>Error: Hey! you must provide an id</h1> 
                    <Link to='/'> <button type="button" className="btn-buscar" > Intentar otra vez </button></Link>
                </div> 
            </section>
            )
        }
        return(
            <React.Fragment>
                <section className="resultado" >
                    <TarjetaPersonaje image={this.state.data.image} name={this.state.data.name} species={this.state.data.species} origin={this.state.data.origin}  />
                </section>
            </React.Fragment>
        )
    }
}

export default ResultadoBusqueda