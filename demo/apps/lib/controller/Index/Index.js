import React, { Component, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight } from 'react-native';
import IndexDefault from './IndexDefault';
import IndexOrder from './IndexOrder';
import IndexDiscovery from './IndexDiscovery';
import IndexMine from './IndexMine';
import MainStyles from '../../../styles/MainStyles';

// 主页
class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childNavigator: null,
      defaultTitle: '搜索外卖'
    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState({
      defaultTitle: title
    });
  }

  configureScene(route) {
    return Navigator.SceneConfigs.HorizontalSwipeJump;
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

    return <Component {...this.props} router={ router } />
  }

  goIndexPage() {
    this.state.childNavigator.push({ name:"IndexDefault" });
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
      <View style={ MainStyles.container }>

        <View style={ Styles.header }>
          <Text style={ [MainStyles.text, MainStyles.textWhite] }>{ this.state.defaultTitle }</Text>
        </View>

        <View style={ Styles.context }>
          <Navigator
            style={ MainStyles.container }
            initialRoute={{ name: 'IndexDefault' }}
            configureScene={ this.configureScene }
            renderScene={ this.renderScene.bind(this) }
            />
        </View>

        <View style={ Styles.footer }>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goIndexPage.bind(this) }>
            <Text style={ MainStyles.text }>外卖</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goOrderPage.bind(this) }>
            <Text style={ MainStyles.text }>订单</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goDiscovery.bind(this) }>
            <Text style={ MainStyles.text }>发现</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ Styles.footerButton } underlayColor='#FFFFFF' onPress={ this.goMine.bind(this) }>
            <Text style={ MainStyles.text }>我的</Text>
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