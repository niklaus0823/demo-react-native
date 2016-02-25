import React, { Component, Alert } from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

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
      <BarcodeScanner
        onBarCodeRead={ this.onBarCodeRead.bind(this) }
        style={{ flex: 1 }}
        torchMode='off'
        cameraType='back'
        />
    );
  }
}

export default BarScanner;