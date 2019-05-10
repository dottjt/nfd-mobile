import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
// import { StatusBar } from '../emotion/components';
import { navigationSettings } from '../navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class StatusBarMain extends Component {
  toAbout = () => {
    navigationSettings();
  }

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgb(255,46,182)', 'rgb(227,152,2)']}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text onPress={this.openSidebar}>Menu</Text>
        <Text onPress={this.toAbout}>About</Text>
      </LinearGradient>
    );
  }
}
