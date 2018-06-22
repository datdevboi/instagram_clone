import React, { Component } from 'react';

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
      <Container style={{ backgroundColor: 'white', justifyContent: 'center' }}>
        <Title style={{ padding: 20 }}>Register Page</Title>

        <Form>
          <Item regular>
            <Icon type="FontAwesome" name="envelope" />
            <Input
              autoCorrect={false}
              onChangeText={text => {
                this.updateText('email', text);
              }}
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

          <Button
            onPress={this.register}
            primary
            bordered
            full
            style={{ marginVertical: 10 }}>
            <Text>Register</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const Register = withContext(R);

export default Register;
