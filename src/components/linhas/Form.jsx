import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Linha from './Linha';
import objeto from './linhas.json';

class FormLinha extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Conteudo />
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
                                <h2>Cadastro de Linha</h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-body">
                        <form action="" method="post">

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="nome">Origem:</label>
                                    <input className="form-control" type="text" name="origem" id="origem" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="destino">Destino:</label>
                                    <input className="form-control" type="text" name="destino" id="destino" />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="tarifa">Tarifa:</label>
                                    <input className="form-control" type="text" name="tarifa" id="tarifa" />
                                </div>

                            </div>

                            <div className="row form-group">
                                <div className="col col-md-12">
                                    <label htmlFor="tarifa">Horario de Saída:</label>
                                    <input className="form-control" type="text" name="horarioSaida" id="horarioSaida" />
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