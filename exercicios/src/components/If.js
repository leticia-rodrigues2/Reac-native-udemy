import React from "react";

export default props => {
  if (props.teste){
    return props.children
  }else {
    return false
  }
}

// export default (props) => {
//   return(
//     { props.teste
//     : props.children
//     ? false
//     }
//   )
// }