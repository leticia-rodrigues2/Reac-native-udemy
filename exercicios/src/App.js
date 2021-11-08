import { PATTERNLIKE_TYPES, whileStatement } from "@babel/types"
import React from "react"
import {View,StyleSheet} from 'react-native'
import Pai from "./components/comunicaIndireta/Pai"
//import Pai from "./components/comuDireta/Pai"
//import Contador from "./components/Contador"
//import Botao from "../Botao"
//import Titulo from "./components/Titulo"
//import Ale from './components/Aleatorio'
//import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro  from './components/Primeiro'

export default () =>
(
  <View style = {style.App}> 
  
  <Pai></Pai>
   {/* <Botao/>
  <Pai/>
  <Contador inicial = {100} passo = {10}/>
  <Contador/>
   <Titulo principal = "CADASTRO PRODUTO"
      segundario="Tela de cadastro do produto"/>
    <Ale min ={7} max={50}/> 
     <MinMax max={20}  min ={3}/>
    <MinMax  min ={13} max={30} 
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View> 
)
const style = StyleSheet.create ({

  App:{
    flexGrow: 1,
    justifyContent:"center",
    alignItems:"center"
  }

})
