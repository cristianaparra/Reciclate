import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import form from './js/Components/form'
import Home from './js/Vistas/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/form' component={form} />
        <Route exact path='/recolector' />
        <Route exact path='/usuario' />
      
      </Switch>
    </Router>
  );
}

export default App;
