import React,{ Component, View, Text, StyleSheet } from 'react-native';

// 场景1
class stageComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: props.navigator
    };
    this.goStage1 = this.goStage1.bind(this);
  }

  goStage1() {
    this.state.navigator.push({ name:"stage1" });
  }

  render() {
    return (
      <View style={ styles.body }>
        <View style={ styles.header }>
          <Text>店铺列表</Text>
        </View>

        <View style={ style.container}>
          列表
        </View>

        <View style={ styles.footer }>
          <Text onPress={ this.goStage1 }>点外卖</Text>
          <Text>品牌街</Text>
          <Text>我的订单</Text>
          <Text>我的餐桌</Text>
        </View>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  body: {
    textAlign: 'center'
  },

  header: {
    height: '20',
    backgroundColor: '#AAAAAA'
  },

  container: {
    height: '60',
    backgroundColor: '#FFFFFF'
  },

  footer: {
    height: '20',
    backgroundColor: '#AAAAAA'
  }
});

export default stageComponent