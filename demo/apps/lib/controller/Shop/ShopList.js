import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight, Alert } from 'react-native';
import MainStyles from '../../../styles/MainStyles';

class ShopListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    fetch(this.props.AppConfig.REQUEST_URL + '/apps/public/data/shop.json')
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
    this.props.navigator.pop();
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
      this.props.navigator.push({ name:"ShopView", shop:shop });
    }
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={ MainStyles.container }>

        <View style={ Styles.header }>
          <TouchableHighlight style={ Styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ Styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ MainStyles.inputSearch }>
            <TextInput style={ MainStyles.inputSearchText } defaultValue={ this.props.router.keyword } editable={ false } underlineColorAndroid="transparent"/>
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
      <View style={ MainStyles.container }>
        <Text>
          Loading datas...
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
    let shopThumbnail = this.props.AppConfig.REQUEST_URL + '/' + shop.thumbnail;
    let shopStar = this.drawStar(shop.star);
    let shopStatus = (shop.status == 1) ? "正常经营" : "停业休息";

    return (
      <TouchableHighlight onPress={ () => this.goShopView.bind(this)(shop) } underlayColor='#99d9f4'>
        <View style={ MainStyles.listRows }>

          <Image style={ MainStyles.imageWithBorder } source={{ uri: shopThumbnail }} />

          <View style={ MainStyles.cellRows }>

            <View style={ MainStyles.cell70 }>
              <Text style={ [MainStyles.text, MainStyles.textBlack] }>{ shop.title }</Text>
              <Text style={ [MainStyles.textSmaller] }>
                <Text style={ MainStyles.textGold }>{ shopStar }</Text>
                <Text style={ [MainStyles.textOrange, MainStyles.textBolder] }> { shop.star }</Text>
                <Text style={ MainStyles.textGray }>  月售{ shop.totalSell }单</Text>
              </Text>
              <View style={ [Styles.shopStatus] }>
                <Text style={ [MainStyles.textSmaller, MainStyles.textWhite] }>{ shopStatus }</Text>
              </View>
            </View>

            <View style={ MainStyles.cell30 }>
              <Text style={ [MainStyles.textSmaller, MainStyles.textRight] }>
                <Text style={ [MainStyles.textSmall, MainStyles.textOrange, MainStyles.textBolder] }>￥{ shop.startPrice }</Text> 起送
              </Text>
              <Text style={ [MainStyles.textSmaller, MainStyles.textRight] }>
                <Text style={ [MainStyles.textOrange, MainStyles.textBolder] }>￥{ shop.deliveryPrice }</Text> 配送费
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