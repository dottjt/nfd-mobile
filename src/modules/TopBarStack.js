import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TopBar } from '../emotion/components';
import { navigationMain } from '../navigation';

export default class TopBarStack extends Component {
  toMain = () => {
    navigationMain();
  }

  render() {
    return (
      <TopBar>
        <Text onPress={this.toMain}>Back</Text>
        <Text onPress={this.toMain}>About</Text>
      </TopBar>
    );
  }
}