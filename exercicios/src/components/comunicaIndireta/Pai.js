import React, { useState } from "react";
import Filho from "../comunicaIndireta/Filho";
import { Text } from "react-native";
import Estilo from "../estilo";

export default props => {
  const [texto , seTexto] = useState('')
  const [num , setNum] = useState(0)
 
function exibirValor (numero , texto){
    setNum(numero)
    seTexto(texto)
  }

  return (
    <>
      <Text style = {Estilo.txtG}> {texto}{num}</Text>
      <Filho 
      min ={1}
      max ={60}
      funcao = {exibirValor}
      />
    </>
  )
}