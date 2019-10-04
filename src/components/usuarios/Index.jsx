import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Usuario from './Usuario';
import objeto from './usuarios.json';

class IndexUsuario extends React.Component {
    render(){
        return(
            <div>
            <Navbar/>
            <Conteudo/>
            <Footer/>
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
                    <h2>Lista de Usuários</h2>
                </div>
                <div className="col col-md-2 offset-md-4">
                    <a href="usuarios/form" className="btn btn-success btn-sm">Novo</a>
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
                  <th scope='col'>Nome</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Permissão</th>
                  <th scope='col'>Ações</th>
              </tr>
          </thead>
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
          tipo: "",
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
                          tipo={usuario.tipo}
                      />
                  )
              }
          </tbody>
      );
  }
}

export default IndexUsuario;