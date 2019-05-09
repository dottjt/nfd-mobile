const fse = require('fs-extra');
const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL, PODCASTS_URL, MEDITATIONS_URL } = require('./const');

const { saveList, saveListLatest, createScreens } = require('./util/generateApiUtil');

const saveListApiArticles = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    saveList(items, 'articles');
    saveListLatest(items, 'articles');
    createScreens(items, 'articles');

  } catch(error) {
    throw new Error(`saveListApiArticles - ${error}`);
  }
};

const saveListApiPractices = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.data.practices;

    saveList(items, 'practices');
    saveListLatest(items, 'practices');
    createScreens(items, 'practices');

  } catch(error) {
    throw new Error(`saveListApiPractices - ${error}`);
  }
};

const saveListApiMeditations = async () => {
  try {
    const response = await axios.get(MEDITATIONS_URL);
    const items = response.data.data.meditations;

    saveList(items, 'meditations');
    saveListLatest(items, 'meditations');
    createScreens(items, 'meditations');

  } catch(error) {
    throw new Error(`saveListApiMeditations - ${error}`);
  }
}

const saveListApiPodcasts = async () => {
  try {
    const response = await axios.get(PODCASTS_URL);
    const items = response.data.data.podcasts;

    saveList(items, 'podcasts');
    saveListLatest(items, 'podcasts');
    createScreens(items, 'podcasts');

  } catch(error) {
    throw new Error(`saveListApiPodcasts - ${error}`);
  }
}

saveListApiArticles();
saveListApiPractices();
saveListApiMeditations();
saveListApiPodcasts();
