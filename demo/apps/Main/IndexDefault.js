"use strict";
import React, { Component, ScrollView, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight, Alert } from 'react-native';

// 附近餐厅主面板
class MainIndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
      goShopList: props.router.goShopList
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
          { text: '是', onPress: () => this.state.goShopList(this.state.keyword) },
          { text: '否', onPress: () => this.refs.keyword.focus() }
        ]
      )
    }
  }

  render() {
    return (
      <ScrollView style={ styles.container }>
        <View style={ styles.searchBar }>
          <View style={ styles.searchInput }>
            <TextInput ref="keyword" style={ styles.textInput } onChange={ this.onSearchChanged.bind(this) } underlineColorAndroid="transparent" placeholder='请输入商家或商品名称'/>
          </View>
          <TouchableHighlight style={ styles.button } onPress={ this.onSearchPress.bind(this) } underlayColor='#99d9f4'>
            <Text style={ styles.buttonText }>Go</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.indexDisplay }>
          <Text style={ styles.text }>附近餐厅主面板DISPLAY</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: '#48BBEC'
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#48BBEC',
    paddingLeft: 50,
    paddingRight: 50
  },
  indexDisplay: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 8,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    flex: 9,
    height: 36,
    marginRight: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8
  },
  textInput: {
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