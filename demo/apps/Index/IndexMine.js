import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

// 我的管理主面板
class IndexMineComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View>
          <Text style={ styles.text }>我的管理主面板DISPLAY</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#48BBEC'
  }
});


export default IndexMineComponent;