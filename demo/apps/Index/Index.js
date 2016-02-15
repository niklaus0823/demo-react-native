import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import IndexDefault from './IndexDefault';
import IndexOrder from './IndexOrder';
import IndexDiscovery from './IndexDiscovery';
import IndexMine from './IndexMine';
import BaseStyles from '../../config/BaseStyles';

// 主页
class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNavigator: props.mainNavigator,
      subNavigator: null,
      defaultTitle: '搜索外卖',
      defaultComponent: 'IndexDefault'
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
    this.state.subNavigator = navigator;

    return <Component router={ router } mainNavigator={ this.state.mainNavigator } childNavigator={ navigator } />
  }

  goIndexPage() {
    this.state.subNavigator.push({ name:"IndexDefault" });
    this.changeTitle('搜索外卖');
  }

  goOrderPage() {
    this.state.subNavigator.push({ name:"IndexOrder" });
    this.changeTitle('订单管理');
  }

  goDiscovery() {
    this.state.subNavigator.push({ name:"IndexDiscovery" });
    this.changeTitle('周边发现');
  }

  goMine() {
    this.state.subNavigator.push({ name:"IndexMine" });
    this.changeTitle('我的管理');
  };

  render() {

    return (
      <View style={ BaseStyles.container }>

        <View style={ Styles.header }>
          <Text style={ [BaseStyles.text, BaseStyles.textWhite] }>{ this.state.defaultTitle }</Text>
        </View>

        <View style={ Styles.context }>
          <Navigator
            style={ BaseStyles.container }
            initialRoute={{ name: this.state.defaultComponent }}
            configureScene={ this.configureScene }
            renderScene={ this.renderScene.bind(this) }
            />
        </View>

        <View style={ Styles.footer }>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goIndexPage.bind(this) }>
            <Text style={ BaseStyles.text }>外卖</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goOrderPage.bind(this) }>
            <Text style={ BaseStyles.text }>订单</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goDiscovery.bind(this) }>
            <Text style={ BaseStyles.text }>发现</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goMine.bind(this) }>
            <Text style={ BaseStyles.text }>我的</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}

const Styles = StyleSheet.create({
  // LAYOUT BOX
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

  // FOOTER
  footerButton: {
    flex: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#48BBEC',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default MainComponent;