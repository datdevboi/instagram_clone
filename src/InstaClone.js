import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class InstaClone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
            <Text>Instagram</Text>
        </View>

        <Image 
            
            style={styles.image} 
            source={{uri: "https://lh3.googleusercontent.com/vj5YsrWwmHZpUmgV5tz1YeWPYc8Dnrq_fAG-TCw4FziC-LBSLUZKXprRN4UnLyZBRWNg9_wd0fp0c8_Ne2KPo6SJVYA"}}
        />
      </View>
    )
  }
}



const styles = StyleSheet.create({
    image: {
        width: 100 + "%",
        height: 100
    },
    container: {
        flex: 1,
        width: 100 + "%",
        height: 100 + "%"
    },
    tempNav: {
        width: 100 + "%",
        height: 50,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',

    }
})