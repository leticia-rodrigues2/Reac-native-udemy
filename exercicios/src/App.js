import { PATTERNLIKE_TYPES, whileStatement } from "@babel/types"
import React from "react"
import {SafeAreaView,StyleSheet} from 'react-native'

import ParImpar from "./components/ParImpar"
//import Diferenciar from "./components/Diferenciar"
//import ContadorV2 from './components/contador/ContadorV2'
//import ContadorDisplay from './components/contador/ContadorDisplay'

//import Pai from "./components/comunicaIndireta/Pai"
//import Pai from "./components/comuDireta/Pai"


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
  //SafeArray = faz funvionar no android e no ios
  <SafeAreaView style = {style.App}> 
    <ParImpar />

   {/* <Botao/>
  <Diferenciar />
  <ContadorV2 />
  
  <Pai></Pai>
  <Pai1/>

  <Pai/>
   {/* <Botao/>

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
  </SafeAreaView> 
)
const style = StyleSheet.create ({

  App:{
    flexGrow: 1,
    justifyContent:"center",
    alignItems:"center"
  }

})
