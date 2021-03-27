import React from 'react'

import '../styles/Footer.css'

import Figma from '../img/figma_logo.png'
import React_logo from '../img/react_logo.png'
import Heroku from '../img/heroku_icon.png'


class Footer extends React.Component
{
    render()
    {
        return(
            <section className="footer">
                <p> Hecho con ❤️ por Leonardo León.</p>
                <p>Esta página funciona gracias a: <a target='_blank' rel="noreferrer" href="https://rickandmortyapi.com/"> https://rickandmortyapi.com/</a></p>
                <p className="push2" >Construido usando:</p> 
                <div className="build-logo-container" >
                    <a target='_blank' rel="noreferrer" href="https://www.figma.com/file/O47XLMfIqAgeeU01tDsLfe/Rick-and-morty-api?node-id=0%3A1"><img className="build-logo" src={Figma} alt="Figma"/></a>
                    <a target='_blank' rel="noreferrer" href="https://es.reactjs.org/"><img className="build-logo" src={React_logo} alt="React"/></a>
                    <a target='_blank' rel="noreferrer" href="https://www.heroku.com/"><img className="build-logo" src={Heroku}alt="Heroku"/></a>
                </div>
            </section>
        )
    }
}

export default Footer