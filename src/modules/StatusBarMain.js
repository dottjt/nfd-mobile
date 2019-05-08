import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from '../emotion/components';
import { navigationAbout } from '../navigation';

export default class StatusBarMain extends Component {
  toAbout = () => {
    navigationAbout();
  }

  render() {
    return (
      <StatusBar>
        <Text onPress={this.toAbout}>About</Text>
      </StatusBar>
    );
  }
}
