import React,{ Component, View, Text, StyleSheet } from 'react-native';

// 场景3
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
        <Text>我的餐桌</Text>
      </View>
    );
  }
}

export default stageComponent