import React,{ Component, View, Text, StyleSheet } from 'react-native';

// 场景3
class stageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: props.navigator
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.state.navigator.push({ name:"default" });
  }

  render() {
    return (
      <View>
        <Text>STAGE 2</Text>
        <Text onPress={this.goBack}>back</Text>
      </View>
    );
  }
}

export default stageComponent