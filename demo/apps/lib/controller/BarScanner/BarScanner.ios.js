import React, { Component, View, Text, TextInput, Image, StyleSheet, TouchableHighlight, Dimensions, Alert } from 'react-native';
import Camera from 'react-native-camera';

class BarScanner extends Component {
  constructor(props) {
    super(props);
  }

  onBarCodeRead(e) {
    Alert.alert(
      "Barcode Found!",
      "Type: " + e.type + ", Data: " + e.data,
      [
        {
          text: '确定',
          onPress: () => {
            this.props.navigator.pop();
          }
        }
      ]
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={ Styles.preview }
          onBarCodeRead={ this.onBarCodeRead.bind(this) }
          aspect={ Camera.constants.Aspect.Fill }
          >
        </Camera>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default BarScanner;