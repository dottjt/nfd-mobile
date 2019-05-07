const fse = require("fs-extra");
const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL } = require('./const');

const generateClassReplacement = (content) => {
  const contentClassReplace = content.replace('class=\"', 'style={');
  const contentClassEndReplace = contentClassReplace.replace('\"/\u003e', '}>');
  return contentClassEndReplace;
}; 

const generateTitle = (title) => {
  return `<Text style={content__title}>${title}<Text>`;
};

const generateContentReplacement = (content) => {
  const newContent1 = generateClassReplacement(content); 
  const newContent2 = newContent1.replace('\u003cp\u003e', '<Text>'); // <p>
  const newContent3 = newContent2.replace('\u003c/p\u003e', '<Text>'); // </p>

  return newContent3;
};

const generateReactNativeTemplate = (item, properTitle) => {
  const title = item.title;
  const content = item.content;

  const libraryHeader = `
    import React, { Component } from 'react';
    import { Text, View } from 'react-native';
    import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../hrStyles';
    import { content__title } from '../contentStyles';
  `;

  const titleWithTags = generateTitle(title)
  const componentStart = `
    export default class ${properTitle} extends Component {
      render() {
        return (
          <View>
            ${titleWithTags}
  `;

  const contentWithTags = generateContentReplacement(content);
  const componentEnd = `
            ${contentWithTags}
          </View>
        );
      }
    }
  `;
  
  return `${libraryHeader}${componentStart}${componentEnd}`;
  // \n\n

  // I will have to replace class with style={css``} which will be kept in a separate file
};

const generateFiles = (items, type) => {
  for (item of items) {
    const properTitle = title.split(' ').join('');
    const template = generateReactNativeTemplate(item, properTitle);
    fse.outputFileSync('', template, [options]);
  }
};

const generateArticlesContent = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    generateFiles(items, 'articles');
  } catch (error) {
    throw new Error(`generateArticlesContent - ${error}`);
  }
};

const generatePracticesContent = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.data.practices;

    generateFiles(items, 'practices');
  } catch (error) {
    throw new Error(`generatePracticesContent - ${error}`);
  }
};

generateArticlesContent();
generatePracticesContent();


// create page templates, or maybe it doesn't need that, maybe it just needs the content part that I can then put into other things. Yes, that's definitely it!
