
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'
export default class Post extends Component {
    state = {
        screenWidth:  Math.floor(Dimensions.get("window").width),
        photoLiked: false
    }

    handleLike = () => {
        this.setState((prev) => ({
            photoLiked: !prev.photoLiked
        }))
    }

  
  render() {
    const heartTint = this.state.photoLiked ?   'rgb(252,61,57)' : 'black'
    const imageHeight = Math.floor(this.state.screenWidth * 1.1) 
    const imageUri = this.props.imageSrc + "=s" + imageHeight + "-c"

    return (
      <View>
        <View style={styles.userBar}>
            <View style={styles.userInfo}>
                <Image 
                    style={styles.profilePic}
                    source={{uri: "https://lh3.googleusercontent.com/XjPWx8hu_LuIyMXWg_kp5SnsZBT5Nz9WwjBgj_ck-tZIKk_aiNab_HD3FbAa6U71qpxojTOXTAZ_Cn9c1Y1HZ0JTOLE"}}
                />
                <Text>Amy</Text>
            </View>
            <View style={styles.options}>
               <Image style={{height: 20, width: 20, tintColor: "black"}} source={config.images.menuIcon}/>
            </View>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.handleLike}
            
        >
        <Image 
            
            style={{height: 425, width: this.state.screenWidth}} 
            source={{uri: imageUri}}
        />
        </TouchableOpacity>
        <View style={styles.iconBar}>
            <Image  style={[styles.icon, {height: 40, width: 40, tintColor: heartTint}]} source={config.images.heartIcon}/>
            <Image style={[styles.icon, {height: 36, width: 36}]} source={config.images.messageIcon}/>
            <Image style={[styles.icon, {height: 40, width: 40}]} source={config.images.arrowIcon}/>
        </View>
        <View style={styles.commentBar}>
        <Image  style={[styles.icon, {height: 30, width: 30, marginRight: 7}]} source={config.images.heartIcon}/>
        <Text>120 Likes</Text>

        </View>
      </View>
    )
  }
}

Post.defaultProps = {
    imageSrc: "https://lh3.googleusercontent.com/vj5YsrWwmHZpUmgV5tz1YeWPYc8Dnrq_fAG-TCw4FziC-LBSLUZKXprRN4UnLyZBRWNg9_wd0fp0c8_Ne2KPo6SJVYA"
}



const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center',

    },
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    profilePic: {
        borderRadius: 20,
        height: 40,
        width: 40,
        marginRight: 10
    },
    userInfo: {
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "space-between"
    },
    options: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        flexDirection: "column",
        
    
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgb(233,233,233)",
        flexDirection: "row",
        alignItems: 'center',

    },
    icon: {
       marginLeft: 10,
    },
    commentBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "rgb(233,233,233)",
        flexDirection: 'row',
        alignItems: "center",

        
    }
})