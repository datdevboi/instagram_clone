import React, { Component } from 'react';
import { View, Text } from 'react-native';
import withContext from '../../withContext';

class P extends Component {
  render() {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    );
  }
}

const Profile = withContext(P);

export default Profile;
