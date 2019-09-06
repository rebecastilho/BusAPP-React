import React, {Component} from 'react';
import Linhas from './components/linhas/Linhas';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component{
 

  render(){
    return (
      <Router>
          <Route exact path="/linhas" component={Linhas} />
      </Router>
      )
  }
}

export default App;