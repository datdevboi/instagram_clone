import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class myCamera extends React.Component {
  constructor(props) {
    super(props);
    this.camera = React.createRef();

    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
    };
  }
  

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = () => {
    if(this.camera){
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  }

  onPictureSaved = async(photo) => {

  }



  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera 
          style={{ flex: 1 }} 
          type={this.state.type}
          ref={this.camera}
          >
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
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={styles.cameraControlls}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={styles.cameraControlls}>Take a picture</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  cameraControlls: {
    fontSize: 18, 
    marginBottom: 10, 
    color: 'white'

  }
})
