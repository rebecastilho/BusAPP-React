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
                    
                        <a className="nav-link" href="#"><i className="fas fa-user"></i> Login/Register</a>
                        
                    </div>
                </div>
            </nav>
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