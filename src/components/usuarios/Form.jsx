import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import axios from 'axios';


class FormUsuario extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            usuario:[],
            id:"",
            nome: "",
            email: "",
        }

        axios.get('http://localhost:3001/usuarios/editar/'+this.props.match.params.id)
        .then(res => {
            console.log(res.data.usuario);
            this.setState({
            usuario : res.data.usuario,
            nome : res.data.usuario.nome,
            email : res.data.usuario.email,
            })
        }).catch((e)=>{
            console.log(e);
        })
}



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
                            <input class="form-control" type="text" value={FormUsuario.state} name="nome" id="nome"/>
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
                    <input type="hidden" value="Administrador" name="tipo"/>
                    <div className="row">
                        <div className="col col-sm-2 offset-sm-9">
                            <button className="btn btn-success btn-sm" type="submit">Enviar</button>
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