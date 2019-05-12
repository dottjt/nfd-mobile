import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import { Container } from '../emotion/components';
import TopBarStack from './TopBarStack';

export class AboutPage extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <TopBarStack/>
          <Text>This is NeverFap Deluxe Mobile Application.</Text>
          <Text>NeverFap Deluxe is a Comprehensive Porn Addiction Recovery Process.</Text>
          <Text>If you would like to learn more about NeverFap Deluxe I would highly recommend checking out the website.</Text>
          <Text>The website is essentially a significantly better version of the mobile app.</Text>
          <Text>https://neverfapdeluxe.com/</Text>
          <Text>Daddy Reade</Text>
        </Container>
      </ScrollView>
    );
  }
}
