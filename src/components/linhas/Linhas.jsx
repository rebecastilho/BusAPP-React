import React, { Component } from 'react';
import objeto from './linhas.json';
import Linha from './Linha';


class CorpoPagina extends React.Component {
    render(){
        return(
            <div class="container">
            <div class="row">
                <div class="col align-self-center">
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
            <table class='table border table-hover'>
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