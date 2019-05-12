import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Item, ItemTitle, ItemDate } from '../emotion/components';

import { generateProperTitle, setRoot, goToURL } from '../util';
import { ABOUT_SCREEN } from '../screens/pageScreens';

// pushNavigation(CONTENT_SCREEN, { contentTitle: properTitle, contentType: contentType })}>
const ContentListItemText = ({ item, properTitle, contentType }) => (
  <TouchableOpacity onPress={() => setRoot(`navigation.${properTitle}Screen`)}> 
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDate>{item.date}</ItemDate>
    </Item>
  </TouchableOpacity>
);

const ContentListItemOther = ({ item, properTitle }) => (
  <TouchableOpacity onPress={() => {
    if (item.url) {
      goToURL(item.url);
    } else {
      setRoot(`navigation.${properTitle}Screen`)}
    }
  }>
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemTitle>{item.description}</ItemTitle>
    </Item>
  </TouchableOpacity>
);

export default class ContentListItem extends Component {
  render() {
    const { item, contentType } = this.props;
    const properTitle = generateProperTitle(item.title);

    switch (contentType) {
      case 'articles':
      case 'practices':
        return <ContentListItemText item={item} properTitle={properTitle} contentType={contentType}/>;
      case 'other': 
        return <ContentListItemOther item={item} properTitle={properTitle}/>;
      case 'meditations':
      case 'podcasts':
      default:
        throw new Error('incorrect type - ContentListItem render()');
    }
  }
}
