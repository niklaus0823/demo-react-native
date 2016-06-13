import React, { Component, View, Text } from 'react-native';
import MainStyles from '../styles/MainStyles';

class HelloWord extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ [MainStyles.container, MainStyles.alignCenter, MainStyles.alignVerticalCenter] }>
        <View>
          <Text style={ MainStyles.text }>HELLO WORLD</Text>
        </View>
      </View>
    );
  }

}

export default HelloWord;
