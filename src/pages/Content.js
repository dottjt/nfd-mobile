import React, { Component } from 'react';
import { Platform, Text, View, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { Container, Item, ItemTitle, ItemDate } from '../emotion/components';
import { PageTitle } from '../emotion/text';
import StatusBarMain from '../modules/StatusBarMain';
import ContentItem from './ContentItem';
import articlesJSON from '../content/api/articles';
import practicesJSON from '../content/api/practices';
import podcastsJSON from '../content/api/podcasts';
// import meditationsJSON from '../content/api/meditations';
import otherJSON from '../content/api/other';

import { generateProperTitle, setRoot } from '../util';

export default class Content extends Component {
  selectJSON = (type) => {
    switch (type) {
      case 'articles': return articlesJSON;
      case 'practices': return practicesJSON;
      case 'podcasts': return podcastsJSON;
      // case 'meditations': return meditationsJSON;
      case 'other': return otherJSON;
      default: throw new Error('incorrect type - selectJSON');
    }
  }

  render() {
    const { content_type } = this.props;
    return (
      <Container>
        <StatusBarMain/>
        <FlatList
          data={this.selectJSON(content_type)}
          renderItem={item => <ContentItem item={item} key={item.title} content_type={content_type} />}
        />
      </Container>
    );
  }
}
