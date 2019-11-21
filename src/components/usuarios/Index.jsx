import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Usuario from './Usuario';
import axios from 'axios';

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
          usuarios:[],
          id:"",
          nome: "",
          email: "",
          tipo: "",
      }
      axios.get('http://localhost:3001/usuarios')
      .then(res => {
          console.log(res.data.usuarios);
          this.setState({
            usuarios : res.data.usuarios,
          })
          console.log(this.state);
      }).catch((e)=>{
          console.log(e);
      })
  }
  render() {
      return (
          <tbody>
              {

                  this.state.usuarios.map((usuario, i) =>
                      <Usuario
                          key={i}
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