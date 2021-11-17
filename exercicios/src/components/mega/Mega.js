import React , {Component} from "react";
import { Button, Text, TextInput, View } from "react-native";
import MegaNumero from "./MegaNumero";
import Estilo from '../estilo'


export default class Mega extends Component {
  
    state = {
      qtdeNumeros:this.props.qtdeNumeros ,
      numeros:[]
    }
// resolver o problema do THIS
    alterarQtdeNumeros  = (qtde) => {
      this.setState({qtdeNumeros: +qtde})
    }

    gerarNumeroNãocontido = nums => {
        const novo= parseInt(Math.random()* 60) +1
        return nums.includes(novo) ? this.gerarNumeroNãocontido(nums) : novo
    }

    // gerarNumeros = () => {
    //   const numeros = Array(this.state.qtdeNumeros)
    //   .fill()
    //   .reduce( n => [...n, this.gerarNumeroNãocontido(n)], [])
    //   .sort ((a,b) => a-b)
    //   this.setState({ numeros })
    // }
  
    gerarNumeros = () => {
      const {qtdeNumeros} = this.state
      const numeros =[]

      for (let i = 0 ; i <qtdeNumeros ; i++){
        const n = this.gerarNumeroNãocontido(numeros)
        numeros.push(n)
      }
      numeros.sort ((a,b) => a-b)
      this.setState({ numeros })
    }

    exibirNumeros = () => {
      const nums = this.state.numeros
      return nums.map(num => {
        return <MegaNumero key ={num} num = {num} />
      })
    }
  

  render(){
    return( 
      <>
      <Text style = {Estilo.txtG}>
        Gerador de Mega-Sena 
        {this.state.qtdeNumeros}
      </Text>
      <TextInput
          keyboardType = {'numeric'}
          style ={{borderBottomWidth: 1}}
          placeholder = "Quantide de Números"
          value = {`${this.state.qtdeNumeros}`}
         onChangeText={this.alterarQtdeNumeros}
         // onChangeText={ qtd => this.alterarQtdeNumeros}
         // resolver o problema do THIS
      />

      <Button
        title = 'Gerar'
        onPress ={this.gerarNumeros}
      />

      <View style = {{
        marginTop:20,
        flexDirection : 'row',
        flexWrap:'wrap',
        justifyContent:'center'
      }}>
        {this.exibirNumeros()}
      </View>
     
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