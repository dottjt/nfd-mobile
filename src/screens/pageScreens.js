import Home from '../pages/Home';
import Content from '../pages/Content';
import Settings from '../modules/Settings';

export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const SETTINGS_SCREEN = 'navigation.SettingsScreen';
export const OTHER_SCREEN = 'navigation.OtherScreen';

const PageScreens = new Map();
PageScreens.set(HOME_SCREEN, Home);
PageScreens.set(ARTICLES_SCREEN, Content);
PageScreens.set(PRACTICES_SCREEN, Content);
PageScreens.set(PODCASTS_SCREEN, Content);
PageScreens.set(SETTINGS_SCREEN, Settings);
PageScreens.set(OTHER_SCREEN, Content);

export default PageScreens;