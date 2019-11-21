import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Linha from './Linha';
import objeto from './linhas.json';
import axios from 'axios';

class FormLinha extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linha: [],
        }

        axios.get('http://localhost:3001/linhas/editar/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    linha : res.data.linha,
                    action : res.data.formAction,
                    title : res.data.title
                })
            }).catch((e) => {
                console.log(e);
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Conteudo action = {this.state.action ? this.state.action : 'http://localhost:3001/linhas/novo'} title = {this.state.title ? this.state.title : 'Nova Linha'}  linha = {this.state.linha}/>
                <Footer />
            </div>
        )
    }
}
class Conteudo extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="card col col-sm-12 col-md-6 offset-md-3">
                    <div className="card-header">
                        <div className="row">
                            <div className="col col-sm-12">
                                <h2>{this.props.title}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <form action={this.props.action} method="post">

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="nome">Origem:</label>
                                    <input className="form-control" defaultValue={this.props.linha.origem} type="text" name="origem" id="origem" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="destino">Destino:</label>
                                    <input className="form-control" defaultValue={this.props.linha.destino} type="text" name="destino" id="destino" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="tarifa">Tarifa:</label>
                                    <input className="form-control" defaultValue={this.props.linha.tarifa} type="text" name="tarifa" id="tarifa" />
                                </div>

                            </div>

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="tarifa">Horario de Saída:</label>
                                    <input className="form-control" defaultValue={this.props.linha.horarioSaida} type="text" name="horarioSaida" id="horarioSaida" />
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



export default FormLinha;