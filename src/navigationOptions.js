
const navigationOptions = {
  statusBar: {
    visible: false,
    style: 'light' | 'dark'
  },
  layout: {
    direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
    backgroundColor: 'white',
    orientation: ['portrait', 'landscape'] // An array of supported orientations
  },
  modalPresentationStyle: 'overCurrentContext', // Supported styles are: 'formSheet', 'pageSheet', 'overFullScreen', 'overCurrentContext', 'currentContext', 'popover', 'fullScreen' and 'none'. On Android, only overCurrentContext and none are supported.
  topBar: {
    visible: true,
    animate: false, // Controls whether TopBar visibility changes should be animated
    hideOnScroll: true,
    leftButtonColor: 'black',
    rightButtonColor: 'black',
    drawBehind: false,
    testID: 'topBar',
    title: {
      text: 'Title',
      fontSize: 14,
      color: 'red',
      fontFamily: 'Helvetica',
      component: {
        name: 'example.CustomTopBarTitle',
        alignment: 'center'
      }
    },
    subtitle: {
      text: 'Title',
      fontSize: 14,
      color: 'red',
      fontFamily: 'Helvetica',
      alignment: 'center'
    },
    backButton: {
      // icon: require('icon.png'),
      visible: true
    },
    background: {
      color: '#00ff00',
      component: {
        name: 'example.CustomTopBarBackground'
      }
    }
  },
  bottomTabs: {
    visible: true,
    animate: false, // Controls whether BottomTabs visibility changes should be animated
    currentTabIndex: 0,
    currentTabId: 'currentTabId',
    testID: 'bottomTabsTestID',
    drawBehind: false,
    backgroundColor: 'white'
  },
  bottomTab: {
    text: 'Tab 1',
    badge: '2',
    badgeColor: 'red',
    testID: 'bottomTabTestID',
    // icon: require('tab.png'),
    iconColor: 'red',
    selectedIconColor: 'blue',
    textColor: 'red',
    selectedTextColor: 'blue',
    fontFamily: 'Helvetica',
    fontSize: 10
  },
  sideMenu: {
    left: {
      width: 260,
      height: 270,
      visible: false,
      enabled: true
    },
    right: {
      width: 260,
      height: 270,
      visible: false,
      enabled: true
    }
  },
  overlay: {
    interceptTouchOutside: true,
    handleKeyboardEvents: true
  },
  preview: {
    reactTag: 0, // result from findNodeHandle(ref)
    width: 100,
    height: 100,
    commit: false,
    actions: [{
      id: 'ActionId1',
      title: 'Action title',
      style: 'selected', // default, selected, destructive,
      actions: [/* ... */]
    }]
  },
  animations: {
    setRoot: {
      enabled: 'true' | 'false', // Optional, used to enable/disable the animation
      alpha: {
        from: 0,
        to: 1,
        duration: 400,
        startDelay: 100,
        interpolation: 'accelerate'
      }
    },
    push: {
      enabled: 'true' | 'false', // Optional, used to enable/disable the animation
      topBar: {
        id: 'TEST', // Optional, id of the TopBar we'd like to animate.
        alpha: {
          from: 0,
          to: 1
        }
      },
      bottomTabs: {
        alpha: {
          from: 0,
          to: 1
        }
      },
      content: {
        alpha: {
          from: 0,
          to: 1
        }
      }
    },
    pop: {
      enabled: 'true' | 'false', // Optional, used to enable/disable the animation
      topBar: {
        id: 'TEST', // Optional, id of the TopBar we'd like to animate.
        alpha: {
          from: 0,
          to: 1
        }
      },
      bottomTabs: {
        alpha: {
          from: 0,
          to: 1
        }
      },
      content: {
        alpha: {
          from: 0,
          to: 1
        }
      }
    }
  }
}

export default navigationOptions;
