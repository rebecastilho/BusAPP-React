import React, {Component} from 'react';
import UsuariosIndex from './components/usuarios/Index.jsx';
import UsuariosForm from './components/usuarios/Form.jsx';
import Linhas from './components/linhas/Linhas.jsx';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component{
 

  render(){
    return (
      <Router>
          <Route exact path="/linhas" component={Linhas} />
          <Route exact path="/usuarios" component={UsuariosIndex} />
          <Route exact path="/usuarios/create" component={UsuariosForm} />
      </Router>
      )
  }
}

export default App;