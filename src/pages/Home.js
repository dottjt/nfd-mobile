import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container } from '../emotion/components';
import { PageTitle } from '../emotion/text';

import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

import { HOMEPAGE_QUERY } from '../graphql/queries/homepage.js';
import client from '../client';

export default class Home extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query 
          query={HOMEPAGE_QUERY}
          >
        {({ loading, error, data, client }) => {
          if (loading) return 'loading';
          if (error) return `Error! ${error.message}`;

          const {
            getDbUsersStats,
            getAccountabilityMessagesStats,
            getAccountabilityReactsStats,
          } = data;

          return (
            <Container>
              <PageTitle>NeverFap Deluxe</PageTitle>
            </Container>
          );
        }};
        </Query>
      </ApolloProvider>
    );
  }
}
