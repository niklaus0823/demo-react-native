import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import MainStyles from '../../../styles/MainStyles';

// 订单主面板
class IndexOrder extends Component {
  render() {
    return (
      <View style={ [MainStyles.container, MainStyles.alignCenter, MainStyles.alignVerticalCenter] }>
        <View>
          <Text style={ MainStyles.text }>订单主面板DISPLAY</Text>
        </View>
      </View>
    );
  }
}

export default IndexOrder;