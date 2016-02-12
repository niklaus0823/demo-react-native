import React,{ Component, View, Text, StyleSheet } from 'react-native';

// 场景2
class stageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: props.navigator
    };
  }

  render() {
    return (
      <View>
        <Text>我的订单</Text>
      </View>
    );
  }
}

export default stageComponent