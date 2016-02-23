import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import MainStyles from '../../../styles/MainStyles';

// 我的管理主面板
class IndexMineComponent extends Component {
  render() {
    return (
      <View style={ [MainStyles.container, MainStyles.alignCenter, MainStyles.alignVerticalCenter] }>
        <View>
          <Text style={ MainStyles.text }>我的管理主面板DISPLAY</Text>
        </View>
      </View>
    );
  }
}

export default IndexMineComponent;