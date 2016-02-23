import React, { Component, View, Text, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import CartListButtonComponent from './CartListButton';
import MainStyles from '../../../../styles/MainStyles';

class CartListComponent extends Component {
  render() {
    return (
      <View style={ MainStyles.container }>
        <View style={ Styles.cartArea} >

          <View style={ [MainStyles.cell70, MainStyles.alignVerticalCenter] }>
            <Text style={ [MainStyles.text, MainStyles.textWhite]}>
              已选择{ this.props.cart.totalSum }个 ￥{ this.props.cart.totalPrice } |
              <Text style={ [MainStyles.textSmaller, MainStyles.textGray]}>另需配送费￥{ this.props.shop.deliveryPrice}</Text>
            </Text>
          </View>

          <View style={ [MainStyles.cell30, MainStyles.alignVerticalCenter, MainStyles.alignCenter] }>
            <CartListButtonComponent shop={ this.props.shop } cart={ this.props.cart } />
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