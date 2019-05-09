import { Navigation } from 'react-native-navigation';

import {
  HOME_SCREEN,
  ARTICLES_SCREEN,
  PRACTICES_SCREEN,
  PODCASTS_SCREEN,
  MEDITATIONS_SCREEN,
  SETTINGS_SCREEN,
  OTHER_SCREEN,
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
            passProps: {
              content_type: 'articles',
            },
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
            passProps: {
              content_type: 'practices',
            },
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
            passProps: {
              content_type: 'podcasts',
            },
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Podcasts',
                // icon: require('./signin.png')
              }
            }
          },
        },
        // {
        //   component: {
        //     name: MEDITATIONS_SCREEN,
        //     passProps: {
        //       content_type: 'meditations',
        //     },
        //     options: {
        //       bottomTab: {
        //         fontSize: 12,
        //         text: 'Meditations',
        //         // icon: require('./signin.png')
        //       }
        //     }
        //   },
        // },
        {
          component: {
            name: OTHER_SCREEN,
            passProps: {
              content_type: 'other',
            },
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'More',
                // icon: require('./signin.png')
              }
            }
          },
        },
      ],
    }
  }
});

// const sideMenu = {
//   left: {
//     component: {}
//   },
//   center: {
//     stack: {
//       options: {},
//       children: [{
//         component: {}
//       }]
//     }
//   },
//   right: {
//     component: {}
//   }
// }


export const navigationSettings = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'AboutId',
      children: [
        {
          component: {
            name: SETTINGS_SCREEN,
          }
        }
    ],
    }
  }
});

export const navigationLeftSideBar = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'AboutId',
      children: [
        {
          component: {
            name: SETTINGS_SCREEN,
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