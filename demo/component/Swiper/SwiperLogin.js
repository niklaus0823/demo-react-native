//FIXME no word in android
import React, { Component, View, Text, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

class SwiperLoginComponent extends Component {
  render() {
    return (
      <Swiper style={ Styles.wrapper } showsButtons={ true } autoplay={ true }>
        <View style={ Styles.slide1 }>
          <Text style={ Styles.text }>Hello World</Text>
        </View>
        <View style={ Styles.slide2 }>
          <Text style={ Styles.text }>Beautiful</Text>
        </View>
        <View style={ Styles.slide3 }>
          <Text style={ Styles.text }>This is a demo</Text>
        </View>
      </Swiper>
    )
  }
}

// es6
var Styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default SwiperLoginComponent;