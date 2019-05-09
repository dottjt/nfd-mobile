import { Navigation } from 'react-native-navigation';

import PageScreens from './pageScreens';
import ArticlesScreens from './articlesScreens';
import PracticesScreens from './practicesScreens';
import PodcastsScreens from './podcastsScreens';

const Screens = new Map([ ...PageScreens, ...ArticlesScreens, ...PracticesScreens, ...PodcastsScreens ]);

export default function registerScreens() {
  Screens.forEach((ScreenComponent, key) => {
    Navigation.registerComponent(key, () => ScreenComponent);
  });
}
