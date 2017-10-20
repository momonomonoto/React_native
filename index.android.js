import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Root } from './Components/Config';

export default class NewProject extends Component {
  render() {
    return <Root />;
  }
}

AppRegistry.registerComponent('NewProject', () => NewProject);
