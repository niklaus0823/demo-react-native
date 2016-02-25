import React, { Component, ScrollView, View, Text, TextInput, Image, StyleSheet, Navigator, TouchableHighlight, Alert } from 'react-native';
import MainStyles from '../../../styles/MainStyles';

// 附近餐厅主面板
class MainIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: null
    };

    this.goShopList = this.goShopList.bind(this);
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
    this.props.navigator.push({ name:"ShopList", keyword:keyword });
  }

  render() {
    return (
      <View style={ MainStyles.container }>

        <View style={ Styles.header }>
          <View style={ MainStyles.inputSearch }>
            <TextInput ref="keyword" style={ MainStyles.inputSearchText } onChange={ this.onSearchChanged.bind(this) } underlineColorAndroid="transparent" placeholder='请输入商家或商品名称'/>
          </View>
          <TouchableHighlight style={ MainStyles.button } onPress={ this.onSearchPress.bind(this) } underlayColor='#99d9f4'>
            <Text style={ MainStyles.buttonText }>Go</Text>
          </TouchableHighlight>
        </View>

        <View style={ [Styles.context, MainStyles.alignCenter, MainStyles.alignVerticalCenter] }>
          <Text style={ MainStyles.text }>附近餐厅主面板DISPLAY</Text>
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
    paddingLeft: 20,
    paddingRight: 20
  },
  context: {
    flex: 6
  }
});


export default MainIndex;