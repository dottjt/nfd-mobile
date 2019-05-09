import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Item, ItemTitle, ItemDate } from '../emotion/components';
import { PageTitle, PageText } from '../emotion/text';
import StatusBarMain from '../modules/StatusBarMain';

import podcastsJSON from '../content/api/podcasts';
import { generateProperTitle } from '../util';

export default class Podcasts extends Component {
  navigateToContent = (properTitle) => {
    Navigation.setRoot({
      root: {
        component: {
          name: `navigation.${properTitle}`,
        }
      }
    });
  }

  render() {
    return (
      <Container>
        <StatusBarMain/>
        <PageTitle>NeverFap Deluxe Podcasts</PageTitle>
        <FlatList
          data={podcastsJSON}
          renderItem={item =>
            <Item onPress={() => this.navigateToContent(generateProperTitle(item.title))}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDate>{item.date}</ItemDate>
            </Item>
          }
        />
      </Container>
    );
  }
}
