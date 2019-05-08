import styled, { css } from '@emotion/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export const ItemTitle = styled.Text`
  font-size: 1.2rem;
`;

export const ItemDate = styled.Text`
  font-size: 1.2rem;
`;

export const StatusBar = styled.View`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: 4px solid black;
`;