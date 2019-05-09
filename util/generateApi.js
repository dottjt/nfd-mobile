const fse = require("fs-extra");
const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL, PODCASTS_URL } = require('./const');
const { generateProperTitle } = require('./generateUtil');

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const saveList = (items, type) => {
  const itemsStart = `const items = `;
  const itemsEnd = `;
    export default items;
  `;
  const itemsComplete = `${itemsStart}${JSON.stringify(items)}${itemsEnd}`;
  fse.outputFileSync(`src/content/api/${type}.js`, itemsComplete, [{}]);
};

const createScreens = (items, type) => {
  let header = '';
  let screenNames = '';
  let screenStart = `const ${capitalize(type)}Screens = new Map();\n`;
  let screenSet = '';

  for (item of items) {
    const title = generateProperTitle(item.title);

    header += `import ${title} from '../content/${type}/${title}';\n`;
    screenNames += `export const ${title.toUpperCase()}_SCREEN = 'navigation.${title}Screen';\n`;
    screenSet += `${capitalize(type)}Screens.set(${title.toUpperCase()}_SCREEN, ${title});\n`;
  }
  const arrayEnd = `export default ${capitalize(type)}Screens;`;
  const finalText = `${header}\n${screenNames}\n${screenStart}\n${screenSet}\n${arrayEnd}`;

  fse.outputFileSync(`src/screens/${type}Screens.js`, finalText, [{}]);
};

const saveListApiArticles = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    saveList(items, 'articles');
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
    createScreens(items, 'practices');

  } catch(error) {
    throw new Error(`saveListApiPractices - ${error}`);
  }
};

const saveListApiPodcast = async () => {
  try {
    const response = await axios.get(PODCASTS_URL);
    const items = response.data.data.podcasts;

    saveList(items, 'podcasts');
    createScreens(items, 'podcasts');

  } catch(error) {
    throw new Error(`saveListApiPodcast - ${error}`);
  }
}

saveListApiArticles();
saveListApiPractices();
saveListApiPodcast();
