import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';




class FormSAC extends React.Component {
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
                        <h2>SAC</h2>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <form action="" method="post">
                
                    <div className="row form-group">
                        <div className="col col-md-12">
                            <label htmlFor="reclamacao">Reclamação:</label>
                            <textarea class="form-control" name="reclamacao" id="reclamacao"/>
                        </div>
                    </div>
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



export default FormSAC;