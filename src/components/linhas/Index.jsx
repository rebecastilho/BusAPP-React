import React from 'react';
import objeto from './linhas.json';
import Linha from './Linha';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import axios from 'axios';

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
                            <a href="/linhas/form" className="btn btn-sm btn-success">Novo</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col align-self-center">
                            <Tabela />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
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
            id:"",
            origem: "",
            destino: "",
            tarifa: "",
            horario_saida: ""
        }
    axios.get('http://localhost:3001/linhas')
    .then(res => {
        this.setState({
          linhas : res.data.linhas,
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
                    this.state.linhas.map((linha, i) =>
                        <Linha
                            id = {linha.id}
                            origem={linha.origem}
                            destino={linha.destino}
                            tarifa={linha.tarifa}
                            horario_saida={linha.horarioSaida}
                        />
                    )
                }
            </tbody>
        );
    }
}

export default CorpoPagina;