import React from "react";
import {Text, FlatList} from 'react-native';
import Estilo from '../estilo'
import produtos from "./produtos";

export default props => {
  const produtoRender = ({item : p}) => {
    return <Text style = {Estilo.txtG} > {p.id} {p.nome}</Text>
  }
  
  return(
    <>
      <Text style = {Estilo.txtG}>
        Lista de Produtos V2
      </Text>
        <FlatList
          data = {produtos}
          keyExtractor= { i=> `${i.id}`}
          renderItem = {produtoRender}
        />
      
    </>
  ) 
}