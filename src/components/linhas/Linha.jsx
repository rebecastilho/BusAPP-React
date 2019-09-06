import React from 'react';


class Linha extends React.Component{
  render(){
    return(
      <tr>
          <td>{ this.props.origem }</td>
          <td>{ this.props.destino }</td>
          <td>{ this.props.tarifa }</td>
          <td>{ this.props.horario_saida }</td>
      </tr>
    )
  }
}

export default Linha;