const fse = require("fs-extra");

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const saveList = (items, type) => {
  const itemsComplete = `const items = ${JSON.stringify(items)}\nexport default items`;
  fse.outputFileSync(`src/content/api/${type}.js`, itemsComplete, [{}]);
};

const saveListLatest = (items, type) => {
  // take five.
  const itemsComplete = `const items = ${JSON.stringify(items)}\nexport default items`;
  fse.outputFileSync(`src/content/api/${type}Latest.js`, itemsComplete, [{}]);
};

const generateImportStatements = (items, type) => (
  items.map(item => `import ${item.title} from '../content/${type}/${item.title}';\n`).join('')
);

const generateScreenStatements = (items) => (
  items.map(item => `export const ${item.title.toUpperCase()}_SCREEN = 'navigation.${item.title}Screen';\n`).join('')
);

const generateSetScreenStatements = (items, type) => (
  items.map(item => `${capitalize(type)}Screens.set(${item.title.toUpperCase()}_SCREEN, ${item.title});\n`).join('')
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
  saveListLatest,
  createScreens,
};
