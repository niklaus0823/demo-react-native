import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';

class ShopViewComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>SHOP View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default ShopViewComponent;