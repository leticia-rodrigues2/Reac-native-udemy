import React from "react";
import { Button } from "react-native";

export default props => {
const executar = () => {
    console.warn('Click #01 funcionando !!')
  }

  return (
    <>
    <Button
      title ="Executar!"
      onPress={executar}
    />
    <Button
        title="Executar #02!"
        onPress={function(){
          console.warn('Click #02 funcionando !!')
        }}
    />

<Button
        title="Executar #03!"
        onPress={()=>console.warn('Click #03 funcionando !!')}
        
    />
    </>
  )
}