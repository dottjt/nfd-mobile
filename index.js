import { Navigation } from 'react-native-navigation';
// import { name as appName } from './app.json';
import registerScreens from './src/screens';
import { navigationMain } from './src/navigation';
import { navigationOptions } from './src/navigationOptions';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  navigationMain();
});

// Navigation.setDefaultOptions(navigationOptions);
