import styled, { css } from '@emotion/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 4px solid black;
`;

export const Item = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8px;
  border: 4px solid rgba(255, 46, 182, 1);
  shadow-offset: -5px 5px;
  shadow-color: cyan;
  color: black;
  transition: shadow-offset 0.2s, border-bottom 0.1s;
  margin-bottom: 20px;
`;

export const ItemTitle = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: black;
`;

export const ItemDate = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: black;
`;

export const StatusBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  border-bottom: 4px solid black;
  align-items: stretch;
`;
