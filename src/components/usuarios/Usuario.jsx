import React from 'react';


class Usuario extends React.Component{
  render(){
    return(
      <tr>
          <td>{ this.props.nome }</td>
          <td>{ this.props.email }</td>
          <td>{ this.props.tipo }</td>
          <td>
            <a href={"/usuarios/form/"+this.props.id} class="btn btn-primary btn-sm mr-3">Editar</a>
            <a href={"http://localhost:3001/usuarios/excluir/"+this.props.id} class="btn btn-danger btn-sm">Deletar</a>
          </td>
      </tr>
    )
  }
}

export default Usuario;