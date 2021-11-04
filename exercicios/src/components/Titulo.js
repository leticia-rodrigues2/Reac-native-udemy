import React,{ Fragment} from "react";
import {View , Text} from 'react-native'
import Estilo from "./estilo";

export default props =>(
 <React.Fragment>
 <Text style={Estilo.txtG}>{props.principal}</Text>
  <Text>{props.segundario}</Text>
  </React.Fragment>
 
)

// *** QUANDO PRECISA USAR ALGO JUNTO DO FRAGMENT EX : KEY ***
// export default props =>(
//   <React.Fragment key ="1">
//   <Text style={Estilo.txtG}>{props.principal}</Text>
//    <Text>{props.segundario}</Text>
//    </React.Fragment>
//   )

 // ***** IMPORTANDO O FRAGMENT **** 
//  export default props =>(
//   <Fragment>
//   <Text style={Estilo.txtG}>{props.principal}</Text>
//    <Text>{props.segundario}</Text>
//    <Fragment>
//   )


 // **** SEM PRECISAR IMPORTA E CHAMAR DIRETAMENTE ****
// export default props =>(
//   <>
//   <Text style={Estilo.txtG}>{props.principal}</Text>
//    <Text>{props.segundario}</Text>
//    </>
//   )
