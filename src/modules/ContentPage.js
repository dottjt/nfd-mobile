import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-navigation';
import { Container } from '../emotion/components';

import TopBarMain from './TopBarMain';
import ContentListItem from './ContentListItem';

import Articles from '../content/articles';
import Practices from '../content/practices';
// import Podcasts from '../content/podcasts';

export default class ContentPage extends Component {
  selectContent = (contentType, contentTitle) => {
    switch (contentType) {
      case 'articles': return Articles[contentTitle];
      case 'practices': return Practices[contentTitle];
      // case 'podcasts': return Podcasts[contentTitle];
      // case 'meditations': return meditationsJSON[contentTitle];
      case 'other': return otherJSON[contentTitle];
      default: <Text>cake</Text>;
    }
  }

  render() {
    const { contentType, contentTitle } = this.props;
    const Content = this.selectContent(contentType, contentTitle);
    console.log(Content);
    return (
      <SafeAreaView>
        <Container>
          <TopBarMain/>
          {/* {Content && <Content/>} */}
        </Container>
      </SafeAreaView>
    );
  }
}
