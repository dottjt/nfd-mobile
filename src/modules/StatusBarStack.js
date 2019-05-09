import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from '../emotion/components';
import { navigationMain } from '../navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class StatusBarStack extends Component {
  toMain = () => {
    navigationMain();
  }

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgb(255,46,182)', 'rgb(227,152,2)']}>
        <StatusBar>
          <Text onPress={this.toMain}>Back</Text>
          <Text onPress={this.toMain}>About</Text>
        </StatusBar>
      </LinearGradient>
    );
  }
}
