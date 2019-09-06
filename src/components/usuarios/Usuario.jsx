import React from 'react';
import '../App.css';


class Usuario extends React.Component{
  render(){
    return(
      <div>
        <td>{this.props.nome}</td>
        <td>{this.props.email}</td>
      </div>
    )
  }
}

export default Usuario;