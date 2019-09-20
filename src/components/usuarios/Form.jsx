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
        <div className="card col col-sm-12 col-md-6 offset-md-3">
            <div className="card-header">
                <div className="row">
                    <div className="col col-sm-12">
                        <h2>Cadastro de Administrador</h2>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <form action="" method="post">
                
                    <div className="row form-group">
                        <div className="col col-md-12">
                            <label htmlFor="nome">Nome:</label>
                            <input class="form-control" type="text" name="nome" id="nome"/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col col-md-12">
                            <label htmlFor="email">Email:</label>
                            <input class="form-control" type="email" name="email" id="email"/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col col-md-12">
                            <label htmlFor="senha">Senha:</label>
                            <input class="form-control" type="password" name="senha" id="senha"/>
                        </div>
                        
                    </div>

                    <div className="row form-group">
                        <div className="col col-sm-3 offset-sm-9">
                            <button className="btn btn-success" type="submit">Enviar</button>
                        </div>
                    </div>
                
                </form>
            </div>

        </div>
        </div>
    )
}
}



export default FormUsuario;