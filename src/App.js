import React, {Component} from 'react';
import Usuarios from './components/usuarios/Index.jsx';
import Linhas from './components/linhas/Index.jsx';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component{
 

  render(){
    return (
      <Router>
          <Route exact path="/linhas" component={Linhas} />
          <Route exact path="/usuarios" component={Usuarios} />
      </Router>
      )
  }
}

export default App;