import React, {Component} from 'react';
import IndexUsuario from './components/usuarios/Index.jsx';
import FormUsuario from './components/usuarios/Form.jsx';
import Linhas from './components/linhas/Index.jsx';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component{
 

  render(){
    return (
      <Router>
          <Route exact path="/linhas" component={Linhas} />
          <Route exact path="/usuarios" component={IndexUsuario} />
          <Route exact path="/usuarios/form" component={FormUsuario} />
      </Router>
      )
  }
}

export default App;