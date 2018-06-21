import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import config from '../../config';
import withContext from '../../withContext';

class R extends Component {
  state = {
    email: '',
    password: '',
  };

  register = () => {
    fetch(config.baseUrl + '/api/signup', {
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
      .then(response => {
        if (response.confirmation === 'success') {
          this.props.context.changeUserId(response.data.id);
          this.props.navigation.navigate('feed');
        } else {
          throw new Error({
            message: 'Sorry something went wrong with register',
          });
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  updateText = (fieldName, newText) => {
    this.setState({
      [fieldName]: newText,
    });
  };
  render() {
    return (
      <View style={styles.registerContainer}>
        <Text>Register Page</Text>

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
        <Button onPress={this.register} title="register" />
      </View>
    );
  }
}

const Register = withContext(R);

export default Register;

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
