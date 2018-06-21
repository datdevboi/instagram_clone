import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { PostFeed } from '../container';
import withContext from '../../withContext';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}
const MainFeed = withContext(Main);

export default MainFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
  },
  tempNav: {
    width: 100 + '%',
    height: 56,

    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
