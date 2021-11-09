import React from "react";
import Filh1o from'./Filho1'

export default props => {
  let x = 13
  let y = 100
  return (
    <>
    <Filho1 a={x} b={y}/>
    <Filh1o a={x+10} b={y+20}/>
    
    </>
  )
}