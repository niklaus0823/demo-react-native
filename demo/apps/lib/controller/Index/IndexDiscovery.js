import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import MainStyles from '../../../styles/MainStyles';

// 发现主面板
class IndexDiscoveryComponent extends Component {
  render() {
    return (
      <View style={ [MainStyles.container, MainStyles.alignCenter, MainStyles.alignVerticalCenter] }>
        <View>
          <Text style={ MainStyles.text }>发现主面板DISPLAY</Text>
        </View>
      </View>
    );
  }
}

export default IndexDiscoveryComponent;