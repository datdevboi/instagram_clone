import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {Post} from '../presentation';
export class PostFeed extends Component {

  renderPost = (post) => {
    return <Post />
  }
  render() {
    return (
      
      <FlatList
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={(key) => key.toString()}
        renderItem={this.renderPost}
      />
    )
  }
}

export default PostFeed