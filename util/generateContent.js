const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL, PODCASTS_URL, MEDITATIONS_URL } = require('./const');
const {
  // generateFilesAll,
  generateFiles,
} = require('./util/generateTextContentUtil');

// const {
//   generatePodcastFilesAll,
//   generatePodcastFiles,
// } = require('./util/generateAudioContentUtil');


const generateArticlesContent = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    // generateFilesAll(items, 'articles');
    generateFiles(items, 'articles');
  } catch (error) {
    throw new Error(`generateArticlesContent - ${error}`);
  }
};

const generatePracticesContent = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.data.practices;

    // generateFilesAll(items, 'practices');
    generateFiles(items, 'practices');
  } catch (error) {
    throw new Error(`generatePracticesContent - ${error}`);
  }
};

// const generatePodcastsContent = async () => {
//   try {
//     const response = await axios.get(PODCASTS_URL);
//     const items = response.data.data.podcasts;

//     generatePodcastFilesAll(items, 'podcasts');
//     generatePodcastFiles(items, 'podcasts');
//   } catch (error) {
//     throw new Error(`generatePodcastsContent - ${error}`);
//   }
// };

// const generateMeditationsContent = async () => {
//   try {
//     const response = await axios.get(MEDITATIONS_URL);
//     const items = response.data.data.meditations;
//     const type = 'meditations';

//   } catch (error) {
//     throw new Error(`generateMeditationsContent - ${error}`);
//   }
// };


generateArticlesContent();
generatePracticesContent();
// generatePodcastsContent();
// generateMeditationsContent();
