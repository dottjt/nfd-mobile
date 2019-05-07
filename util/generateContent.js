const fse = require("fs-extra");
const axios = require('axios');
const lodash = require('lodash');

const ARTICLES_URL = 'https://neverfapdeluxe.netlify.com/articles/index.json';
const PRACTICES_URL = 'https://neverfapdeluxe.netlify.com/practices/index.json';

// CLASSES
const hr3 = 'class=\"hr3\"';
const hr3__bottom = 'class=\"hr3__bottom\"';


const generateClassReplacement = () => {

};

const generateReactNativeTemplate = (item, type) => {
  const title = item.title;
  const content = item.content;

  // <Text>
  // \n\n
  // \u003c /p \u003e

  // I will have to replace class with style={css``} which will be kept in a separate file
};

const generateFiles = (items, type) => {
  for (item of items) {
    const template = generateReactNativeTemplate(item, type);

    fse.outputFileSync(file, template, [options]);
  }
};

const generateArticlesContent = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.articles;

    generateFiles(items, 'articles');
  } catch (error) {
    throw new Error(`generateArticlesContent - ${error}`);
  }
};

const generatePracticesContent = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.practices;

    generateFiles(items, 'practices');
  } catch (error) {
    throw new Error(`generatePracticesContent - ${error}`);
  }
};

generateArticlesContent();
generatePracticesContent();


// create page templates, or maybe it doesn't need that, maybe it just needs the content part that I can then put into other things. Yes, that's definitely it!
