import React, { Component } from 'react';
import { Container } from '../emotion/components';
import { PageTitle, PageText } from '../emotion/text';

import TopBarStack from './TopBarStack';

export default class Settings extends Component {
  render() {
    return (
      <Container>
        <TopBarStack/>
        <PageTitle>About</PageTitle>
      </Container>
    );
  }
}
