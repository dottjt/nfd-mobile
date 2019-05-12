import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Item, ItemTitle, ItemDate } from '../emotion/components';

import { generateProperTitle, setRoot, pushNavigation } from '../util';
import { CONTENT_SCREEN } from '../screens/pageScreens';


// pushNavigation(CONTENT_SCREEN, { contentTitle: properTitle, contentType: contentType })}>
const ContentListItemText = ({ item, properTitle, contentType }) => (
  <TouchableOpacity onPress={() => setRoot(`navigation.${properTitle}Screen`)}> 
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDate>{item.date}</ItemDate>
    </Item>
  </TouchableOpacity>
);

const ContentListItemOther = ({ item }) => (
  <TouchableOpacity /* onPress={() => setRoot(`navigation.${properTitle}Screen`)} */> 
    <Item>
      <ItemTitle>{item.title}</ItemTitle>
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
        return <ContentListItemOther item={item}/>;
      case 'meditations':
      case 'podcasts':
      default:
        throw new Error('incorrect type - ContentListItem render()');
    }
  }
}
