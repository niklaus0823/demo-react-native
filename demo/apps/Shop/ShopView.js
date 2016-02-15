import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import BaseConfigs from '../../config/BaseConfigs';
import BaseStyles from '../../config/BaseStyles';

class ShopViewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNavigator: props.mainNavigator,
      shop:props.router.shop,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.shop.menuList),
      loaded: true
    });
  }

  goBack() {
    this.state.mainNavigator.pop();
  }

  render() {
    return (
      <View style={ BaseStyles.container }>

        <View style={ Styles.header }>
          <TouchableHighlight style={ Styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ Styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ BaseStyles.headerTitle }>
            <Text style={ BaseStyles.headerTitleText }>{ this.state.shop.title }</Text>
          </View>
        </View>

        <ListView
          style={ Styles.context }
          dataSource={ this.state.dataSource }
          renderRow={ this.renderMenuList.bind(this) }
          />

        <View style={ Styles.cartArea} >
          <Text>绝对底部</Text>
        </View>
      </View>
    );
  }


  drawStar(count, stars= '') {
    for (let i = 0; i < count; i++) {
      stars += '★';
    }
    return stars;
  }

  renderMenuList(menu) {
    let menuThumbnail = BaseConfigs.REQUEST_URL + menu.thumbnail;
    let menuStar = this.drawStar(menu.star);

    return (
      <TouchableHighlight underlayColor='#99d9f4'>
        <View style={ BaseStyles.listRows }>

          <Image style={ BaseStyles.image } source={{ uri: menuThumbnail }} />

          <View style={ BaseStyles.container }>
            <View style={ BaseStyles.cellRows }>
              <View style={ BaseStyles.cell80 }>
                <Text style={ [BaseStyles.text, BaseStyles.textBlack] }>{ menu.title }</Text>
                <Text style={ [BaseStyles.textSmaller, BaseStyles.textGray] }>{ menu.description }</Text>
                <Text style={ [BaseStyles.textSmaller, BaseStyles.textGray] }>
                  <Text style={ BaseStyles.textGold }>{ menuStar }</Text>
                  { menu.star } 月售{ menu.totalSell }份
                </Text>
                <Text style={ [BaseStyles.text, BaseStyles.textBolder, BaseStyles.textOrange] }>￥{ menu.price }</Text>
              </View>
              <View style={ [BaseStyles.cell20] }>
                  <Text style={ [BaseStyles.textBigger, BaseStyles.textGray, BaseStyles.textRight] }>+</Text>
              </View>
            </View>

          </View>

        </View>
      </TouchableHighlight>
    );
  }
}

const Styles = StyleSheet.create({
  // LAYOUT BOX
  header: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#48BBEC',
    paddingLeft: 20,
    paddingRight: 20
  },
  context: {
    flex: 90,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20
  },
  cartArea: {
    flex: 10,
    backgroundColor: '#000000',
    opacity: 0.5,
    bottom: 0,
    position: 'absolute'
  },

  // BUTTON
  button: {
    width: 50
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    alignSelf: 'center'
  }
});


export default ShopViewComponent;