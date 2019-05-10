import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Item, ItemTitle, ItemDate } from '../emotion/components';

import { generateProperTitle, setRoot, pushNavigation } from '../util';
import { CONTENT_SCREEN } from '../screens/pageScreens';

export default class ContentListItem extends Component {
  render() {
    const { item, contentType } = this.props;
    const properTitle = generateProperTitle(item.item.title);
    switch (contentType) {
      case 'other':
        return (
          <Item onPress={() => setRoot(properTitle)}>
            <ItemTitle>{item.item.title}</ItemTitle>
          </Item>
        );
      case 'articles':
        return (
          <TouchableOpacity onPress={() =>
            pushNavigation(CONTENT_SCREEN, {
              contentTitle: properTitle,
              contentType: 'articles',
            })}>
            <Item>
              <ItemTitle>{item.item.title}</ItemTitle>
              <ItemDate>{item.item.date}</ItemDate>
            </Item>
          </TouchableOpacity>

        );

      case 'meditations':
      case 'podcasts':
      case 'practices':
        return (
          <TouchableOpacity onPress={() => setRoot(properTitle)}>
            <Item>
              <ItemTitle>{item.item.title}</ItemTitle>
              <ItemDate>{item.item.date}</ItemDate>
            </Item>
          </TouchableOpacity>
        );
      default:
        throw new Error('incorrect type - ContentListItem render()');
    }
  }
}
