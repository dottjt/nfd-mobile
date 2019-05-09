import React, { Component } from 'react';
import { Platform, Text, View, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Container, Item, ItemTitle, ItemDate } from '../emotion/components';
import { PageTitle, PageText } from '../emotion/text';
import StatusBarMain from '../modules/StatusBarMain';

import articlesJSON from '../content/api/articles';
import { generateProperTitle } from '../util';

export default class Articles extends Component {
  navigateToContent = (properTitle) => {
    Navigation.setRoot({
      root: {
        component: {
          name: `navigation.${properTitle}`,
        }
      }
    });

    // Navigation.push(this.props.componentId, {
    //   component: {
    //     name: `navigation.${properTitle}`,
    //   }
    // });
  }

  render() {
    return (
      <Container>
        <StatusBarMain/>
        <PageTitle>NeverFap Deluxe Articles</PageTitle>
        <FlatList
          data={articlesJSON}
          renderItem={item =>
            <Item key={item.title} onPress={() => this.navigateToContent(generateProperTitle(item.title))}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDate>{item.date}</ItemDate>
            </Item>
          }
        />
      </Container>
    );
  }
}
