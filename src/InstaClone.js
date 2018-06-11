import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class InstaClone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
            <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
            <View style={styles.userInfo}>
                <Image 
                    style={styles.profilePic}
                    source={{uri: "https://lh3.googleusercontent.com/XjPWx8hu_LuIyMXWg_kp5SnsZBT5Nz9WwjBgj_ck-tZIKk_aiNab_HD3FbAa6U71qpxojTOXTAZ_Cn9c1Y1HZ0JTOLE"}}
                />
                <Text>Amy</Text>
            </View>
            <View style={styles.options}>
                <Text>Options</Text>
            </View>
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

    },
    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        justifyContent: "space-between"

    },
    profilePic: {
        borderRadius: 50,
        height: 50,
        width: 50
    },
    userInfo: {
        flexDirection: "row", 
        alignItems: "center"
    },
    options: {
        justifyContent: "center",
        marginRight: 10
    }
})