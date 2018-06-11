import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import {MainFeed, Login, Camera, Profile} from './components/screens'
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';


const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const MainStack = createSwitchNavigator({
  login: {
    screen: Login
  },
  main: {
    screen: Tabs
  }
}, {
  initialRouteName: 'login'
})
export default class InstaClone extends Component {
    

  
  render() {
   
    return (
      
        <MainStack/>
      
    )
  }
}



