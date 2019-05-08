import Home from './src/pages/Home';
// import { name as appName } from './app.json';
import registerScreens from './src/screens';
import { HOME_SCREEN } from './src/screens/pageScreens';
import { navigationMain } from './src/navigation';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  navigationMain();
});
