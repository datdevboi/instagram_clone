import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import config from '../../config';
import withContext from '../../withContext';

class Login extends Component {
  state = {
    email: 'test@test.com',
    password: 'test',
  };

  login = async () => {
    await fetch(config.baseUrl + '/api/login', {
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
      .then(response => response.json())
      .then(response => {
        if (response.confirmation === 'success') {
          this.props.context.changeUserId(response.data.id);
          this.props.navigation.navigate('feed');
        } else {
          throw new Error(response.message);
        }
      })
      .catch(err => {
        alert(err);
        alert('User not found');
      });
  };

  updateText = (fieldName, newText) => {
    this.setState({
      [fieldName]: newText,
    });
  };

  toRegister = () => {
    this.props.navigation.navigate('register');
  };

  render() {
    return (
      <View style={styles.registerContainer}>
        <Text>Login Page</Text>

        <TextInput
          autoCorrect={false}
          onChangeText={text => {
            this.updateText('email', text);
          }}
          style={styles.input}
          placeholder="email"
          value={this.state.email}
        />
        <TextInput
          autoCorrect={false}
          onChangeText={text => {
            this.updateText('password', text);
          }}
          style={styles.input}
          secureTextEntry
          placeholder="password"
          value={this.state.password}
        />
        <Button onPress={this.login} title="login" />

        <Button title="No account? Register here" onPress={this.toRegister} />
      </View>
    );
  }
}

export default withContext(Login);

const styles = StyleSheet.create({
  registerContainer: {
    height: 100 + '%',
    width: 100 + '%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(252,61,57)',
  },
  input: {
    height: 50,
    width: 100 + '%',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
