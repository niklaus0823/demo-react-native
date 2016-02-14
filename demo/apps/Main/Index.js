import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import IndexDefault from './IndexDefault';
import IndexOrder from './IndexOrder';
import IndexDiscovery from './IndexDiscovery';
import IndexMine from './IndexMine';

// 主页
class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: props.navigator,
      defaultTitle: '搜索外卖',
      defaultComponent: 'IndexDefault',
      childNavigator: null
    };

    // 将state绑定到自定义函数onChange中
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState({
      defaultTitle: title
    });
  }

  configureScene(route) {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(router, navigator) {
    let Component = null;
    switch(router.name) {
      case "IndexDefault":
        Component = IndexDefault;
        break;
      case "IndexOrder":
        Component = IndexOrder;
        break;
      case "IndexDiscovery":
        Component = IndexDiscovery;
        break;
      case "IndexMine":
        Component = IndexMine;
        break;
      default: //default view
        Component = IndexDefault;
    }
    this.state.childNavigator = navigator;

    return <Component router={ router } navigator={ navigator } />
  }

  goShopList(keyword) {
    this.state.navigator.push({ name:"ShopList", keyword:keyword });
  }

  goIndexPage() {
    this.state.childNavigator.push({ name:"IndexDefault", goShopList:this.goShopList.bind(this) });
    this.changeTitle('搜索外卖');
  }

  goOrderPage() {
    this.state.childNavigator.push({ name:"IndexOrder" });
    this.changeTitle('订单管理');
  }

  goDiscovery() {
    this.state.childNavigator.push({ name:"IndexDiscovery" });
    this.changeTitle('周边发现');
  }

  goMine() {
    this.state.childNavigator.push({ name:"IndexMine" });
    this.changeTitle('我的管理');
  };

  render() {

    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ [styles.text, styles.textWhite] }>{ this.state.defaultTitle }</Text>
        </View>
        <View style={ styles.context }>
          <Navigator
            style={ styles.container }
            initialRoute={{ name: this.state.defaultComponent, goShopList: this.goShopList.bind(this) }}
            configureScene={ this.configureScene }
            renderScene={ this.renderScene.bind(this) }
            />
        </View>
        <View style={ styles.footer }>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goIndexPage.bind(this) }>
            <Text style={ styles.text }>外卖</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goOrderPage.bind(this) }>
            <Text style={ styles.text }>订单</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goDiscovery.bind(this) }>
            <Text style={ styles.text }>发现</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goMine.bind(this) }>
            <Text style={ styles.text }>我的</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 10,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  context: {
    flex: 80,
    backgroundColor: '#FFFFFF'
  },
  footer: {
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#EFEFEF'
  },
  text: {
    fontSize: 26
  },
  textWhite: {
    color: '#FFFFFF'
  },
  footerButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default MainComponent;