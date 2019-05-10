import { Navigation } from 'react-native-navigation';

export const generateProperTitle = (title) => {
  const title1 = title.split(' ').join('');
  const title2 = title1.replace(/[^a-z0-9+]+/gi, '');
  return title2;
}

export const setRoot = (screen, props = {}) => {
  Navigation.setRoot({
    root: {
      component: {
        name: screen,
        passProps: {
          ...props,
        }
      },
    }
  });
}

export const pushNavigation = (screen, props = {}) => {
  Navigation.push(screen, {
    component: {
      name: screen,
      passProps: {
        ...props,
      }
    },
  });
}
