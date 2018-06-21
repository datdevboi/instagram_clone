import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import config from '../../config';
import withContext from '../../withContext';
import Turbo from 'turbo360';

class MyC extends React.Component {
  constructor(props) {
    super(props);
    this.camera = React.createRef();

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.front,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  }

  takePicture = async () => {
    if (this.camera) {
      const photo = await this.camera.takePictureAsync({
        quality: 0.5,
        base64: true,
      });

      const turbo = Turbo({ site_id: '5b1d9c0fc9611100148e9daa' });

      const cdnResponse = await turbo.uploadFile({
        type: 'image/jpeg',
        name: 'photo',
        uri: photo.uri,
      });

      fetch(config.baseUrl + `/api/users/${this.props.context.userId}/photo`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageUrl: cdnResponse.result.url,
        }),
      })
        .then(response => response.json())
        .then(data => alert(JSON.stringify(data)))
        .catch(err => alert(err));
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    } else {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <Camera
            style={{
              flex: 1,
            }}
            type={this.state.type}
            ref={ref => (this.camera = ref)}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={styles.cameraControlls}> Flip </Text>{' '}
              </TouchableOpacity>{' '}
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text onPress={this.takePicture} style={styles.cameraControlls}>
                  {' '}
                  Take a picture{' '}
                </Text>{' '}
              </TouchableOpacity>{' '}
            </View>{' '}
          </Camera>{' '}
        </View>
      );
    }
  }
}

const MyCamera = withContext(MyC);

export default MyCamera;

const styles = StyleSheet.create({
  cameraControlls: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});
