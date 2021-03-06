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
    .replace(/\"\/\u003e/g, '}/>')
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

const generateFinalExportStatement = (allContentNamesExport) => (
  `export default { ${allContentNamesExport} }`
);

const generateContentHeader = () => (
`
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from '../../emotion/components';
import { TopBarStack } from '../../modules/TopBarStack';
import { hr, hr2, hr2__bottom, hr3, hr3__bottom, hr4, hr4__bottom, hrul, hrul__bottom } from '../styles/hrStyles';
import { content__title } from '../styles/contentStyles';
`
);

const generateContent = (item, properTitle, type) => (
`
${type === 'all' ? '' : 'export default'} class ${properTitle} extends Component {
  render() {
    return (
      <Container>
        <TopBarStack/>
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
    const template = `${generateContentHeader()}\n ${generateContent(item, properTitle, 'single')}`;
    fse.outputFileSync(`src/content/${type}/${properTitle}.js`, template, [{}]);
  }
};

const generateFilesAll = (items, type) => {
  let allContent = '';
  let allContentNamesExport = '';

  for (const item of items) {
    const properTitle = generateProperTitle(item.title);
    allContentNamesExport += `${properTitle},`
    allContent += generateContent(item, properTitle, 'all');
  }

  const template = `${generateContentHeader()}\n${allContent}\n${generateFinalExportStatement(allContentNamesExport)}\n`;
  fse.outputFileSync(`src/content/${type}/index.js`, template, [{}]);
};


// GENERATE PODCAST TEMPLATE

const generatePodcastContentHeader = () => (
`
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TopBarStack } from '../../modules/TopBarStack';
import { content__title } from '../styles/contentStyles';

import TrackPlayer from 'react-native-track-player';
`
);

// TrackPlayer functionality.
// https://react-native-kit.github.io/react-native-track-player/api/

// https://github.com/react-native-kit/react-native-track-player/blob/dev/example/react/screens/PlaylistScreen.js

const generatePodcastContent = (item, properTitle, type) => (
`
${type === 'all' ? '' : 'export default'} class ${properTitle} extends Component {

    componentDidMount() {
      TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          TrackPlayer.CAPABILITY_STOP
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE
        ]
      });
    }

    togglePlayback = async () => {
      const currentTrack = await TrackPlayer.getCurrentTrack();
      if (currentTrack == null) {
        await TrackPlayer.reset();
        await TrackPlayer.add(playlistData);
        await TrackPlayer.add({
          id: 'local-track',
          url: localTrack,
          title: 'Pure (Demo)',
          artist: 'David Chavez',
          artwork: 'https://picsum.photos/200',
        });
        await TrackPlayer.play();
      } else {
        if (PlayerStore.playbackState === TrackPlayer.STATE_PAUSED) {
          await TrackPlayer.play();
        } else {
          await TrackPlayer.pause();
        }
      }
    }

    skipToNext = async () => {
      try {
        await TrackPlayer.skipToNext()
      } catch (_) {}
    }

    skipToPrevious = async () => {
      try {
        await TrackPlayer.skipToPrevious()
      } catch (_) {}
    }

    render() {
      return (
        <Container>
          <TopBarStack/>
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
    const template = `${generatePodcastContentHeader()}${generatePodcastContent(item, properTitle, 'single')}`;
    fse.outputFileSync(`src/content/${type}/${properTitle}.js`, template, [{}]);
  }
};

const generatePodcastFilesAll = (items, type) => {
  let allContent = '';
  let allContentNamesExport = '';

  for (const item of items) {
    const properTitle = generateProperTitle(item.title);
    allContentNamesExport += `${properTitle},`
    allContent += generateContent(item, properTitle, 'all');
  }

  const template = `${generatePodcastContentHeader()}\n${allContent}\n${generateFinalExportStatement(allContentNamesExport)}\n`;
  fse.outputFileSync(`src/content/${type}/index.js`, template, [{}]);
};


module.exports = {
  generateFilesAll,
  generateFiles,
  generatePodcastFilesAll,
  generatePodcastFiles,
}