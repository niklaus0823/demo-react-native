import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import BaseStyles from '../../config/BaseStyles';

// 发现主面板
class IndexDiscoveryComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ [BaseStyles.container, BaseStyles.alignCenter, BaseStyles.alignVerticalCenter] }>
        <View>
          <Text style={ BaseStyles.text }>发现主面板DISPLAY</Text>
        </View>
      </View>
    );
  }
}

export default IndexDiscoveryComponent;