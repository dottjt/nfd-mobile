import Home from '../pages/Home';
import Articles from '../pages/Articles';
import Practices from '../pages/Practices';
import Podcasts from '../pages/Podcasts';
import About from '../pages/About';

export const HOME_SCREEN = 'navigation.HomeScreen';
export const ARTICLES_SCREEN = 'navigation.ArticlesScreen';
export const PRACTICES_SCREEN = 'navigation.PracticesScreen';
export const PODCASTS_SCREEN = 'navigation.PodcastsScreen';
export const ABOUT_SCREEN = 'navigation.AboutScreen';

const PageScreens = new Map();
PageScreens.set(HOME_SCREEN, Home);
PageScreens.set(ARTICLES_SCREEN, Articles);
PageScreens.set(PRACTICES_SCREEN, Practices);
PageScreens.set(PRACTICES_SCREEN, Podcasts);
PageScreens.set(ABOUT_SCREEN, About);

export default PageScreens;