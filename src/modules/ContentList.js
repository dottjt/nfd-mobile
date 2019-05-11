import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-navigation';

import { Container } from '../emotion/components';

import TopBarMain from './TopBarMain';
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
      default: return articlesJSON;
    }
  };

  render() {
    const { contentType } = this.props;
    console.log(contentType, "contentType");
    return (
      <SafeAreaView>
        <Container>
          <TopBarMain />
          <FlatList
            data={this.selectJSON(contentType)}
            renderItem={(item) => (
              <ContentListItem item={item} contentType={contentType} />
            )}
            keyExtractor={(item, index) => item.title + index}
          />
        </Container>
      </SafeAreaView>
    );
  }
}
