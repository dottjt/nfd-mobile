
import { Navigation } from 'react-native-navigation';
// import { name as appName } from './app.json';
import registerScreens from './src/screens';
import { navigationMain } from './src/navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  navigationMain();
});
