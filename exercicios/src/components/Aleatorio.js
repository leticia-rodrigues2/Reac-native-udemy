import React from "react";
import { Text } from 'react-native'
import estilo from "./estilo";


export default ({min,max}) =>{
     const d = max - min +1
     const aleatorio = parseInt(Math.random ( ) * d) + min
     return(
 <Text style =  {estilo.txtG}>
    O valor sorteado é : {aleatorio}
  </Text>
)
}