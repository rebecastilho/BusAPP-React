import React, { Component } from 'react';
import './style.css';
import icon1 from '../images/log-in.png';
import icon2 from '../images/view.png';
import icon3 from '../images/network.png';


class IndexSite extends React.Component {
    render() {
        return (
            <div id="main">
                <Navbar/>
                <Main/>
                <Modal/>
                <Footer/>
            </div>
        )
    }
}
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Busapp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div className="navbar-nav ml-auto nav-flex-icons">
                    
                        <a className="nav-link" href="#" data-toggle="modal" data-target="#modalExemplo"><i className="fas fa-user"></i> Acesso</a>
                        
                    </div>
                </div>
            </nav>
        )
    };
             
}  

class Modal extends React.Component {
    render() {
        return (
            // <!-- Modal -->
            <div className="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5  id="exampleModalLabel">Acesso</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row d-flex justify-content-center">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link login" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Logar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#register" role="tab" aria-controls="profile" aria-selected="false">Cadastrar</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show login" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <form action="http://localhost:3001/autenticacao/login/" method="post">
                                <label htmlFor="email" className="mt-4">Email</label>
                                <input type="email" name="email" id="email" class="form-control"/>

                                <label htmlFor="senha" className="mt-4">Senha</label>
                                <input type="password" name="senha" id="senha" class="form-control"/>
                                <button type="submit" className="btn btn-sm btn-primary float-right mt-4"><i class="fas fa-sign-in-alt"> Logar</i></button>
                            </form>
                        </div>

                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="profile-tab">
                            <form action="http://localhost:3001/usuarios/novo" method="post">
                                <label htmlFor="email" className="mt-4">Email</label>
                                <input type="email" name="email" id="email" class="form-control"/>

                                <label htmlFor="nome" className="mt-4">Nome</label>
                                <input type="text" name="nome" id="nome" class="form-control"/>

                                <label htmlFor="senha" className="mt-4">Senha</label>
                                <input type="password" name="senha" id="senha" class="form-control"/>
                                <button type="submit" className="btn btn-sm btn-primary float-right mt-4"><i class="far fa-plus-square"></i> Cadastrar</button>
                            </form>
                        </div>
                
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-sm grey float-left" data-dismiss="modal">Fechar</button>
               </div>
                </div>
            </div>
            </div>
            
        )
    };
             
}  

class Footer extends React.Component {
    render() {
        return (
            
            <footer className="page-footer font-small bg-dark fixed-bottom">

            <div className="footer-copyright text-center py-3">© 2019 Copyright: BusApp
            </div>

            </footer>
        )
    };
             
}  



class Main extends React.Component {
    render() {
        return (

            <div className="page">
                <Home/>
                <ComoFunciona/>
            </div>
            
            
            

        )
    };
             
}  


class Home extends React.Component {
    render() {
        return (
            <div className="row image">
                <div className="col col-sm-4 offset-sm-2 white-text text-center">
                    <div className="text-row-1">
                        <h1>BusApp</h1>
                        <h2>Sua plataforma de visualização das linhas de ônibus no Brasil</h2>
                    </div>
                </div>
            </div>
        )
    };
             
}  

class ComoFunciona extends React.Component {
    render() {
        return (
            <div className="row comoFunciona text-center">

                <div className="col col-sm-12">
                    <div className="row ">
                        <div className="col col-sm-12">
                            <h1 className="font-evident">Como Funciona</h1>
                        </div>
                    </div>
                </div>
                
                <div className="col col-sm-12">
                    <div className="row">
                        <div className="col col-sm-4">
                        <img src={icon1} width="100px" alt="teste"/>
                            <h3>Acesse o Sistema  para Utilizar Nossos Serviços</h3>
                        </div>
                        <div className="col col-sm-4">
                        <img src={icon2} width="100px" alt="teste"/>
                            <h3>Visualize as Linhas de Ônibus de sua Preferência</h3>
                        </div>
                        <div className="col col-sm-4">
                        <img src={icon3} width="100px" alt="teste"/>
                            <h3>Acompanhe as Reclamações da Comunidade</h3>
                        </div>
                    </div>
                </div>
                  
            </div>
        )
    };
             
}  


  
         
         
         
export default IndexSite;