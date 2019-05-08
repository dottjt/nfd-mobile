import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { PageTitle, PageText } from '../emotion/text';
import { StatusBarMain } from '../modules/StatusBarMain';

export default class Podcasts extends Component {
  render() {
    return (
      <Container>
        <StatusBarMain/>
        <PageTitle>Podcasts</PageTitle>
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
