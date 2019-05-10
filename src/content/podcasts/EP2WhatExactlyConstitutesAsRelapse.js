
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarStack } from '../../modules/StatusBarStack';
import { content__title } from '../styles/contentStyles';

export default class EP2WhatExactlyConstitutesAsRelapse extends Component {
    render() {
      return (
        <Container>
          <StatusBarStack/>
          <Text style={content__title}>EP2 - What Exactly Constitutes As Relapse?</Text>
          <Text style={content__title}>2019-03-23</Text>
          <Text>https://s3.castbox.fm/c5/4a/a3/279daf47498636f85ccbc0cbff.mp3</Text>
          <Text><p>In this episode I talk about relapse, how to think about this concept of relapse in a healthy way, as well as what you can do to help yourself overcome relapse.</p>
</Text>
        </Container>
      );
    }
  }