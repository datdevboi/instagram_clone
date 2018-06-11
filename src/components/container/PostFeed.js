import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Post} from '../presentation';
export class PostFeed extends Component {
  render() {
    return (
      <View>
       <Post/>
      </View>
    )
  }
}

export default PostFeed