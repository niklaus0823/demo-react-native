"use strict";
import React, { Component, ScrollView, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight, Alert } from 'react-native';
import BaseStyles from '../../config/BaseStyles';

// 附近餐厅主面板
class MainIndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
      mainNavigator: props.mainNavigator
    };
  }

  onSearchChanged(event) {
    this.setState({ keyword: event.nativeEvent.text });
  }

  onSearchPress() {
    if (this.state.keyword == null
      || this.state.keyword == '') {
      this.refs.keyword.focus();
    } else {
      Alert.alert(
        '确认开始搜索',
        "关键字:" + this.state.keyword,
        [
          { text: '是', onPress: () => this.goShopList(this.state.keyword) },
          { text: '否', onPress: () => this.refs.keyword.focus() }
        ]
      )
    }
  }

  goShopList(keyword) {
    this.state.mainNavigator.push({ name:"ShopList", keyword:keyword });
  }

  render() {
    return (
      <View style={ BaseStyles.container }>

        <View style={ Styles.header }>
          <View style={ BaseStyles.inputSearch }>
            <TextInput ref="keyword" style={ BaseStyles.inputSearchText } onChange={ this.onSearchChanged.bind(this) } underlineColorAndroid="transparent" placeholder='请输入商家或商品名称'/>
          </View>
          <TouchableHighlight style={ BaseStyles.button } onPress={ this.onSearchPress.bind(this) } underlayColor='#99d9f4'>
            <Text style={ BaseStyles.buttonText }>Go</Text>
          </TouchableHighlight>
        </View>

        <View style={ [Styles.context, BaseStyles.alignCenter, BaseStyles.alignVerticalCenter] }>
          <Text style={ BaseStyles.text }>附近餐厅主面板DISPLAY</Text>
        </View>

      </View>
    );
  }
}

const Styles = StyleSheet.create({
  // LAYOUT BOX
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#48BBEC',
    paddingLeft: 50,
    paddingRight: 50
  },
  context: {
    flex: 6
  }
});


export default MainIndexComponent;