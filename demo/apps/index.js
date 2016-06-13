import React, { Component, Text } from 'react-native';
import HelloWord from './lib/HelloWord';
//import NavigatorComponent from './lib/NavigatorComponent';
//import AppConfig from './config/AppConfig';

class index extends Component {

  render() {
    return (
      <HelloWord />
    );
    // return (
    //   <NavigatorComponent AppConfig={ AppConfig } />
    // );
  }
}

export default index;
