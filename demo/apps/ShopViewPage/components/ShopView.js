import React,{ Component, View, Text, StyleSheet } from 'react-native';


class ShopViewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator:props.navigator
    };
  }

  render() {
    return (
      <View>
        Shop View
      </View>
    );
  }

}


export default ShopViewComponent;