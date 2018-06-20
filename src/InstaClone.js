import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  MainFeed,
  Login,
  Camera,
  Profile,
  Register,
} from './components/screens';
import { MainContext } from './MainContext';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile,
});

const IntroStack = createStackNavigator({
  login: Login,
  register: Register,
});

const MainStack = createSwitchNavigator(
  {
    intro: IntroStack,

    main: Tabs,
  },
  {
    initialRouteName: 'intro',
  }
);

export default class InstaClone extends Component {
  render() {
    return (
      <MainContext>
        <MainStack />
      </MainContext>
    );
  }
}
