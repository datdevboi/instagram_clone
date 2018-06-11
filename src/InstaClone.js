import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import {MainFeed, Login} from './components/screens'
import {createStackNavigator, TabNavigator} from 'react-navigation';


const MainStack = createStackNavigator({
  login: {
    screen: Login
  },
  main: {
    screen: MainFeed
  }
}, {
  initialRouteName: 'main'
})
export default class InstaClone extends Component {
    

  
  render() {
   
    return (
      
        <MainStack/>
      
    )
  }
}



