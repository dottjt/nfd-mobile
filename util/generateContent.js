const fse = require("fs-extra");
const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL, PODCASTS_URL } = require('./const');
const { generateProperTitle } = require('./generateUtil');

const generatePodcastTemplate = (item, properTitle) => {
  const title = item.title;
  const content = item.content;
  const mp3Url = item.mp3Url;

  const component = `
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarStack } from '../../modules/StatusBarStack';

export default class ${properTitle} extends Component {
  render() {
    return (
      <Container>
        <StatusBarStack/>
        ${generateTitle(title)}
        <Text>${mp3Url}</Text>
        <Text>${content}</Text>
      </Container>
    );
  }
}
  `;
  
  return component;
};

const generateClassReplacement = (content) => {
  const contentClassReplace = content.replace(/<hr class=\"/g, '<View style={');
  const contentClassEndReplace = contentClassReplace.replace(/\"\/\u003e/g, '}/>');
  return contentClassEndReplace;
}; 

const generateTitle = (title) => {
  return `<Text style={content__title}>${title}</Text>`;
};

const generateContentReplacement = (content) => {
  const newContent1 = generateClassReplacement(content); 
  const newContent2 = newContent1.replace(/\u003cp\u003e/g, '<Text>'); // <p>
  const newContent3 = newContent2.replace(/\u003c\/p\u003e/g, '</Text>'); // </p>
  const newContent4 = newContent3.replace(/<!--[a-zA-Z,=.-/\n;~:{}<>'"?!^ ]*-->/g, ''); // <!-- -->
  const newContent5 = newContent4.replace(/<Text><strong>/g, '<Text style={{fontWeight: "bold"}}>'); // <Text><strong>
  const newContent6 = newContent5.replace(/<\/strong>/g, ''); // </strong>

  return newContent6;
};

const generateReactNativeTemplate = (item, properTitle) => {
  const title = item.title;
  const content = item.content;

  const libraryHeader = `
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StatusBarStack } from '../../modules/StatusBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { content__title } from '../styles/contentStyles';
  `;

  const titleWithTags = generateTitle(title);
  const componentStart = `
export default class ${properTitle} extends Component {
  render() {
    return (
      <Container>
        <StatusBarStack/>
        ${titleWithTags}
  `;

  const contentWithTags = generateContentReplacement(content);
  const componentEnd = `
        ${contentWithTags}
      </Container>
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
    const properTitle = generateProperTitle(item.title);
    const template = generateReactNativeTemplate(item, properTitle);
    fse.outputFileSync(`src/content/${type}/${properTitle}.js`, template, [{}]);
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

const generatePodcastsContent = async () => {
  try {
    const response = await axios.get(PODCASTS_URL);
    const items = response.data.data.podcasts;
    const type = 'podcasts';

    for (item of items) {
      const properTitle = generateProperTitle(item.title);
      const template = generatePodcastTemplate(item, properTitle);
      fse.outputFileSync(`src/content/${type}/${properTitle}.js`, template, [{}]);
    }
  } catch (error) {
    throw new Error(`generatePodcastsContent - ${error}`);
  }
};

generateArticlesContent();
generatePracticesContent();
generatePodcastsContent();

// create page templates, or maybe it doesn't need that, maybe it just needs the content part that I can then put into other things. Yes, that's definitely it!
