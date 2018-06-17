import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import {MainFeed, Login, Camera, Profile, Register} from './components/screens'
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';


const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
  
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

const {Consumer, Provider} = React.createContext({
  userId: '',
  updateUserId: () => {

  }
})

export {Consumer};
export default class InstaClone extends Component {
    state = {
      userId: '',
      changeId: this.changeId
    }

  changeId = (id) => {
    this.setState({
      userId: id
    })
  }
  render() {
   
    return (
        <Provider value={this.state}>
          <MainStack/>
        </Provider>
      
    )
  }
}



