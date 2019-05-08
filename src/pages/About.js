import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { PageTitle, PageText } from '../emotion/text';
import { StatusBarMain } from '../modules/StatusBarMain';

export default class About extends Component {
  render() {
    return (
      <Container>
        <StatusBarMain/>
        <PageTitle>About</PageTitle>
        <PageText>NeverFap Deluxe is an application that has been designed to help you overcome your porn addiction.</PageText>
        <PageText>For more information about the .</PageText>
      </Container>
    );
  }
}
