import React , {Component} from "react";
import { Text, TextInput } from "react-native";
import Estilo from '../estilo'


export default class Mega extends Component {
  
    state = {
      qtdeNumeros:this.props.qtdeNumeros 
    }

    alterarQtdeNumeros (qtde){
      this.setState({qtdeNumeros: qtde})
    }
  

  render(){
    return(
      <>
      <Text style = {Estilo.txtG}>
        Gerador de Mega-Sena 
        {this.state.qtdeNumeros}
      </Text>
      <TextInput
          placeholder = "Quantide de Números"
          value = {this.setState.qtdeNumeros}
         onChangeText={this.alterarQtdeNumeros}
      />
      </>
    )
  }
}


//USANDO CONSTRUTOR

//   constructor (props){
//     super(props)
  
//     this.state = {
//       qtdeNumeros:props.qtdeNumeros + 1000
//     }
//   }

//   render(){
//     return(
//       <Text style = {Estilo.txtG}>
//         Gerador de Mega-Sena 
//         {this.state.qtdeNumeros}
//       </Text>
//     )
//   }
// }