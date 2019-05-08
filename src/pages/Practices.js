import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation'
import { Container, Item, ItemTitle, ItemDate } from '../emotion/components';
import { PageTitle } from '../emotion/text';

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
        <Text>NeverFap Deluxe Practices</Text>
        <FlatList
          data={practicesJSON}
          renderItem={item =>
            <Item onPress={() => this.navigateToContent(generateProperTitle(properTitle))}>
              <ItemTitle>{title}</ItemTitle>
              <ItemDate>{date}</ItemDate>
            </Item>
          }
        />
      </Container>
    );
  }
}
