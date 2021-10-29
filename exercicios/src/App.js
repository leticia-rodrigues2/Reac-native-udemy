import React from "react"
import {View} from 'react-native'

import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import Primeiro  from './components/Primeiro'

export default () =>
(
  <View> 
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />
  </View> 
)
