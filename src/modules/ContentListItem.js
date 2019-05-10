import React, { Component } from 'react';
import { Item, ItemTitle, ItemDate } from '../emotion/components';

import { generateProperTitle, setRoot } from '../util';
import { CONTENT_SCREEN } from '../screens/pageScreens';

export default class ContentListItem extends Component {
  navigateToContent = (properTitle) => {
    setRoot(properTitle);
  }

  render() {
    const { item, content_type } = this.props;
    const properTitle = generateProperTitle(item.item.title);
    switch(content_type) {
      case 'other':
        return (
          <Item onPress={() => setRoot(properTitle)}>
            <ItemTitle>{item.item.title}</ItemTitle>
          </Item>
        );
      case 'articles':
        return (
          <Item onPress={() => setRoot(CONTENT_SCREEN, { contentTitle: properTitle })}>
            <ItemTitle>{item.item.title}</ItemTitle>
            <ItemDate>{item.item.date}</ItemDate>
          </Item>
        );

      case 'meditations':
      case 'podcasts':
      case 'practices':
        return (
          <Item onPress={() => setRoot(properTitle)}>
            <ItemTitle>{item.item.title}</ItemTitle>
            <ItemDate>{item.item.date}</ItemDate>
          </Item>
        );
      default:
        throw new Error('incorrect type - ContentListItem render()');
    }

  }
}
