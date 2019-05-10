import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container } from '../emotion/components';

import StatusBarMain from './StatusBarMain';
import ContentListItem from './ContentListItem';

import Articles from '../content/articles';
import Practices from '../content/practices';
import Podcasts from '../content/podcasts';

export default class ContentPage extends Component {
  selectContent = (contentType, contentTitle) => {
    switch (contentType) {
      case 'articles': return Articles[contentTitle];
      case 'practices': return Practices[contentTitle];
      case 'podcasts': return Podcasts[contentTitle];
      // case 'meditations': return meditationsJSON[contentTitle];
      case 'other': return otherJSON[contentTitle];
      default: throw new Error('incorrect type - selectJSON');
    }
  }

  render() {
    const { contentType, contentTitle } = this.props;
    const Content = this.selectContent(contentType, contentTitle);
    return (
      <Container>
        <StatusBarMain/>
        <Content/>
      </Container>
    );
  }
}
