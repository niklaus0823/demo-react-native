import React, { Component, View, Text, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import BaseStyles from '../../config/BaseStyles';
import CartListButtonComponent from './CartListButton';

class CartListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
      shop: props.shop
    };
  }

  render() {
    console.log('CartList render');
    return (
      <View style={ BaseStyles.container }>
        <View style={ Styles.cartArea} >

          <View style={ [BaseStyles.cell70, BaseStyles.alignVerticalCenter] }>
            <Text style={ [BaseStyles.text, BaseStyles.textWhite]}>
              已选择{ this.state.cart.totalSum }个 ￥{ this.state.cart.totalPrice } |
              <Text style={ [BaseStyles.textSmaller, BaseStyles.textGray]}>另需配送费￥{ this.state.shop.deliveryPrice}</Text>
            </Text>
          </View>

          <View style={ [BaseStyles.cell30, BaseStyles.alignVerticalCenter, BaseStyles.alignCenter] }>
            <CartListButtonComponent shop={ this.state.shop } cart={ this.state.cart } />
          </View>

        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  cartArea: {
    flex: 10,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 50,
    backgroundColor: '#000000',
    opacity: 0.8,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default CartListComponent;