import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight, Alert } from 'react-native';

const REQUEST_URL = 'http://172.17.67.168:8081';
const REQUEST_DATA_API = REQUEST_URL + '/public/data/shop.json';

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
    fetch(REQUEST_DATA_API)
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
      <View style={ styles.container }>

        <View style={ styles.header }>
          <TouchableHighlight style={ styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ styles.inputSearch }>
            <Text style={ styles.inputSearchText }>搜索:{ this.state.keyword }</Text>
          </View>
        </View>

        <ListView
          style={ styles.context }
          dataSource={ this.state.dataSource }
          renderRow={ this.renderShopList.bind(this) }
          />

      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={ styles.container }>
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
    let shopThumbnail = REQUEST_URL + shop.thumbnail;
    let shopStar = this.drawStar(shop.star);
    let shopStatus = (shop.status == 1) ? "正常经营" : "停业休息";

    return (
      <TouchableHighlight onPress={ () => this.goShopView.bind(this)(shop) } underlayColor='#99d9f4'>
        <View style={ styles.listRows }>

          <Image style={ styles.image } source={{ uri: shopThumbnail }} />

          <View style={ styles.cellRows }>

            <View style={ [styles.container, styles.cell70] }>
              <Text style={ [styles.text, styles.textBlack] }>{ shop.title }</Text>
              <Text style={ [styles.textSmaller] }>
                <Text style={ styles.textGold }>{ shopStar }</Text>
                <Text style={ [styles.textOrange, styles.textBolder] }> { shop.star }</Text>
                <Text style={ styles.textGray }>  月售{ shop.totalSell }单</Text>
              </Text>
              <View style={ [styles.shopStatus] }>
                <Text style={ [styles.textSmaller, styles.textWhite] }>{ shopStatus }</Text>
              </View>
            </View>

            <View style={ [styles.container, styles.cell30] }>
              <Text style={ [styles.textSmaller, styles.textRight] }>
                <Text style={ [styles.textSmall, styles.textOrange, styles.textBolder] }>￥{ shop.startPrice }</Text> 起送
              </Text>
              <Text style={ [styles.textSmaller, styles.textRight] }>
                <Text style={ [styles.textOrange, styles.textBolder] }>￥{ shop.deliveryPrice }</Text> 配送费
              </Text>
            </View>

          </View>

        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  // FONT
  text: {
    fontSize: 26,
    color: '#48BBEC'
  },
  textSmall: {
    fontSize: 20
  },
  textSmaller: {
    fontSize: 12
  },
  textBold: {
    fontWeight: '600'
  },
  textBolder: {
    fontWeight: '900'
  },
  textWhite: {
    color: '#FFFFFF'
  },
  textBlack: {
    color: '#000000'
  },
  textGold: {
    color: '#FFD700'
  },
  textOrange: {
    color: '#FF8C00'
  },
  textGray: {
    color: '#999999'
  },
  textTop: {
    alignSelf: 'flex-start'
  },
  textRight: {
    textAlign: 'right'
  },

  // LAYOUT BOX
  container: {
    flex: 1
  },
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
    flex: 1
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
    alignSelf: 'center'
  },

  // INPUT
  inputSearch: {
    flex: 16,
    height: 36,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8
  },
  inputSearchText: {
    fontSize: 18,
    color: '#48BBEC',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 3
  },

  // IMAGES
  image: {
    width: 80,
    height: 80,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 20
  },

  // CELL
  cellRows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cell10: {
    flex: 10
  },
  cell20: {
    flex: 20
  },
  cell30: {
    flex: 30
  },
  cell40: {
    flex: 40
  },
  cell50: {
    flex: 50
  },
  cell60: {
    flex: 60
  },
  cell70: {
    flex: 70
  },
  cell80: {
    flex: 80
  },
  cell90: {
    flex: 90
  },

  // LIST VIEW
  listRows: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: '#999999',
    borderBottomWidth: 1
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