import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../emotion/components';

export default class InitialisationPage extends Component {
  render() {
    const { contentType } = this.props;
    return (
      <Container>
        <Text>Loading</Text>
      </Container>
    );
  }
}
