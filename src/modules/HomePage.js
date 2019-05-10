import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Container } from '../emotion/components';
import { PageTitle, PageSubTitle } from '../emotion/text';

import StatusBarMain from './StatusBarMain';
import ContentListItem from './ContentListItem';

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
        <StatusBarMain />
        <PageTitle>NeverFap Deluxe</PageTitle>
        <Text>Daddy Reade is here to help, baby.</Text>

        <PageSubTitle>Latest Articles</PageSubTitle>
        <View>
          {articlesLatestJSON.map(item => (
            <ContentListItem key={item.title} item={item} contentType={'articles'} />
          ))}
        </View>

        <PageSubTitle>Latest Practices</PageSubTitle>
        <View>
          {practicesLatestJSON.map(item => (
            <ContentListItem key={item.title} item={item} contentType={'articles'} />
          ))}
        </View>

        <PageSubTitle>Latest Podcast</PageSubTitle>
        <View>
          {podcastsLatestJSON.map(item => (
            <ContentListItem key={item.title} item={item} contentType={'articles'} />
          ))}
        </View>
      </Container>
    );
    //     }};
    //     </Query>
    //   </ApolloProvider>
    // );
  }
}


// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import { Container } from '../emotion/components';

// class InitialisationPage extends Component {
//   render() {
//     const { contentType } = this.props;
//     return (
//       <Container>
//         <Text>Loading</Text>
//       </Container>
//     );
//   }
// }
