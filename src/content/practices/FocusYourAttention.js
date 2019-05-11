
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Container } from '../../emotion/components';
import TopBarStack from '../../modules/TopBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { h1, h2, h3, h4, h5, p, ul, li } from '../styles/textStyles';

 
export default class FocusYourAttention extends Component {
  render() {
    return (
      <ScrollView>
        <Container>
          <TopBarStack/>
          <Text style={h1}>Focus Your Attention</Text>
          

<Text style={p}>Learning to focus our attention is an important skill.</Text>

<Text style={p}>However, I would also argue that it&rsquo;s quite an advanced skill that should only be attempted once you feel more comfortable being aware in general.</Text>

<Text style={p}>In fact, it&rsquo;s an exercise which builds upon Observe Your Senses so it makes sense to master that first.</Text>

<Text style={p}>Otherwise, we can truly struggle with this exercise, and more often than not when people attempt to learn this exercise first, it almost always leads to more confusion than clarity.</Text>

<Text style={p}>So please do not proceed until you&rsquo;ve mastered more fundamental awareness exercises.</Text>

<View style={hr2}/>

<Text style={h2}>What is focus?</Text>

<View style={hr2__bottom}/>







<Text style={p}>The funny thing about focus is that it&rsquo;s a bit of a paradox, at least according to conventional wisdom.</Text>

<Text style={p}>A lot of people treat focus as if it&rsquo;s supposed to be this kind of intense period of concentration, which is designed to consume all you energy and attention.</Text>

<Text style={p}>In reality, effective focus is not like that and cannot come from tensing up and trying &lsquo;really hard&rsquo; to get into that mental zone.</Text>

<View style={hr3}/>

<Text style={h3}>Instead, effective focus comes from being calm and relaxed with a clear intention in mind.</Text>

<View style={hr3__bottom}/>


<Text style={p}>I mean, I&rsquo;m sure anyone could maintain intense focus by trying &lsquo;really hard&rsquo; however it certainly wouldn&rsquo;t be effective in the sense of being in control.</Text>

<Text style={p}>Ultimately, you cannot focus effectively if you&rsquo;re spending all your mental energy on creating an environment in which you feel comfortable to focus.</Text>

<Text style={p}>Because then you&rsquo;re left with significantly less energy to actually focus, and instead it leaves you incredibly vulnerable and quite ironically, without focus.</Text>

<Text style={p}>Definitely, not fun.</Text>

<Text style={p}>As stated earlier, if I had to describe what focus is.</Text>

<View style={hr3}/>

<Text style={h3}>I would say that it's nothing more than awareness with a clear intention.</Text>

<View style={hr3__bottom}/>


<Text style={p}>Which is to say that it&rsquo;s the same thing as being aware in the traditional sense (i.e. observation), only now you&rsquo;re choosing an intention outside of simply being aware of your senses.</Text>

<Text style={p}>This is why I say that you must first learn to master basic awareness before moving onto these kinds of exercises.</Text>

<Text style={p}>Because it actually requires more skill to remain calm and aware, while also selectively focusing on a certain aspect of your awareness.</Text>

<Text style={p}>Which people generally find more difficult than simply being aware of all their sense.</Text>

<Text style={p}>In essence, it&rsquo;s easier to be fully attuned to all your senses at once without focus, than it is to be fully attuned to just one of your senses</Text>

<Text style={p}>Simply because there&rsquo;s less overhead.</Text>

<View style={hr2}/>

<Text style={h2}>Instructions</Text>

<View style={hr2__bottom}/>







<Text style={p}>There are essentially two key steps towards performing this exercise.</Text>

<Text style={p}>First, relax and put yourself into a state of unconditional awareness, as per the instructions in Observe Your Senses.</Text>

<Text style={p}>In this state of mind, you should have completely emptied your mind and become fully attuned to your senses.</Text>

<Text style={p}>Then, once you have achieved this, attempt to place your attention on a very particular aspect of your awareness.</Text>

<Text style={p}>It could be something visual, like a lamp or a door. It could be a sound that is occurring in the background. It could be a physical sensation that you&rsquo;re experiencing in your body.</Text>

<Text style={p}>Play around with it and see where your mind takes you.</Text>





        </Container>
      </ScrollView>
    );
  }
}
