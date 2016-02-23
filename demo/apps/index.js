import React, { Component, Text } from 'react-native';
import AppConfig from './config/AppConfig';
import NavigatorComponent from './lib/NavigatorComponent';

class index extends Component {

  render() {
    return (
      <NavigatorComponent AppConfig={ AppConfig } />
    );
  }
}

export default index;
