import React, { Component } from 'react';
import { Platform, Text, View, FlatList } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { Container, Item, ItemTitle, ItemDate } from '../emotion/components';
import { PageTitle } from '../emotion/text';
import StatusBarMain from '../modules/StatusBarMain';

import { generateProperTitle, setRoot } from '../util';


export default class ContentItem extends Component {
  navigateToContent = (properTitle) => {
    setRoot(properTitle);
  }

  render() {
    const { item, content_type } = this.props;
    switch(content_type) {
      case 'other':
        return (
          <Item key={item.index} onPress={() => setRoot(generateProperTitle(item.item.title))}>
            <ItemTitle>{item.item.title}</ItemTitle>
          </Item>
        );
      case 'meditations':
      case 'articles':
      case 'podcasts':
      case 'practices':
        return (
          <Item key={item.index} onPress={() => setRoot(generateProperTitle(item.item.title))}>
            <Text>{item.item.title}</Text>
            <ItemDate>{item.item.date}</ItemDate>
          </Item>
        );
      default: 
        throw new Error('incorrect type - ContentItem render()');
    }

  }
}
