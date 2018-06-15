import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native'
import config from '../../config';

export default class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  login = () => {
    
    fetch(config.baseUrl + '/api/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: this.state.email,
    password: this.state.password,
  }),
})
  .then(data => data.json())
  .then(jsondata => {
    alert(jsondata.confirmation);
    if(jsondata.confirmation === "success") {
      this.props.navigation.navigate("main")
    } else {
      throw new Error(jsondata.message)
    }
  })
  .catch(err => {

    alert("User not found");
  })
  }  

  updateText = (fieldName, newText) => {
    this.setState({
      [fieldName]: newText
    })
  }

  
  render() {
    return (
      <View style={styles.registerContainer}>

        <Text>Login Page</Text>  
        
        <TextInput 
         autoCorrect={false}
          onChangeText={ (text) => {
            this.updateText("email", text)
          }}style={styles.input} 
          placeholder="email" 
          value={this.state.email}
        />
        <TextInput 
          autoCorrect={false}
          onChangeText={ (text) => {
            this.updateText("password", text)
          }}
          style={styles.input} secureTextEntry placeholder="password" value={this.state.password}/>
        <Button onPress={this.login} title="login"/>

        <Button title="No account? Register here" onPress={this.login}/>
        

      
      
      </View>
    )
  }
}



const styles = StyleSheet.create({
    registerContainer: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "rgb(252,61,57)",

    },
    input: {
     
      height: 50,
      width: 100 + "%",
      backgroundColor: "white",
      marginBottom: 10,
      
    },
    form: {
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'flex-start',
    }
})