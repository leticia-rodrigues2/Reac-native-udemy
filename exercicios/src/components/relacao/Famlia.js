import React from "react";
import { Text } from "react-native";

export default props => {
  return (
    <>
    <Text> Mambro da Familia: </Text>
       {props.children} 
       {/* // Renderiza os components criado no Filho -> props.children */}
    </>
  )

}