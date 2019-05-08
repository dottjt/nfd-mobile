import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from '../emotion/components';
import { navigationMain } from '../navigation';

export default class StatusBarStack extends Component {
  toMain = () => {
    navigationMain();
  }

  render() {
    return (
      <StatusBar>
        <Text onPress={this.toMain}>Back</Text>
      </StatusBar>
    );
  }
}
