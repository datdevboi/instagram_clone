import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';
import config from '../../config';
import withContext from '../../withContext';

class MyC extends React.Component {
  constructor(props) {
    super(props);
    this.camera = React.createRef();

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
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
      const { navigation } = this.props;
      const userId = navigation.getParam('userId', 'NO-ID');

      const photo = await this.camera.takePictureAsync({
        base64: true,
      });

      const response = await fetch(
        config.baseUrl + `api/users/${userId}/photo`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photo,
          }),
        }
      )
        .then(response => response.json())
        .then(data => alert(data.confirmation))
        .catch(err => console.log(err));
    }
  };

  onPictureSaved = photo => {
    const { navigation } = this.props;
    const userId = navigation.getParam('userId', 'NO-ID');

    alert(photo);
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
