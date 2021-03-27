import React from 'react'
import Layout from './components/Layout'
import inicio from './pages/inicio'
import ListaPersonajes from './components/ListaPersonajes'
import Resultado from './pages/ResultadoBusqueda'
import ConsultaPersonaje from './pages/ConsultaPersonaje'
import {BrowserRouter, Switch, Route} from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={inicio} />
          <Route exact path="/resultado-de-busqueda" component={Resultado} />
          <Route exact path="/ListaCompleta" component={ListaPersonajes}/>
          <Route exact path="/Consulta-personaje/:idCharacter/view" component={ConsultaPersonaje}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
