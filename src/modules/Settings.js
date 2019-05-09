import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container } from '../emotion/components';
import { PageTitle, PageText } from '../emotion/text';
import StatusBarStack from './StatusBarStack';

export default class Settings extends Component {
  render() {
    return (
      <Container>
        <StatusBarStack/>
        <PageTitle>About</PageTitle>
        <PageText>NeverFap Deluxe is an application that has been designed to help you overcome your porn addiction.</PageText>
        <PageText>For more information about the application please visit the website.</PageText>
        <PageText>https://neverfapdeluxe.com/</PageText>
        <PageText>Daddy Reade.</PageText>
      </Container>
    );
  }
}
