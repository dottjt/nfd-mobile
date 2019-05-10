import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container } from '../emotion/components';

import StatusBarMain from './StatusBarMain';
import ContentItem from './ContentListItem';

import 


export default class ContentPage extends Component {
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
          renderItem={item => <ContentItem item={item} content_type={content_type} />}
          keyExtractor={(item, index) => item.title + index}
        />
      </Container>
    );
  }
}
