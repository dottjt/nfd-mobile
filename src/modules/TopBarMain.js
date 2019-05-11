import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TopBar } from '../emotion/components';
import { navigationSettings } from '../navigation';
// import LinearGradient from 'react-native-linear-gradient';

export default class TopBarMain extends Component {
  toSettings = () => {
    navigationSettings();
  }

  render() {
    return (
      // <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['rgb(255,46,182)', 'rgb(227,152,2)']}>
      <TopBar>
        <Text onPress={this.toMain}></Text>
        <TouchableOpacity>
          <Text onPress={this.toSettings}>Settings</Text>
        </TouchableOpacity>
      </TopBar>
    );
  }
}
