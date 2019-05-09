import React, { Component } from 'react';
import { Platform, Text, View, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { Container, Item, ItemTitle, ItemDate } from '../emotion/components';
import { PageTitle } from '../emotion/text';
import StatusBarMain from '../modules/StatusBarMain';

import practicesJSON from '../content/api/practices';
import { generateProperTitle } from '../util';

export default class Practices extends Component {
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
        <PageTitle>NeverFap Deluxe Articles</PageTitle>
        <FlatList
          data={practicesJSON}
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
