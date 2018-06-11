import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import {MainFeed, Login, Camera, Profile, Signup} from './components/screens'
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';


const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const IntroStack = createStackNavigator({
  login: Login,
  signup: Signup
})

const MainStack = createSwitchNavigator({
  intro: {
    screen: IntroStack
  },
  main: {
    screen: Tabs
  }
}, {
  initialRouteName: 'intro'
})
export default class InstaClone extends Component {
    

  
  render() {
   
    return (
      
        <MainStack/>
      
    )
  }
}



