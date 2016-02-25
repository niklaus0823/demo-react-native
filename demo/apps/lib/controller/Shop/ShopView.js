import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight, Dimensions } from 'react-native';
import CartListComponent from './component/CartList.js';
import MainStyles from '../../../styles/MainStyles';

let menuObject = {};
class ShopView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
      cart: {
        totalSum: 0,
        totalPrice: 0,
        menuList: []
      }
    };
    this.changeCart = this.changeCart.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    this.buildMenuObject(this.props.router.shop.menuList);
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.router.shop.menuList),
      loaded: true
    });
  }

  buildMenuObject(menuList) {
    menuList.forEach(function(menu) {
      menuObject[menu.id] = menu;
    });
  }

  goBack() {
    this.props.navigator.pop();
  }

  changeCart(menuId, count) {
    let canUpdateCart = false;
    if (count > 0
      || this.state.cart.menuList[menuId] > 0) {
      canUpdateCart = true;
    }

    if (canUpdateCart === true) {
      if (this.state.cart.menuList.hasOwnProperty(menuId)) {
        this.state.cart.menuList[menuId] += count;
      } else {
        this.state.cart.menuList[menuId] = count;
      }

      this.state.cart.totalSum += count;
      if (menuObject.hasOwnProperty(menuId)) {
        this.state.cart.totalPrice += menuObject[menuId].price * count
      }
    }

    this.setState({
      cart: this.state.cart
    });
  }

  reduceCartCount(menuId) {
    this.changeCart(menuId, -1);
  }

  addCartCount(menuId) {
    this.changeCart(menuId, 1);
  }

  render() {
    return (
      <View style={ MainStyles.container }>

        <View style={ Styles.header }>
          <TouchableHighlight style={ Styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ Styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ MainStyles.headerTitle }>
            <Text style={ [MainStyles.headerTitleText, MainStyles.text, MainStyles.textWhite] }>{ this.props.router.shop.title }</Text>
          </View>
        </View>

        <ListView
          style={ Styles.context }
          dataSource={ this.state.dataSource }
          renderRow={ this.renderMenuList.bind(this) }
          />

        <CartListComponent shop={ this.props.router.shop } cart={ this.state.cart } />
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
    let menuThumbnail = this.props.AppConfig.REQUEST_URL + '/' + menu.thumbnail;
    let menuStar = this.drawStar(menu.star);
    let inCartCount = (this.state.cart.menuList.hasOwnProperty(menu.id)) ? this.state.cart.menuList[menu.id] : 0;

    return (
      <TouchableHighlight underlayColor='#99d9f4'>
        <View style={ MainStyles.listRows }>

          <Image style={ MainStyles.imageWithBorder } source={{ uri: menuThumbnail }} />

          <View style={ MainStyles.container }>
            <Text style={ [MainStyles.text, MainStyles.textBlack] }>{ menu.title }</Text>
            <Text style={ [MainStyles.textSmaller, MainStyles.textGray] }>{ menu.description }</Text>
            <Text style={ [MainStyles.textSmaller, MainStyles.textGray] }>
              <Text style={ [MainStyles.textGold, MainStyles.textBigger] }>{ menuStar }</Text>
              { menu.star } 月售{ menu.totalSell }份
            </Text>
            <View style={ MainStyles.cellRows }>
              <View style={ MainStyles.cell60 }>
                <Text style={ [MainStyles.text, MainStyles.textBolder, MainStyles.textOrange] }>￥{ menu.price }</Text>
              </View>
              <View style={ [Styles.cartButtonArea, MainStyles.cell40] }>
                <TouchableHighlight underlayColor='#99d9f4' onPress={ () => this.reduceCartCount(menu.id) }>
                  <Image style={ [Styles.image] } source={{ uri: this.props.AppConfig.REQUEST_URL + '/apps/public/images/-.png' }} />
                </TouchableHighlight>
                <View style={ [Styles.cartButton] }>
                  <Text style={ [MainStyles.textSmall, MainStyles.textBlack] }>{ inCartCount }</Text>
                </View>
                <TouchableHighlight underlayColor='#99d9f4' onPress={ () => this.addCartCount(menu.id) }>
                  <Image style={ [Styles.image] } source={{ uri: this.props.AppConfig.REQUEST_URL + '/apps/public/images/+.png' }} />
                </TouchableHighlight>
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
    paddingLeft: 0,
    paddingRight: 0
  },
  context: {
    flex: 90,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: 25,
    height: 25
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

  // cartButton
  cartButtonArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  cartButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default ShopView;