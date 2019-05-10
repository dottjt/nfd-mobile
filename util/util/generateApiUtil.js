const fse = require('fs-extra');
const _ = require('lodash');
const { generateProperTitle } = require('./generateUtil');

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const saveList = (items, type, number) => {
  const finalItems = number ? _.take(items, number) : items;
  const itemsComplete = `const items = ${JSON.stringify(finalItems)}\nexport default items`;

  if (number) {
    fse.outputFileSync(`src/content/api/${type}Latest.js`, itemsComplete, [{}]);
  } else {
    fse.outputFileSync(`src/content/api/${type}.js`, itemsComplete, [{}]);
  }
};

const generateImportStatements = (items, type) => (
  items.map(item => `import ${generateProperTitle(item.title)} from '../content/${type}/${generateProperTitle(item.title)}';\n`).join('')
);

const generateScreenStatements = (items) => (
  items.map(item => `export const ${generateProperTitle(item.title).toUpperCase()}_SCREEN = 'navigation.${generateProperTitle(item.title)}Screen';\n`).join('')
);

const generateSetScreenStatements = (items, type) => (
  items.map(item => `${capitalize(type)}Screens.set(${generateProperTitle(item.title).toUpperCase()}_SCREEN, ${generateProperTitle(item.title)});\n`).join('')
);

const createScreens = (items, type) => {
  const template =
  `
  ${generateImportStatements(items, type)}
  const ${capitalize(type)}Screens = new Map();\n
  ${generateScreenStatements(items, type)}
  ${generateSetScreenStatements(items, type)}
  export default ${capitalize(type)}Screens;\n
  `;

  fse.outputFileSync(`src/screens/${type}Screens.js`, template, [{}]);
};

module.exports = {
  saveList,
  createScreens,
};
