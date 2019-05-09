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

  padding: 0.6rem;
  border: 4px solid rgba(255,46,182,1);
  box-shadow: -5px 5px 0px 0px cyan;
  color: black!important;
  transition: box-shadow .2s, border-bottom .1s;
  margin-bottom: 1.5rem;
`;

export const ItemTitle = styled.Text`
  font-size: 1.05rem;
  line-height: 1.6rem;
`;

export const ItemDate = styled.Text`
  font-size: 1.05rem;
  line-height: 1.6rem;
`;

export const StatusBar = styled.View`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: 4px solid black;
  background: linear-gradient(45deg, rgba(255,46,182,1) 0%, rgba(227,152,2,1) 100%);
`;