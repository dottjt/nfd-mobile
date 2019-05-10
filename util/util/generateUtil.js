const generateProperTitle = (title) => (
  title
    .split(' ')
    .join('')
    .replace(/[^a-z0-9+]+/gi, '')
);

module.exports = {
  generateProperTitle,
}