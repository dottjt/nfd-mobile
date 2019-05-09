import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from '../emotion/components';
import { navigationAbout } from '../navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class StatusBarMain extends Component {
  toAbout = () => {
    navigationAbout();
  }

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgb(255,46,182)', 'rgb(227,152,2)']}>
        <StatusBar>
          <Text onPress={this.toAbout}>About</Text>
        </StatusBar>
      </LinearGradient>
    );
  }
}
