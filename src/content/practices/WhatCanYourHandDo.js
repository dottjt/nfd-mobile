
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container } from '../../emotion/components';
import TopBarStack from '../../modules/TopBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { h1, h2, h3, h4, h5, p, ul, li } from '../styles/textStyles';

 
export default class WhatCanYourHandDo extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <TopBarStack/>
          <Text style={h1}>What Can Your Hand Do?</Text>
          

<Text style={p}>This exercise is designed to help you think outside of the box.</Text>

<Text style={p}>It&rsquo;s not a particularly difficult exercise in the sense that it allows for unlimited creativity.</Text>

<Text style={p}>However, it&rsquo;s an exercise that&rsquo;s very difficult to master in the traditional sense of being able to consistently replicate the same thing each time.</Text>

<Text style={p}>I find I learn new things each time I try this exercise, and you&rsquo;ll be surprised at the extent to which you&rsquo;ll also discover new things each time you try it too.</Text>

<View style={hr3}/>

<Text style={h3}>In this exercise what we'll be doing is coming up with a variety of different ways we can use our hands.</Text>

<View style={hr3__bottom}/>


<Text style={p}>How we can move them. Arrange them. Touch them.</Text>

<Text style={p}>And in doing so, realise the extent to which we haven&rsquo;t been thinking before, or at least allowed ourselves the opportunity to think previously.</Text>

<Text style={p}>Because although we use our hands everyday, it&rsquo;s not as if we think about them in certain odd ways, such as how we can arrange them into different shapes and patterns.</Text>

<Text style={p}>I suppose it&rsquo;s a lot like when you&rsquo;re walking down a street you&rsquo;re familiar with, and you happen to notice something completely new that&rsquo;s always been there, yet you hadn&rsquo;t noticed up until that very moment.</Text>

<Text style={p}>By practicing this exercise we can learn to not only think creatively, but also understand that no matter how much we think we know, we don&rsquo;t truly know it all.</Text>

<Text style={p}>Something which often has to be experienced to be believed, hence this exercise.</Text>

<View style={hr2}/>

<Text style={h2}>Instructions</Text>

<View style={hr2__bottom}/>







<Text style={p}>To begin this exercise I want you to first look at your hand.</Text>

<Text style={p}>What do you see? Take notice of the wrinkles on your knuckles. The hair on your fingers. The tone of your skin.</Text>

<Text style={p}>Already, you&rsquo;re probably doing something unique. Chances are you&rsquo;ve never considered staring at your hand for an extended period of time, ever.</Text>

<Text style={p}>Next try and move your fingers around. See if you can make your hand into weird shapes by moving your fingers into odd positions.</Text>

<Text style={p}>What happens once you move your wrist as well? Does it feel natural? What is natural?</Text>

<Text style={p}>Once you&rsquo;ve played around with that idea, get your other hand involved as well.</Text>

<Text style={p}>What arrangements/combinations can you create with two hands? What if you interlace all your fingers together? What if you put both the backs of your hands together?</Text>

<Text style={p}>Remember, this truly is an exercise of creativity, so the aim is to play around and see what you can come up with.</Text>

<Text style={p}>Not only will it help open up your mind, but it will get you thinking about something which you ordinarily wouldn&rsquo;t be thinking about.</Text>

<Text style={p}>No different to your recovery if you&rsquo;re just starting out.</Text>





        </Container>
      </ScrollView>
    );
  }
}
