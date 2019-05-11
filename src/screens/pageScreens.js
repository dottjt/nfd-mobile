import HomePage from '../modules/HomePage';
import ContentList from '../modules/ContentList';
import ContentPage from '../modules/ContentPage';
import Settings from '../modules/Settings';

export const INITIALISATION_SCREEN = 'navigation.InitialisationScreen';
export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
// export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const CONTENT_SCREEN = 'navigation.ContentScreen';
export const SETTINGS_SCREEN = 'navigation.SettingsScreen';
export const OTHER_SCREEN = 'navigation.OtherScreen';

const PageScreens = new Map();
PageScreens.set(HOME_SCREEN, HomePage);
PageScreens.set(ARTICLES_SCREEN, ContentList);
PageScreens.set(PRACTICES_SCREEN, ContentList);
// PageScreens.set(PODCASTS_SCREEN, ContentList);
PageScreens.set(CONTENT_SCREEN, ContentPage);
PageScreens.set(SETTINGS_SCREEN, Settings);
PageScreens.set(OTHER_SCREEN, ContentList);

export default PageScreens;