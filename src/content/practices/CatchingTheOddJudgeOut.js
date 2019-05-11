
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container } from '../../emotion/components';
import TopBarStack from '../../modules/TopBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { h1, h2, h3, h4, h5, p, ul, li } from '../styles/textStyles';

 
export default class CatchingTheOddJudgeOut extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <TopBarStack/>
          <Text style={h1}>Catching The Odd Judge Out</Text>
          

<Text style={p}>A lot of people find this exercise super useful, because it can help us identify our biases much easier than trying to identify those biases directly.</Text>

<Text style={p}>It&rsquo;s a great thinking exercise, which makes you realise how well optimised our minds truly are when it comes to filtering information.</Text>

<Text style={p}>Judgement by function is conditional.</Text>

<Text style={p}>We discover some sort of condition which triggers us to react, either negatively or positively.</Text>

<Text style={p}>For a lot of people, these triggers are aspects of their personality they&rsquo;re completely unaware of.</Text>

<Text style={p}>Most judgemental people don&rsquo;t even realise they&rsquo;re judgemental, because it&rsquo;s such an ingrained aspect of who they are, that they assume it&rsquo;s all just some continuum of everyday thought.</Text>

<Text style={p}>In these situations, it can be very difficult to actually identify what is judgement and what is not.</Text>

<Text style={p}>And so the purpose of this exercise is to help you make that distinction, by bringing to your attention the things which you don&rsquo;t feel compelled to be judgemental about.</Text>

<Text style={p}>Which for a lot people, is a lot simpler than trying to identify the things which they feel passionately judgemental about.</Text>

<Text style={p}>In addition, it can help them understand more about themselves, by merely identifying the things which they don&rsquo;t care about.</Text>

<View style={hr2}/>

<Text style={h2}>Instructions</Text>

<View style={hr2__bottom}/>







<Text style={p}>The exercise is simple.</Text>

<Text style={p}>Your task is to think about the things you don&rsquo;t feel judgemental about.</Text>

<Text style={p}>Things which you couldn&rsquo;t possibly care about, which don&rsquo;t evoke any kind of reaction.</Text>

<Text style={p}>Then once you&rsquo;ve identified that thing, ask yourself why? Why doesn&rsquo;t that particular subject evoke a feeling?</Text>

<Text style={p}>Why are you not attached to that particular subject?</Text>

<Text style={p}>For example, I&rsquo;m not judgemental about medical surgeons. I have literally zero opinion on medical surgeons.</Text>

<Text style={p}>Why? Well, I guess because I don&rsquo;t actually know any medical surgeons, and it&rsquo;s simply not a subject which ever enters my conscious.</Text>

<Text style={p}>The key with this exercise is to progressively try to find subjects which you&rsquo;re not judgemental about, yet may be related to or have something in common with the things you are judgemental about.</Text>

<Text style={p}>For example, you may feel judgemental about celebrities or politicians, but feel significantly less judgement about popular sporting figures.</Text>

<Text style={p}>Try and discover some common themes. Perhaps you might discover something. Perhaps you might not.</Text>

<Text style={p}>We&rsquo;re all here to learn more about how our individual minds work.</Text>





        </Container>
      </ScrollView>
    );
  }
}
