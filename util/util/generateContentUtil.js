const fse = require("fs-extra");
const { generateProperTitle } = require('./generateUtil');

const generateTitle = (title) => (
  `<Text style={content__title}>${title}</Text>`
);

const generateDate = (date) => (
  `<Text style={content__title}>${date}</Text>`
);

const generateClassReplacement = (content) => (
  content
    .replace(/<hr class=\"/g, '<View style={')
    .replace(/\"\/\u003e/g, '}/>');
);

const generateContentReplacement = (content) => (
  generateClassReplacement(content)
    .replace(/\u003cp\u003e/g, '<Text>') // <p>
    .replace(/\u003c\/p\u003e/g, '</Text>') // </p>
    .replace(/(?=<!--)([\s\S]*?)-->/g, '') // <!-- -->
    .replace(/<u>/g, '<Text style={{textDecoration: "underline"}}>') // </u>
    .replace(/<strong>/g, '<Text style={{fontWeight: "bold"}}>') // </ a tag references>
    .replace(/<\/u>/g, '</Text>') // </ a tag references>
    .replace(/<\/strong>/g, '</Text>') // </ a tag references>
    .replace(/<\/?a[^>]*>/g, '') // </ a tag references>
);

const generateReactNativeTemplate = (item, properTitle) => (
`
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from '../../emotion/components';
import { StatusBarStack } from '../../modules/StatusBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { content__title } from '../styles/contentStyles';

export default class ${properTitle} extends Component {
  render() {
    return (
      <Container>
        <StatusBarStack/>
        ${generateTitle(item.title)}
        ${generateContentReplacement(item.content)}
      </Container>
    );
  }
}
`
);

const generateFiles = (items, type) => {
  for (const item of items) {
    const properTitle = generateProperTitle(item.title);
    const template = generateReactNativeTemplate(item, properTitle);
    fse.outputFileSync(`src/content/${type}/${properTitle}.js`, template, [{}]);
  }
};



// GENERATE PODCAST TEMPLATE

const generatePodcastTemplate = (item, properTitle) => (
`
  import React, { Component } from 'react';
  import { Text, View } from 'react-native';
  import { StatusBarStack } from '../../modules/StatusBarStack';
  
  export default class ${properTitle} extends Component {
    render() {
      return (
        <Container>
          <StatusBarStack/>
          ${generateTitle(item.title)}
          ${generateDate(item.date)}
          <Text>${item.mp3Url}</Text>
          <Text>${item.content}</Text>
        </Container>
      );
    }
  }`
);

const generatePodcastFiles = (items, type) => {
  for (const item of items) {
    const properTitle = generateProperTitle(item.title);
    const template = generatePodcastTemplate(item, properTitle);
    fse.outputFileSync(`src/content/${type}/${properTitle}.js`, template, [{}]);
  }
};

module.exports = {
  generateFiles,
  generatePodcastFiles,
}