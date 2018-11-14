import React, { Component } from 'react';
import { View } from 'react-native';
import config from '../../config';
import withContext from '../../withContext';
import {
  Button,
  Text,
  Container,
  Title,
  Form,
  Input,
  Item,
  Icon,
} from 'native-base';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  login = async () => {
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
      <Container style={{ backgroundColor: 'white', justifyContent: 'center' }}>
        <Title style={{ padding: 20 }}>Login Page</Title>

        <Form>
          <Item regular>
            <Icon type="FontAwesome" name="envelope" />
            <Input
              autoCorrect={false}
              onChangeText={text => {
                this.updateText('email', text);
              }}
              // style={styles.input}
              placeholder="email"
              value={this.state.email}
            />
          </Item>
          <Item>
            <Icon type="FontAwesome" name="key" />
            <Input
              autoCorrect={false}
              onChangeText={text => {
                this.updateText('password', text);
              }}
              secureTextEntry
              placeholder="password"
              value={this.state.password}
            />
          </Item>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              onPress={this.login}
              primary
              bordered
              full
              style={{ marginVertical: 10 }}>
              <Text>Login</Text>
            </Button>

            <Button onPress={this.toRegister} info bordered full>
              <Text>No account? Register here</Text>
            </Button>
          </View>
        </Form>
      </Container>
    );
  }
}

export default withContext(Login);
