import React, { Component } from 'react';
import Usuario from './Usuario';
import objeto from './usuarios.json';

class IndexUsuario extends React.Component {
    render(){
        return(
            <div>
            <Navbar/>
            <Conteudo/>
            </div>
        )
    }
  }


class Conteudo extends React.Component {
  render(){
      return(

        <div className="container">
            <div className="row">
                <div className="col col-md-6">
                    <h2>Lista de Clientes</h2>
                </div>
                <div className="col col-md-2 offset-md-4">
                    <a href="usuarios/novo" className="btn btn-success">Novo Usuário</a>
                </div>
            </div>
            <div className="row">
                <div className="col align-self-center">
                    <Tabela/>
                </div>
            </div>
        </div>
      )
  }
}

class Tabela extends React.Component {
  render() {
      return (
          <table className='table border table-hover text-center'>
              <TabelaCabecalho />
              <ListaUsuarios />
          </table>
      )
  }
}

class TabelaCabecalho extends React.Component {
  render() {
      return (
          <thead className="thead-dark">
              <tr>
                  <th  scope='col'>Nome</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Ações</th>
              </tr>
          </thead>
      )
  };

}

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark mb-3">
            <a className="navbar-brand" href="#">BusApp</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto  ">
                    <li className="nav-item">
                        <a className="nav-link" href="/linhas">Linhas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/usuarios">Clientes</a>
                    </li>
                </ul>
            </div>
            </nav>
        )
    };
  
  }

class ListaUsuarios extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          usuarios: objeto.usuarios,
          id:"",
          nome: "",
          email: "",
         
      }
  }
  render() {
      return (
          <tbody>
              {
                  this.state.usuarios.map((usuario, i) =>
                      <Usuario
                          id={usuario.id}
                          nome={usuario.nome}
                          email={usuario.email}
                      />
                  )
              }
          </tbody>
      );
  }
}

export default IndexUsuario;