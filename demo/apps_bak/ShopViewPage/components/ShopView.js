import React,{ Component, View, Text, StyleSheet } from 'react-native';


class ShopViewComponent extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      navigator:props.navigator
    };
  }

  render() {
    return (
      <Text>
        Shop View
      </Text>
    );
  }

}


export default ShopViewComponent;