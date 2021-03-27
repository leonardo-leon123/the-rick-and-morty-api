import React from 'react'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'

import logo from '../img/logo.png'

class Navbar extends React.Component
{

    navSlide()
    {
        const burger = document.querySelector('.burger')
        const nav = document.querySelector('.nav-links')
        nav.classList.toggle('nav-active')
        burger.classList.toggle('toggle')
    }

    render()
    {
        return(
            <nav id="nav" >
            <div className="logo-container push" >
                <Link to='/'>
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to='/' onClick={this.navSlide}> Buscar Personaje</Link>
                    <Link to='/ListaCompleta' onClick={this.navSlide}> Ver la Lista Completa </Link>
                </li>
            </ul>
            <div className="burger" onClick={this.navSlide}  >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </nav>
        )
    }
}

export default Navbar