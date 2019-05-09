import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container } from '../emotion/components';
import { PageTitle } from '../emotion/text';

import StatusBarMain from '../modules/StatusBarMain';

import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

import { HOMEPAGE } from '../graphql/queries/homepage';
import client from '../client';

export default class Home extends Component {
  render() {
    // return (
    //   <ApolloProvider client={client}>
    //     <Query
    //       query={HOMEPAGE}
    //       >
    //     {({ loading, error, data, client }) => {
    //       if (loading) return 'loading';
    //       if (error) return `Error! ${error.message}`;

    //       const {
    //         getDbUsersStats,
    //         getAccountabilityMessagesStats,
    //         getAccountabilityReactsStats,
    //       } = data;

          return (
            <Container>
              <StatusBarMain/>
              <PageTitle>NeverFap Deluxe</PageTitle>
            </Container>
          );
    //     }};
    //     </Query>
    //   </ApolloProvider>
    // );
  }
}
