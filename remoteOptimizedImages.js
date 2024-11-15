const data = require('./public/variants.json');
const homePage = [
  // 'https://site-assets.plasmic.app/ac8b44f7fbf5a81c839a180920ea249c.png',
  // 'https://site-assets.plasmic.app/1818fb887829971355e6af8eee65fc82.png',
  // 'https://site-assets.plasmic.app/ec7615efd9eec59506460977dde021a8.jpg',
  // 'https://site-assets.plasmic.app/843daac37ed39e5c0fd4392b69506628.jpg',
];

const fetchVariants = async () => {
  return data.filter((row) => row.data.file).map((row) => row.data.file.url);
};

module.exports = new Promise((resolve, reject) => {
  fetchVariants().then((variants) => {
    resolve([...homePage, ...variants]);
  });
});
