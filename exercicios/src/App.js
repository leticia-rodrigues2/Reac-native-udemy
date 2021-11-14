import { PATTERNLIKE_TYPES, whileStatement } from "@babel/types"
import React from "react"
import {SafeAreaView,StyleSheet} from 'react-native'



import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import UsuarioLogado from './components/UsuarioLogado'
//import If from './components/If'

// import Membro from "./components/relacao/Membro"
// import Familia from './components/relacao/Famlia'
//import ParImpar from "./components/ParImpar"
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

export default () =>(
  //SafeArray = faz funvionar no android e no ios
  <SafeAreaView style = {style.App}> 
  
  <DigiteSeuNome/>
   {/* 
  <ListaProdutosV2/>
    <UsuarioLogado usuario={{ nome: 'Gui' , email: 'gui@gui.com'}}/>
    <UsuarioLogado usuario={{ nome: 'Bruna' , email: 'brubru@bru.com'}}/>
    <UsuarioLogado usuario={{ nome: 'Leti' }}/>
    <UsuarioLogado usuario={{ email: 'letileti@leti.com'}}/>
 
    <Familia>
      <Membro nome = "Larissa" sobrenome = "Rodrigues"/>
      <Membro nome = "Leandro" sobrenome = "Rodrigues"/>
      <Membro nome = "Ketelin" sobrenome = "Rodrigues"/>
      <Membro nome = "Leticia" sobrenome = "Rodrigues"/>
    </Familia>
    <Familia>
      <Membro nome= "Juliano" sobrenome = "Santana"/>
      <Membro nome= "Pierre" sobrenome = "Santana"/>
    </Familia>
    <ParImpar />
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
