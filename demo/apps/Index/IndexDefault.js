"use strict";
import React, { Component, ScrollView, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight, Alert } from 'react-native';

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
      <View style={ styles.container }>

        <View style={ styles.header }>
          <View style={ styles.inputSearch }>
            <TextInput ref="keyword" style={ styles.inputSearchText } onChange={ this.onSearchChanged.bind(this) } underlineColorAndroid="transparent" placeholder='请输入商家或商品名称'/>
          </View>
          <TouchableHighlight style={ styles.button } onPress={ this.onSearchPress.bind(this) } underlayColor='#99d9f4'>
            <Text style={ styles.buttonText }>Go</Text>
          </TouchableHighlight>
        </View>

        <View style={ styles.context }>
          <Text style={ styles.text }>附近餐厅主面板DISPLAY</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  // FONT
  text: {
    fontSize: 20,
    color: '#48BBEC'
  },

  // LAYOUT BOX
  container: {
    flex: 1
  },
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
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },

  // BUTTON
  button: {
    flex: 1,
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  // INPUT
  inputSearch: {
    flex: 9,
    height: 36,
    marginRight: 10,
    marginBottom: 0,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8
  },
  inputSearchText: {
    height: 36,
    fontSize: 18,
    color: '#48BBEC',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 10
  }
});


export default MainIndexComponent;