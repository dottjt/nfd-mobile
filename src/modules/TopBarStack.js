import React, { Component } from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { TopBar } from '../emotion/components';
import { navigationMain } from '../navigation';

export default class TopBarStack extends Component {
  toMain = () => {
    navigationMain();
  }
  render() {
    return (
      <TopBar>
        <TouchableOpacity onPress={this.toMain}>
          <Image source={require('../icons/24/chevron-left.png')} />
        </TouchableOpacity>
        {/* <Text onPress={this.toMain}>About</Text> */}
      </TopBar>
    );
  }
}