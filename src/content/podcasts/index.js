
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TopBarStack } from '../../modules/TopBarStack';
import { content__title } from '../styles/contentStyles';


 class EP1MyPersonalNoFapPornRecoveryJourney extends Component {
  render() {
    return (
      <Container>
        <TopBarStack/>
        <Text style={content__title}>EP1 - My Personal NoFap Porn Recovery Journey</Text>
        <Text>In this episode I talk about my own NoFap porn recovery journey over the past five years, as well as all the challenges I&rsquo;ve faced up until my recovery in October 2018.</Text>

      </Container>
    );
  }
}

 class EP2WhatExactlyConstitutesAsRelapse extends Component {
  render() {
    return (
      <Container>
        <TopBarStack/>
        <Text style={content__title}>EP2 - What Exactly Constitutes As Relapse?</Text>
        <Text>In this episode I talk about relapse, how to think about this concept of relapse in a healthy way, as well as what you can do to help yourself overcome relapse.</Text>

      </Container>
    );
  }
}

 class E03HowToBecomeComfortableWithYourEmotions extends Component {
  render() {
    return (
      <Container>
        <TopBarStack/>
        <Text style={content__title}>E03 - How To Become Comfortable With Your Emotions</Text>
        <Text>In this episode I talk about how you can develop a healthy relationship with your emotions and learn to be comfortable with them.</Text>

      </Container>
    );
  }
}

export default { EP1MyPersonalNoFapPornRecoveryJourney,EP2WhatExactlyConstitutesAsRelapse,E03HowToBecomeComfortableWithYourEmotions, }
