
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container } from '../../emotion/components';
import TopBarStack from '../../modules/TopBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { h1, h2, h3, h4, h5, p, ul, li } from '../styles/textStyles';

 
export default class Every30Minutes extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <TopBarStack/>
          <Text style={h1}>Every 30 Minutes</Text>
          <Text style={p}>The idea behind this exercise is to help you develop awareness throughout your day on an interval basis.</Text>

<Text style={p}>Essentially, the intention behind <Text style={{fontWeight: "bold"}}>Every 30 Minutes</Text> is to help keep a constant gauge of what you&rsquo;re doing.</Text>

<Text style={p}>And by doing so, gain a deeper understanding of awareness and routine, in particular of your own life and how you play it out each day.</Text>

<Text style={p}>Routine is a very important part of the recovery process, and this exercise is a way to streamline that process, or at least get you thinking about it in a meaningful way.</Text>

<Text style={p}>In addition, it&rsquo;s a wonderful way to engage your brain, which is really half the battle when it comes to addressing porn addiction.</Text>

<View style={hr2}/>

<Text style={h2}>Instructions</Text>

<View style={hr2__bottom}/>







<Text style={p}>Essentially, your aim with this exercise is to keep a mental timer every 30 minutes, and to record or even just acknowledge what you&rsquo;re doing within in that moment.</Text>

<Text style={p}>In order for this to be effective, you will not be using an alarm to do this.</Text>

<Text style={p}>Instead, you will be using your own intuition, and then checking the clock to see what time it is, and whether you should record what you&rsquo;re doing yet.</Text>

<Text style={p}>The whole idea is that we want to develop this mental timeline ourselves, and the only way we can do this is through practice.</Text>

<Text style={p}>Put simply, an alarm is not a substitute for your own conscious awareness, which is what we are attempting to develop.</Text>

<Text style={p}>Personally I find it helps to do this exercise starting at a time like 8:00am in order to make it easier to track those 30 minute segment.</Text>

<Text style={p}>Although, you&rsquo;re free to do whatever interval works best for you. For example, you might want to experiment with hourly intervals instead.</Text>

<Text style={p}>(although I tend to find the longer the duration, the harder it is for people starting out)</Text>

<Text style={p}>In addition, I want to add that this is can be a real tough one!</Text>

<Text style={p}>Although it sounds easy in practice, humans tend to forget. It&rsquo;s a bit like when we feel distracted during meditation, and we find ourselves thinking about something irrelevant.</Text>

<Text style={p}>Sometimes we can have a hard time maintaining our conscious awareness, however this is precisely why we&rsquo;re practicing this exercise.</Text>

<Text style={p}>So we can focus on what&rsquo;s important.</Text>

<Text style={p}>Our mental health.</Text>

<Text style={p}>ka-ching</Text>





        </Container>
      </ScrollView>
    );
  }
}
