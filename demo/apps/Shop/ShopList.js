import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight, Alert } from 'react-native';
import BaseConfigs from '../../config/BaseConfigs';
import BaseStyles from '../../config/BaseStyles';

class ShopListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNavigator: props.mainNavigator,
      keyword:props.router.keyword,
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
    fetch(BaseConfigs.REQUEST_URL + '/public/data/shop.json')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.shopList),
          loaded: true
        });
      })
      .done();
  }

  goBack() {
    this.state.mainNavigator.pop();
  }

  goShopView(shop) {
    if (shop.status == 0) {
      Alert.alert(
        '警告',
        shop.title + "停业中",
        [
          { text: '确认' }
        ]
      )
    } else {
      this.state.mainNavigator.push({ name:"ShopView", shop:shop });
    }
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={ BaseStyles.container }>

        <View style={ Styles.header }>
          <TouchableHighlight style={ Styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ Styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ BaseStyles.inputSearch }>
            <TextInput style={ BaseStyles.inputSearchText } defaultValue={ this.state.keyword } editable={ false } underlineColorAndroid="transparent"/>
          </View>
        </View>

        <ListView
          style={ Styles.context }
          dataSource={ this.state.dataSource }
          renderRow={ this.renderShopList.bind(this) }
          />

      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={ BaseStyles.container }>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  drawStar(count, stars = '') {
    for (let i = 0; i < count; i++) {
      stars += '★';
    }
    return stars;
  }

  renderShopList(shop) {
    let shopThumbnail = BaseConfigs.REQUEST_URL + shop.thumbnail;
    let shopStar = this.drawStar(shop.star);
    let shopStatus = (shop.status == 1) ? "正常经营" : "停业休息";

    return (
      <TouchableHighlight onPress={ () => this.goShopView.bind(this)(shop) } underlayColor='#99d9f4'>
        <View style={ BaseStyles.listRows }>

          <Image style={ BaseStyles.imageWithBorder } source={{ uri: shopThumbnail }} />

          <View style={ BaseStyles.cellRows }>

            <View style={ BaseStyles.cell70 }>
              <Text style={ [BaseStyles.text, BaseStyles.textBlack] }>{ shop.title }</Text>
              <Text style={ [BaseStyles.textSmaller] }>
                <Text style={ BaseStyles.textGold }>{ shopStar }</Text>
                <Text style={ [BaseStyles.textOrange, BaseStyles.textBolder] }> { shop.star }</Text>
                <Text style={ BaseStyles.textGray }>  月售{ shop.totalSell }单</Text>
              </Text>
              <View style={ [Styles.shopStatus] }>
                <Text style={ [BaseStyles.textSmaller, BaseStyles.textWhite] }>{ shopStatus }</Text>
              </View>
            </View>

            <View style={ BaseStyles.cell30 }>
              <Text style={ [BaseStyles.textSmaller, BaseStyles.textRight] }>
                <Text style={ [BaseStyles.textSmall, BaseStyles.textOrange, BaseStyles.textBolder] }>￥{ shop.startPrice }</Text> 起送
              </Text>
              <Text style={ [BaseStyles.textSmaller, BaseStyles.textRight] }>
                <Text style={ [BaseStyles.textOrange, BaseStyles.textBolder] }>￥{ shop.deliveryPrice }</Text> 配送费
              </Text>
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

  // BUTTON
  button: {
    width: 50
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    alignSelf: 'center'
  },

  // SHOP STYLE
  shopStatus: {
    width: 60,
    height: 20,
    backgroundColor: '#BBBBBB',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default ShopListComponent;