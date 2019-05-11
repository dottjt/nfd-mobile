import { Navigation } from 'react-native-navigation';
import { StatusBar } from 'react-native';
// import { name as appName } from './app.json';
import registerScreens from './src/screens';
import { navigationMain } from './src/navigation';
import { navigationOptions } from './src/navigationOptions';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  navigationMain();
});

StatusBar.setBarStyle('dark-content', true); // light-content
StatusBar.setTranslucent(false);
StatusBar.setHidden(true, 'slide');



// Navigation.setDefaultOptions(navigationOptions);
