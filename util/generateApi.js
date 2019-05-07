const fse = require("fs-extra");
const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL } = require('./const');

const saveList = (items, type) => {
  const itemsStart = `const items = `;
  const itemsEnd = `;
    export default items;
  `;
  const itemsComplete = `${itemsStart}${JSON.stringify(items)}${itemsEnd}`;
  fse.outputFileSync(`src/content/api/${type}.js`, itemsComplete, [{}]);
};

const saveListApiArticles = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    saveList(items, 'articles');
  } catch(error) {
    throw new Error(`saveListApiArticles - ${error}`);
  }
};

const saveListApiPractices = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.data.practices;
    saveList(items, 'practices');
  } catch(error) {
    throw new Error(`saveListApiPractices - ${error}`);
  }
};

saveListApiArticles();
saveListApiPractices();
