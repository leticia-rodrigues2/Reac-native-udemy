import React  from "react";
import { Text } from 'react-native';
import estilo from "./estilo";
import Estilo from './estilo'


export default function Comp (){
  console.warn('Opa !')
  return(
   <Text style = {estilo.txtG}> Comp #Oficial</Text>
  )
}
export function Comp1 (){
  return <Text style = {estilo.txtG}> Comp #01 </Text>
}

export function Comp2 (){
  return <Text style = {estilo.txtG}> Comp #02</Text>
}