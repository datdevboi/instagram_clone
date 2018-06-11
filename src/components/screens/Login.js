import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.loginContainer}>
        <Text> Login Page </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
    loginContainer: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
})