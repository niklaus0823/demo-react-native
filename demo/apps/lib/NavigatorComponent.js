import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import Index from './controller/Index/Index';
import ShopList from './controller/Shop/ShopList';
import ShopView from './controller/Shop/ShopView';

class index extends Component {

  constructor(props) {
    super(props);
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

    return <Component {...this.props} router={ router } navigator={ navigator } />
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Index' }}
        configureScene={ this.configureScene }
        renderScene={ this.renderScene.bind(this) }
        />
    );
  }

}

export default index;
