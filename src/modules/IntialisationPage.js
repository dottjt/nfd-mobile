import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../emotion/components';

export default class InitialisationPage extends Component {
  render() {
    const { content_type } = this.props;
    return (
      <Container>
        <Text>Loading</Text>
      </Container>
    );
  }
}
