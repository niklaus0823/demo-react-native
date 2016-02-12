import React, { Component, View, Text, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import SearchPage from './apps/SearchPage/index.js';
import ShopViewPage from './apps/ShopViewPage/index.js';
import stage1View from './apps/stage1/index.js';
import stage2View from './apps/stage2/index.js';

class demo extends Component {

  constructor() {
    super();
    this.state = {
      currentTitle: '店铺列表',
      navigator: null
    };

    // 将state绑定到自定义函数onChange中
    this.changeState = this.changeState.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  changeState(title) {
    this.setState({
      currentTitle: title
    });
  }

  configureScene(route) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(router, navigator) {
    let Component = null;
    switch(router.name) {
      case "stage1":
        Component = stage1View;
        break;
      case "stage2":
        Component = stage2View;
        break;
      case "shopView":
        Component = ShopViewPage;
        break;
      default: //default view
        Component = SearchPage;
    }
    this.state.navigator = navigator;

    return <Component router={ router } navigator={ navigator } />
  }

  render() {
    let goShopView = (shop) => {
      this.state.navigator.push({ title: shop.title, name:"shopView", data: shop });
      this.changeState(shop.title);
    };

    let goSearchPage = () => {
      this.state.navigator.push({ title: '店铺列表', name:"searchPage", goShopView:goShopView });
      this.changeState('店铺列表');
    };

    let goStage1 = () => {
      this.state.navigator.push({ title: '我的订单', name:"stage1" });
      this.changeState('我的订单');
    };

    let goStage2 = () => {
      this.state.navigator.push({ title: '我的餐桌', name:"stage2" });
      this.changeState('我的订单');
    };

    return (
      <View style={ styles.body }>

        <View style={ styles.header }>
          <Text style={ styles.text }>{ this.state.currentTitle }</Text>
        </View>

        <View style={ styles.container}>
          <Navigator
            initialRoute={{ title: '店铺列表', name:"searchPage", goShopView:goShopView }}
            configureScene={ this.configureScene }
            renderScene={ this.renderScene }
          />
        </View>

        <View style={ styles.footer }>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ goSearchPage }>
            <Text style={styles.text}>搜索店铺</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ goStage1 }>
            <Text style={ styles.text }>我的订单</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ goStage2 }>
            <Text style={ styles.text }>我的餐桌</Text>
          </TouchableHighlight>
        </View>

      </View>

    );

  }
}

var styles = StyleSheet.create({
  text: {
    fontSize: 26
  },

  body: {
    flex: 1
  },

  header: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AAAAAA'
  },

  container: {
    flex: 80,
    backgroundColor: '#FFFFFF'
  },

  footer: {
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#AAAAAA'
  },

  footerButton: {
    flex: 10,
    borderWidth: 1,
    borderColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default demo;
