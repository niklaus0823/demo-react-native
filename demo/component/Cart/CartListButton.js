import React, { Component, View, Text, TextInput, Image, StyleSheet, Dimensions, Alert, TouchableHighlight } from 'react-native';
import BaseStyles from '../../config/BaseStyles';

class CartListButtonComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
      shop: props.shop
    };
  }

  goConfirm(props) {
    let totalPrice = this.state.cart.totalPrice + this.state.shop.deliveryPrice;

    Alert.alert(
      '确认购买',
      "合计:￥" + totalPrice,
      [
        { text: '是', onPress: () => console.log('ok') },
        { text: '否', onPress: () => console.log('cancel') }
      ]
    )
  }

  render() {
    if (this.state.cart.totalPrice < this.state.shop.startPrice) {
      return this.renderDeliveryPriceView(this.state.shop.startPrice);
    }

    return (
      <TouchableHighlight style={ Styles.cartSubmitButton } underlayColor='#FFFFFF' onPress={ this.goConfirm.bind(this) }>
        <Text style={ [BaseStyles.text, BaseStyles.textWhite] }>去结算</Text>
      </TouchableHighlight>
    );
  }

  renderDeliveryPriceView(startPrice) {
    return (
      <Text style={ [BaseStyles.text, BaseStyles.textGray]}>
        ￥{ startPrice }起送
      </Text>
    );
  }
}

const Styles = StyleSheet.create({
  cartSubmitButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CartListButtonComponent;