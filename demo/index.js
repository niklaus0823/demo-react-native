import React, { Component, View, Text, StyleSheet, Navigator, BackAndroid } from 'react-native';
import stage0View from './apps/stage0/index.js';
import stage1View from './apps/stage1/index.js';
import stage2View from './apps/stage2/index.js';

class demo extends Component {

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
      default: //default view
        Component = stage0View;
    }

    return <Component navigator={ navigator } />
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'welcome' }} // 路由初始化配置信息，就是说页面首次加载时，展现的内容，可以使用component参数
        configureScene={ this.configureScene } // 场景转换动画配置, 'Navigator.SceneConfigs.Fade'
        renderScene={ this.renderScene } // 渲染场景，读取initialRouter传来的数据，确定显示那些内容。
      />
    );

  }
}

export default demo;