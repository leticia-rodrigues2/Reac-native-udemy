import React from "react";
import {Text} from 'react-native';
import Estilo from '../estilo'
import produtos from "./produtos";

export default props =>{
  function obterLista() {
    return produtos.map ( p => {
      return(
        <Text  style = {Estilo.txtG} key ={p.id}>
          {p.id} {p.nome} preço R$ {p.preco}
        </Text>
      )

    })
  }

  return(
    <>
      <Text style = {Estilo.txtG}>
        Lista de Produtos
      </Text>
      {obterLista()}
    </>
  ) 
}