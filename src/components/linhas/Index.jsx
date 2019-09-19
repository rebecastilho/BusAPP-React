import React, { Component } from 'react';
import objeto from './linhas.json';
import Linha from './Linha';


class CorpoPagina extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <h2>Lista de Linhas</h2>
                        </div>
                        <div className="col col-md-2 offset-md-4">
                            <a href="linhas/novo" className="btn btn-success">Nova Linha</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col align-self-center">
                            <Tabela />
                        </div>
                    </div>
                </div>
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

class Tabela extends React.Component {
    render() {
        return (
            <table class='table border table-hover text-center'>
                <TabelaCabecalho />
                <ListaLinhas />
            </table>
        )
    }
}

class TabelaCabecalho extends React.Component {
    render() {
        return (
            <thead class="thead-dark">
                <tr>
                    <th scope='col'>Origem</th>
                    <th scope='col'>Destino</th>
                    <th scope='col'>Tarifa</th>
                    <th scope='col'>Horario de Saida</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
        )
    };

}

class ListaLinhas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linhas: objeto.linhas,
            origem: "",
            destino: "",
            tarifa: "",
            horario_saida: ""
        }
    }
    render() {
        return (
            <tbody>
                {
                    this.state.linhas.map((linha, i) =>
                        <Linha
                            origem={linha.origem}
                            destino={linha.destino}
                            tarifa={linha.tarifa}
                            horario_saida={linha.horario_saida}
                        />
                    )
                }
            </tbody>
        );
    }
}

export default CorpoPagina;