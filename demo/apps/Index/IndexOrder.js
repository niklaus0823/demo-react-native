import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import BaseStyles from '../../config/BaseStyles';

// 订单主面板
class IndexOrderComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ [BaseStyles.container, BaseStyles.alignCenter, BaseStyles.alignVerticalCenter] }>
        <View>
          <Text style={ BaseStyles.text }>订单主面板DISPLAY</Text>
        </View>
      </View>
    );
  }
}

export default IndexOrderComponent;