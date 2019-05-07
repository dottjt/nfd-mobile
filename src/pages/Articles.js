import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import styled, { css } from '@emotion/native'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`

const Item = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const ItemTitle = styled.Text`
  font-size: 1.2rem;
`;

const ItemDate = styled.Text`
  font-size: 1.2rem;
`;

export default class ArticleItem extends Component {
  // TODO: put a navigation event to go deeper into the stack. 

  render() {
    const { title, date } = this.props;
    return (
      <Item>
        <ItemTitle>{title}</ItemTitle>
        <ItemDate>{date}</ItemDate>
      </Item>
    );
  }
}

export default class Articles extends Component {
  render() {
    return (
      <Container>
        <List>
          {items.map(item => (
            <ArticleItem
              title={item.title}
              date={}
            />
          ))}
        </List>
      </Container>
    );
  }
}
