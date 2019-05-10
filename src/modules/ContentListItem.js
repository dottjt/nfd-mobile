import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Item, ItemTitle, ItemDate } from '../emotion/components';

import { generateProperTitle, setRoot, pushNavigation } from '../util';
import { CONTENT_SCREEN } from '../screens/pageScreens';


const ContentListItemText = (item, properTitle) => (
  <TouchableOpacity onPress={() => pushNavigation(CONTENT_SCREEN, { contentTitle: properTitle, contentType: 'articles' })}>
    <Item>
      <ItemTitle>{item.item.title}</ItemTitle>
      <ItemDate>{item.item.date}</ItemDate>
    </Item>
  </TouchableOpacity>
);

export default class ContentListItem extends Component {
  render() {
    const { item, contentType } = this.props;
    const properTitle = generateProperTitle(item.item.title);
    switch (contentType) {
      case 'articles':
      case 'practices':
      case 'other': return <ContentListItemText item={item.item} properTitle={properTitle} />;
      case 'meditations':
      case 'podcasts':
      default:
        throw new Error('incorrect type - ContentListItem render()');
    }
  }
}
