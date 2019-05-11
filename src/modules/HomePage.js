import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Container, LatestContent } from '../emotion/components';
import { PageTitle, PageSubTitle } from '../emotion/text';

import TopBarMain from './TopBarMain';
import ContentListItem from './ContentListItem';
import LoadingPage from './LoadingPage';

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
    return (
      <ApolloProvider client={client}>
        <Query
          query={HOMEPAGE}
          >
        {({ loading, error, data, client }) => {
          if (loading) return <LoadingPage/>;
          if (error) return <Text>Error! ${error.message}</Text>;

          const {
            getDbUsersStats,
            getAccountabilityMessagesStats,
            getAccountabilityReactsStats,
          } = data;

          return (
            <ScrollView>
              <Container>
                <TopBarMain />
                <PageTitle>NeverFap Deluxe</PageTitle>
                <Text style={css`font-size: 16px; margin-top: 6px; margin-bottom: 6px;`}>Daddy Reade is here to help, baby.</Text>

                <PageSubTitle>Latest Articles</PageSubTitle>
                <LatestContent>
                  {articlesLatestJSON.map(item => (
                    <ContentListItem key={item.title} item={item} contentType='articles' />
                  ))}
                </LatestContent>

                <PageSubTitle>Latest Practices</PageSubTitle>
                <LatestContent>
                  {practicesLatestJSON.map(item => (
                    <ContentListItem key={item.title} item={item} contentType='articles' />
                  ))}
                </LatestContent>

                <PageSubTitle>Latest Podcast</PageSubTitle>
                <LatestContent>
                  {podcastsLatestJSON.map(item => (
                    <ContentListItem key={item.title} item={item} contentType='articles' />
                  ))}
                </LatestContent>
              </Container>
            </ScrollView>
          )
        }}
        </Query>
      </ApolloProvider>
    );
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
