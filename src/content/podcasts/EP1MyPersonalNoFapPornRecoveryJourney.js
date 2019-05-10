
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarStack } from '../../modules/StatusBarStack';
import { content__title } from '../styles/contentStyles';

export default class EP1MyPersonalNoFapPornRecoveryJourney extends Component {
    render() {
      return (
        <Container>
          <StatusBarStack/>
          <Text style={content__title}>EP1 - My Personal NoFap Porn Recovery Journey</Text>
          <Text style={content__title}>2019-03-09</Text>
          <Text>https://s3.castbox.fm/66/20/68/ec65604b629039a70032004ae5.mp3</Text>
          <Text><p>In this episode I talk about my own NoFap porn recovery journey over the past five years, as well as all the challenges I&rsquo;ve faced up until my recovery in October 2018.</p>
</Text>
        </Container>
      );
    }
  }