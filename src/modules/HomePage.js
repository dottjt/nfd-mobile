import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container } from '../emotion/components';
import { PageTitle, PageSubTitle } from '../emotion/text';

import StatusBarMain from './StatusBarMain';
import { ContentListItem } from 'ContentListItem';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';

import { HOMEPAGE } from '../graphql/queries/homepage';
import client from '../client';

import articlesLatestJSON from '../content/api/articlesLatest';
import practicesLatestJSON from '../content/api/practicesLatest';
import podcastsLatestJSON from '../content/api/podcastsLatest';
// import meditationsJSON from '../content/api/meditations';


export default class HomePage extends Component {
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
              <Text>Daddy Reade is here to help, baby.</Text>

              <PageSubTitle>Latest Articles</PageSubTitle>
              <FlatList
                data={articlesLatestJSON}
                renderItem={item => <ContentItem item={item} content_type={content_type} />}
                keyExtractor={(item, index) => item.title + index}

              />
                {articlesLatestJSON.map(item => {

                })}

              <PageSubTitle>Latest Practices</PageSubTitle>
              <FlatList

              />
                {practicesLatestJSON.map(item => {

                })}


              <PageSubTitle>Latest Podcast</PageSubTitle>
              <FlatList

              />
                {podcastsLatestJSON.map(item => {

                })}


            </Container>
          );
    //     }};
    //     </Query>
    //   </ApolloProvider>
    // );
  }
}
