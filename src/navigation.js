import { Navigation } from 'react-native-navigation';

import {
  HOME_SCREEN,
  ARTICLES_SCREEN,
  PRACTICES_SCREEN,
  // PODCASTS_SCREEN,
  // MEDITATIONS_SCREEN,
  INITIALISATION_SCREEN,
  SETTINGS_SCREEN,
  OTHER_SCREEN,
  CONTENT_SCREEN,
} from './screens/pageScreens';

export const navigationMain = () =>
  Navigation.setRoot({
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
                  // icon: require('./icons/solid/home.svg'),
                },
              },
            },
          },
          // {
          //   component: {
          //     name: ARTICLES_SCREEN,
          //     passProps: {
          //       contentType: 'articles',
          //     },
          //     options: {
          //       bottomTab: {
          //         fontSize: 12,
          //         text: 'Articles',
          //         // icon: require('./signin.png')
          //       }
          //     }
          //   },
          // },
          
          // {
          //   stack: {
          //     children: [
          //       {
          //         component: {
          //           name: CONTENT_SCREEN,
          //           passProps: {
          //             contentType: 'articles',
          //           },
          //         }
          //       },
          //       {
          //         component: {
          //           name: ARTICLES_SCREEN,
          //           options: {
          //             bottomTab: {
          //               fontSize: 12,
          //               text: 'Articles',
          //               // icon: require('./signin.png')
          //             }
          //           },
          //           passProps: {
          //             contentType: 'articles',
          //           },
          //         }
          //       },
          //     ]
          //   },
          // },

          // {
          //   component: {
          //     name: PRACTICES_SCREEN,
          //     passProps: {
          //       contentType: 'practices',
          //     },
          //     options: {
          //       bottomTab: {
          //         fontSize: 12,
          //         text: 'Practices',
          //         // icon: require('./signin.png')
          //       }
          //     }
          //   },
          // },

          // {
          //   stack: {
          //     children: [
          //       {
          //         component: {
          //           name: CONTENT_SCREEN,
          //           passProps: {
          //             contentType: 'practices',
          //           },
          //         }
          //       },
          //       {
          //         component: {
          //           name: PRACTICES_SCREEN,
          //           options: {
          //             bottomTab: {
          //               fontSize: 12,
          //               text: 'Practices',
          //               // icon: require('./signin.png')
          //             }
          //           },
          //           passProps: {
          //             contentType: 'practices',
          //           },
          //         }
          //       },
          //     ]
          //   },
          // },

          // {
          //   stack: {
          //     children: [
          //       {
          //         component: {
          //           name: CONTENT_SCREEN,
          //           passProps: {
          //             contentType: 'podcasts',
          //           },
          //         }
          //       },
          //       {
          //         component: {
          //           name: PODCASTS_SCREEN,
          //           options: {
          //             bottomTab: {
          //               fontSize: 12,
          //               text: 'Podcasts',
          //               // icon: require('./signin.png')
          //             }
          //           },
          //           passProps: {
          //             contentType: 'podcasts',
          //           },
          //         }
          //       },
          //     ]
          //   },
          // },

          // {
          //   component: {
          //     name: MEDITATIONS_SCREEN,
          //     passProps: {
          //       contentType: 'meditations',
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
          // {
          //   component: {
          //     name: OTHER_SCREEN,
          //     passProps: {
          //       contentType: 'other',
          //     },
          //     options: {
          //       bottomTab: {
          //         fontSize: 12,
          //         text: 'More',
          //         // icon: require('./signin.png')
          //       },
          //     },
          //   },
          // },
        ],
      },
    },
  });

export const navigationSettings = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AboutId',
        children: [
          {
            component: {
              name: SETTINGS_SCREEN,
            },
          },
        ],
      },
    },
  });

export const navigationLeftSideBar = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AboutId',
        children: [
          {
            component: {
              name: SETTINGS_SCREEN,
            },
          },
        ],
      },
    },
  });

export const navigationInitialisation = () =>
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALISATION_SCREEN,
      },
    },
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


// component: {
//   name: PRACTICES_SCREEN,
//   passProps: {
//     contentType: 'practices',
//   },
//   options: {
//     bottomTab: {
//       fontSize: 12,
//       text: 'Practices',
//       // icon: require('./signin.png')
//     },
//   },
// },


// component: {
//   name: ARTICLES_SCREEN,
//   passProps: {
//     contentType: 'articles',
//   },
//   options: {
//     bottomTab: {
//       fontSize: 12,
//       text: 'Articles',
//       // icon: require('./signin.png')
//     },
//   },
// },

// component: {
//   name: PODCASTS_SCREEN,
//   passProps: {
//     contentType: 'podcasts',
//   },
//   options: {
//     bottomTab: {
//       fontSize: 12,
//       text: 'Podcasts',
//       // icon: require('./signin.png')
//     },
//   },
// },
