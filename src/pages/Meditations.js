import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { PageTitle, PageText } from '../emotion/text';
import { StatusBarMain } from '../modules/StatusBarMain';

export default class Meditations extends Component {
  render() {
    return (
      <Container>
        <StatusBarMain/>
        <PageTitle>Meditations</PageTitle>
      </Container>
    );
  }
}
