import React, { Component } from 'react';
import '../App.css';
import objeto from '../linhas';
import Linha from './Linha';


class Linhas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linhas: objeto.linhas,
            origem: "",
            destino: "",
            tarifa: "",
            horario_saida = ""
        }
    }
}


export default Linhas;