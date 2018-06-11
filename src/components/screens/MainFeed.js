import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from "../../config";
import { PostFeed } from "../container";
export default class MainFeed extends Component {
    

  
  render() {
   
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
            <Text>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    )
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + "%",
        height: 100 + "%"
    },
    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',

    }
    
})