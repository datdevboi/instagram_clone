import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import config from '../../config';
import withContext from '../../withContext';

class P extends Component {
  state = {
    profilePics: [],
  };

  static oneThirdWdith = Math.floor(Dimensions.get('window').width / 3);
  componentDidMount() {
    fetch(config.baseUrl + `/api/photo?user=${this.props.context.userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.props.context.updatePhotos(data.data);
      })
      .catch(err => alert(err));
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.context.profilePics.map((pic, i) => {
          return (
            <Image
              style={styles.profilePic}
              source={{ uri: `${pic.url}=s${P.oneThirdWdith}-c` }}
              key={i}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100 + '%',
    flexDirection: 'row',
  },
  profilePic: {
    height: P.oneThirdWdith,
    width: P.oneThirdWdith,
  },
});

const Profile = withContext(P);

export default Profile;
