import React from 'react';
import IndexUsuario from './components/usuarios/Index.jsx';
import IndexSite from './components/site/Index.jsx';
import FormUsuario from './components/usuarios/Form.jsx';
import IndexLinha from './components/linhas/Index.jsx';
import FormLinha from './components/linhas/Form.jsx';
import FormSAC from './components/sac/Form.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends React.Component {


  render() {
    return (
      <Router>
          <Route exact path="/linhas" component={IndexLinha} />
          <Route exact path="/linhas/form" component={FormLinha} />
          <Route exact path="/usuarios" component={IndexUsuario} />
          <Route exact path="/usuarios/form" component={FormUsuario} />
          <Route exact path="/usuarios/form/:id" component={FormUsuario} />
          <Route exact path="/sac" component={FormSAC} />
          <Route exact path="/" component={IndexSite} />
      </Router>
    )
  }
}

export default App;