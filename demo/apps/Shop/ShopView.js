import React, { Component, View, Text, TextInput, Image, StyleSheet, ListView, TouchableHighlight, Dimensions } from 'react-native';
import BaseConfigs from '../../config/BaseConfigs';
import BaseStyles from '../../config/BaseStyles';
import CartListComponent from '../../component/Cart/CartList';

let menuObject = {};
class ShopViewComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainNavigator: props.mainNavigator,
      shop:props.router.shop,
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
    this.buildMenuObject(this.state.shop.menuList);
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.state.shop.menuList),
      loaded: true
    });
  }

  buildMenuObject(menuList) {
    menuList.forEach(function(menu) {
      menuObject[menu.id] = menu;
    });
  }

  goBack() {
    this.state.mainNavigator.pop();
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
    console.log('ShopView render');
    return (
      <View style={ BaseStyles.container }>

        <View style={ Styles.header }>
          <TouchableHighlight style={ Styles.button } onPress={ this.goBack.bind(this) } underlayColor='#99d9f4'>
            <Text style={ Styles.buttonText }> 〈 </Text>
          </TouchableHighlight>
          <View style={ BaseStyles.headerTitle }>
            <Text style={ [BaseStyles.headerTitleText, BaseStyles.text, BaseStyles.textWhite] }>{ this.state.shop.title }</Text>
          </View>
        </View>

        <ListView
          style={ Styles.context }
          dataSource={ this.state.dataSource }
          renderRow={ this.renderMenuList.bind(this) }
          />

        <CartListComponent shop={ this.state.shop } cart={ this.state.cart } />
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
    let inCartCount = (this.state.cart.menuList.hasOwnProperty(menu.id)) ? this.state.cart.menuList[menu.id] : 0;

    return (
      <TouchableHighlight underlayColor='#99d9f4'>
        <View style={ BaseStyles.listRows }>

          <Image style={ BaseStyles.imageWithBorder } source={{ uri: menuThumbnail }} />

          <View style={ BaseStyles.container }>
            <Text style={ [BaseStyles.text, BaseStyles.textBlack] }>{ menu.title }</Text>
            <Text style={ [BaseStyles.textSmaller, BaseStyles.textGray] }>{ menu.description }</Text>
            <Text style={ [BaseStyles.textSmaller, BaseStyles.textGray] }>
              <Text style={ BaseStyles.textGold }>{ menuStar }</Text>
              { menu.star } 月售{ menu.totalSell }份
            </Text>
            <View style={ BaseStyles.cellRows }>
              <View style={ BaseStyles.cell70 }>
                <Text style={ [BaseStyles.text, BaseStyles.textBolder, BaseStyles.textOrange] }>￥{ menu.price }</Text>
              </View>
              <View style={ [Styles.cartButtonArea, BaseStyles.cell30] }>
                <TouchableHighlight underlayColor='#99d9f4' onPress={ () => this.reduceCartCount(menu.id) }>
                  <Image style={ [Styles.image] } source={{ uri: BaseConfigs.REQUEST_URL + '/public/images/-.png' }} />
                </TouchableHighlight>
                <View style={ [Styles.cartButton] }>
                  <Text style={ [BaseStyles.textSmall, BaseStyles.textBlack] }>{ inCartCount }</Text>
                </View>
                <TouchableHighlight underlayColor='#99d9f4' onPress={ () => this.addCartCount(menu.id) }>
                  <Image style={ [Styles.image] } source={{ uri: BaseConfigs.REQUEST_URL + '/public/images/+.png' }} />
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
    paddingLeft: 20,
    paddingRight: 20
  },
  context: {
    flex: 90,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20
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


export default ShopViewComponent;