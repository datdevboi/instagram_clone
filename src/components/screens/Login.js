import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Login extends Component {

  login = () => {
      alert("loged in")
  }  
  render() {
    return (
      <TouchableOpacity 
        onPress={this.login}
        style={styles.loginContainer}>
         <Text> Login Page </Text>
      </TouchableOpacity>
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