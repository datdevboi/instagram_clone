import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Login extends Component {

  login = () => {
    this.props.navigation.navigate("main")
  }  
  render() {
    return (
      <View style={styles.loginContainer}>
      <TouchableOpacity 
        onPress={this.login}
        >
         <Text> Sign Up </Text>
      </TouchableOpacity>
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