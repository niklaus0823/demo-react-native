import React, { Component, View, Text, TextInput, Image, StyleSheet, Dimensions, Alert, TouchableHighlight } from 'react-native';
import MainStyles from '../../../../styles/MainStyles';

let BuyNum = 0;
class CartListButtonComponent extends Component {

  goConfirm(props) {
    let totalPrice = this.props.cart.totalPrice + this.props.shop.deliveryPrice;

    Alert.alert(
      '确认购买',
      "合计:￥" + totalPrice,
      [
        { text: '是', onPress: () => {
          BuyNum++;
          this.forceUpdate(() => {
            console.log('forceUpdate');
          })
        }},
        { text: '否', onPress: () => console.log('cancel') }
      ]
    );

    console.log(BuyNum);
  }

  render() {
    if (this.props.cart.totalPrice < this.props.shop.startPrice) {
      return this.renderDeliveryPriceView(this.props.shop.startPrice);
    }

    return (
      <TouchableHighlight style={ Styles.cartSubmitButton } underlayColor='#FFFFFF' onPress={ this.goConfirm.bind(this) }>
        <Text style={ [MainStyles.text, MainStyles.textWhite] }>去结算, 已购{ BuyNum }次</Text>
      </TouchableHighlight>
    );
  }

  renderDeliveryPriceView(startPrice) {
    return (
      <Text style={ [MainStyles.text, MainStyles.textGray]}>
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