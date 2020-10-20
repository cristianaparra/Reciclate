import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import form from './js/Components/form'
import Home from './js/Vistas/Home'
import Usuario from './js/Vistas/Usuario'
import Ruta from './js/Ruta'
import Public from './template/public'

function App() {
  return (
    <Router>
      <Switch>

        <Ruta exact path='/' component={Home} layout={Public} />
        <Ruta exact path='/form' component={form} layout={Public} />
        <Ruta exact path='/usuario' component={Usuario} layout={Public} />

      </Switch>
    </Router>
  );
}

export default App;
