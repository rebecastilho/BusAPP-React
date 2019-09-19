import React, { Component } from 'react';
import Usuario from './Usuario';
import objeto from './usuarios.json';

class FormUsuario extends React.Component {
    render(){
        return(
            <div>
            <Navbar/>
            <Conteudo/>
            </div>
        )
    }
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

class Conteudo extends React.Component {
render(){
    return(

        <div className="container">
            <div>Ola</div>
            
        </div>
    )
}
}



export default FormUsuario;