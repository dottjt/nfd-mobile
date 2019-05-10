import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container } from '../emotion/components';

import StatusBarMain from './StatusBarMain';
import ContentListItem from './ContentListItem';

import articlesJSON from '../content/api/articles';
import practicesJSON from '../content/api/practices';
// import podcastsJSON from '../content/api/podcasts';
// import meditationsJSON from '../content/api/meditations';
import otherJSON from '../content/api/other';

export default class ContentList extends Component {
  selectJSON = (type) => {
    switch (type) {
      case 'articles': return articlesJSON;
      case 'practices': return practicesJSON;
      case 'other': return otherJSON;
      // case 'podcasts': return podcastsJSON;
      // case 'meditations': return meditationsJSON;
      default: throw new Error('incorrect type - selectJSON');
    }
  };

  render() {
    const { contentType } = this.props;
    return (
      <Container>
        <StatusBarMain />
        <FlatList
          data={this.selectJSON(contentType)}
          renderItem={(item) => (
            <ContentListItem item={item} contentType={contentType} />
          )}
          keyExtractor={(item, index) => item.title + index}
        />
      </Container>
    );
  }
}
