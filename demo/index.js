'use strict';
import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import Index from './apps/Index/Index';
import ShopList from './apps/Shop/ShopList';
import ShopView from './apps/Shop/ShopView';
import BaseStyles from './config/BaseStyles';

class demo extends Component {

  constructor() {
    super();
    this.state = {
      defaultComponent: 'Index'
    };
  }

  configureScene(route) {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }

  renderScene(router, navigator) {
    let Component = null;
    switch(router.name) {
      case "Index":
        Component = Index;
        break;
      case "ShopList":
        Component = ShopList;
        break;
      case "ShopView":
        Component = ShopView;
        break;
      default:
        Component = Index;
    }

    return <Component router={ router } mainNavigator={ navigator } />
  }

  render() {
    return (
      <Navigator
        style={ BaseStyles.container }
        initialRoute={{ name: this.state.defaultComponent }}
        configureScene={ this.configureScene }
        renderScene={ this.renderScene }
        />
    );
  }

}

export default demo;
