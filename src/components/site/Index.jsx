import React, { Component } from 'react';
import './style.css';


class IndexSite extends React.Component {
    render() {
        return (

            <div>
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
            <nav class="mb-1 navbar navbar-expand-lg blue info-color">
                <a class="navbar-brand" href="#">Busapp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <div class="navbar-nav ml-auto nav-flex-icons">
                    
                        <a class="nav-link" href="#"><i class="fas fa-user"></i> Login/Register</a>
                        
                    </div>
                </div>
            </nav>
        )
    };
             
}  

class Footer extends React.Component {
    render() {
        return (
            <footer class="page-footer font-small blue fixed-bottom">

            <div class="footer-copyright text-center py-3">© 2019 Copyright: BusApp
            </div>

            </footer>
        )
    };
             
}  

class Main extends React.Component {
    render() {
        return (
            <div className="col sm-12 image">
            </div>
        )
    };
             
}  

  
         
         
         
export default IndexSite;