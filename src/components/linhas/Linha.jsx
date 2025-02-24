import React from 'react';

class Linha extends React.Component{
  render(){
    return(
      <tr>
          <td>{ this.props.origem }</td>
          <td>{ this.props.destino }</td>
          <td>{ this.props.tarifa }</td>
          <td>{ this.props.horario_saida }</td>
          <td>
            <a href={"/linhas/form/"+this.props.id} class="btn btn-primary btn-sm mr-3">Editar</a>
            <a href={"http://localhost:3001/linhas/excluir/"+this.props.id} class="btn btn-danger btn-sm">Deletar</a>
          </td>
      </tr>
    )
  }
}

export default Linha;