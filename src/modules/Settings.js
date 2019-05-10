import React, { Component } from 'react';
import { SettingContainer } from '../emotion/components';
import { PageTitle, PageText } from '../emotion/text';

export default class Settings extends Component {
  render() {
    return (
      <SettingContainer>
        <PageTitle>About</PageTitle>
      </SettingContainer>
    );
  }
}
