
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarStack } from '../../modules/StatusBarStack';
import { content__title } from '../styles/contentStyles';

export default class E03HowToBecomeComfortableWithYourEmotions extends Component {
    render() {
      return (
        <Container>
          <StatusBarStack/>
          <Text style={content__title}>E03 - How To Become Comfortable With Your Emotions</Text>
          <Text style={content__title}>2019-04-06</Text>
          <Text>https://s3.castbox.fm/38/31/f8/2162f94cd6938b6ed3452269b9.mp3</Text>
          <Text><p>In this episode I talk about how you can develop a healthy relationship with your emotions and learn to be comfortable with them.</p>
</Text>
        </Container>
      );
    }
  }