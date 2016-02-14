'use strict';
import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import MainIndex from './apps/Main/Index';
import ShopList from './apps/Shop/ShopList';

class demo extends Component {

  constructor() {
    super();
    this.state = {
      defaultComponent: 'MainIndex',
      navigator: null
    };
  }

  configureScene(route) {
    return Navigator.SceneConfigs.PushFromRight;
  }

  renderScene(router, navigator) {
    let Component = null;
    switch(router.name) {
      case "MainIndex":
        Component = MainIndex;
        break;
      case "ShopList":
        Component = ShopList;
        break;
      default: //default view
        Component = MainIndex;
    }
    this.state.navigator = navigator;

    return <Component router={ router } navigator={ navigator } />
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={{ name: this.state.defaultComponent }}
        configureScene={ this.configureScene }
        renderScene={ this.renderScene.bind(this) }
        />
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default demo;
