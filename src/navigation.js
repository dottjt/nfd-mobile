import { Navigation } from 'react-native-navigation';

import {
  HOME_SCREEN,
  ARTICLES_SCREEN,
  PRACTICES_SCREEN,
  PODCASTS_SCREEN,
  ABOUT_SCREEN,
} from './screens/pageScreens';

export const navigationMain = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: HOME_SCREEN,
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Home',
                // icon: require('./signin.png')
              }
            }
          },
        },
        {
          component: {
            name: ARTICLES_SCREEN,
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Articles',
                // icon: require('./signin.png')
              }
            }
          },
        },
        {
          component: {
            name: PRACTICES_SCREEN,
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Practices',
                // icon: require('./signin.png')
              }
            }
          },
        },
        {
          component: {
            name: PODCASTS_SCREEN,
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Podcasts',
                // icon: require('./signin.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const navigationAbout = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'AboutId',
      children: [
        {
          component: {
            name: ABOUT_SCREEN,
          }
        }
    ],
    }
  }
});


//   stack: {
//     children: [
//       {
//         name: ARTICLES_SCREEN,
//         options: {
//           bottomTab: {
//             fontSize: 12,
//             text: 'Articles',
//             icon: require('./signin.png')
//           }
//         }
//       },
//       {
//         name: CONTENT_SCREEN,
//         options: {
//           bottomTab: {
//             fontSize: 12,
//             text: 'Articles - Content',
//             icon: require('./signin.png')
//           }
//         }
//       },
//     ]
//   },