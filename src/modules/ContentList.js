import React, { Component } from 'react';
import { ScrollView, FlatList, Text } from 'react-native';

import { Container } from '../emotion/components';
import { PageTitle } from '../emotion/text';

import TopBarMain from './TopBarMain';
import ContentListItem from './ContentListItem';

import articlesJSON from '../content/api/articles';
import practicesJSON from '../content/api/practices';
// import podcastsJSON from '../content/api/podcasts';
// import meditationsJSON from '../content/api/meditations';
import otherJSON from '../content/api/other';

export default class ContentList extends Component {
  selectTitle = (type) => {
    switch (type) {
      case 'articles': return 'Articles';
      case 'practices': return 'Practices';
      case 'other': return 'Other';
      // case 'podcasts': return podcastsJSON;
      // case 'meditations': return meditationsJSON;
      default: return 'Articles';
    }
  };

  selectJSON = (type) => {
    switch (type) {
      case 'articles': return articlesJSON;
      case 'practices': return practicesJSON;
      case 'other': return otherJSON;
      // case 'podcasts': return podcastsJSON;
      // case 'meditations': return meditationsJSON;
      default: return articlesJSON;
    }
  };

  render() {
    const { contentType } = this.props;

    return (
      <ScrollView>
        <Container>
          <TopBarMain/>
          <PageTitle>{this.selectTitle(contentType)}</PageTitle>
          <FlatList
            data={this.selectJSON(contentType)}
            renderItem={({item}) => {
              return <ContentListItem key={item.title} item={item} contentType={contentType || 'articles'} />
            }}
            keyExtractor={(item, index) => item.title + index}
          />
        </Container>
      </ScrollView>
    );
  }
}
