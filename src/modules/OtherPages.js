import React, { Component } from 'react';
import { ScrollView, } from 'react-native';

import { Container } from '../emotion/components';
import { css } from '@emotion/native';

  // _goToURL() {
  //   const { url } = this.props;
  //   Linking.canOpenURL(url).then(supported => {
  //     if (supported) {
  //       Linking.openURL(this.props.url);
  //     } else {
  //       console.log('Don\'t know how to open URI: ' + this.props.url);
  //     }
  //   });
  // }


export class AboutPage extends Component {
  render() {
    return (
      <ScrollView>
        <Container>

        </Container>
      </ScrollView>
    );
  }
}

export class TwitterPage extends Component {
  render() {
    return (
      <ScrollView>
        <Container>

        </Container>
      </ScrollView>
    );
  }
}

export class RedditPage extends Component {
  render() {
    return (
      <ScrollView>
        <Container>

        </Container>
      </ScrollView>
    );
  }
}

export class WebsitePage extends Component {
  render() {
    return (
      <ScrollView>
        <Container>

        </Container>
      </ScrollView>
    );
  }
}


