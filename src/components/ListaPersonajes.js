import React, { Component } from 'react';

import logo from '../img/logo2.png';

import '../styles/ListaPersonajes.css'

import Loader from '../components/Loader'

import CharacterCard from './CharacterCard';

class App extends React.Component {
  
  state = 
  {
    nextPage: 1,
    loading : true,
    error:null,
    data : {
      results : [],
    },
  }

  componentDidMount()
  {
    this.fetchCharacters()
  }

  handleClick = e => {
    const numero = this.props.character.id
        this.props.history.push({
            pathname: '/resultado-de-busqueda',
            state: {numero: this.props.character.id}  
        })
  }

  fetchCharacters = async () =>
  {
    this.setState({loading:true, error:null})

    try
    {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`)
  
      const data = await response.json()
      
  
      this.setState
      ({
        loading:false,
        data : {
          info: data.info,
          results: [].concat(
            this.state.data.results, data.results
          ),
        },
        nextPage : this.state.nextPage + 1,
      })
      console.log(this.state.nextPage)
    }
    catch(error)
    {
      this.setState
      ({
        loading:false,
        error : error
      })
    }
  }

  


  render() 
  {
    if(this.state.error)
    {
      return `Error : ${this.state.error.message}`
    }

    if(this.state.nextPage =='35')
    {
      return(
        <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} onClick={this.handleClick} />
              </li>
            ))}
          </ul>

          {this.state.loading && (
                  <Loader/>
          )}

          <center>
            <h1>llegaste al final de la lista</h1>
          </center>

        </div>
      </div>
      )
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} onClick={this.handleClick} />
              </li>
            ))}
          </ul>

          {this.state.loading && (
                  <Loader/>
          )}

          {
            !this.state.loading && (
              <button onClick={() => this.fetchCharacters()}>
                Cargar mas
              </button>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
