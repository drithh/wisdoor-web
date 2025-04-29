const data = require('./public/variants.json');

const homePage = [
  // product 1
  'https://site-assets.plasmic.app/7d47bf8bcd0313dfe51b3f629ef46679.png',
  'https://site-assets.plasmic.app/a93bfcc6ca60596a2456c36ac87c58a1.png',
  'https://site-assets.plasmic.app/2ac658dd86fa4ad6bbcbecc75b2fb21c.png',
  'https://site-assets.plasmic.app/e82845980f38e9633ab95a28ba02496a.png',
  'https://site-assets.plasmic.app/1b497f803822905fa78e2b9c84701dbe.png',
  'https://site-assets.plasmic.app/c14a511b316efd05986e38f4accfcac6.png',
  // product 2
  'https://site-assets.plasmic.app/f7f5d262d59b98588b0f542edaf25b8e.png',
  'https://site-assets.plasmic.app/7a148532cfabd78b9e299ebde12f41ef.png',
  'https://site-assets.plasmic.app/306cbea2b62c2db347d70f054897e06b.png',
  'https://site-assets.plasmic.app/a13399bc8f8d837a5ca3f6adf3723cca.png',
  'https://site-assets.plasmic.app/099d1055b91676be1566573fa252c015.png',
  // product 3
  'https://site-assets.plasmic.app/6f73bddae49504489eb6a2e69bc32357.png',
  'https://site-assets.plasmic.app/97f6beedf82547ee53de44f429399293.png',
  'https://site-assets.plasmic.app/f300560d6c9c49858f242991e1b86456.png',
  'https://site-assets.plasmic.app/40355bf6d87b09b48fc82e61a84af29c.png',
  // project
  'https://site-assets.plasmic.app/112ee7b3da9ceb79eaa527c2bcddb4bb.png',
  // manufacturing
  'https://site-assets.plasmic.app/d601bc492c210f9cd29a247d6d85ce89.png',
  'https://site-assets.plasmic.app/6aad20d2afc3f09a14019ce396e9c717.png',
  'https://site-assets.plasmic.app/b048c13b5144bcee10742287a0b2cf04.png',
  'https://site-assets.plasmic.app/fcf84f69eb6d0550f27abe39f42853cf.png',
  'https://site-assets.plasmic.app/474cd10b2d4db1dcd81bd608fafbf2d9.png',
  'https://site-assets.plasmic.app/543632e0eaa7546e507949c6ec4bbc15.png',
  'https://site-assets.plasmic.app/1aeb938b83a8f92a13020a8d61cca036.png',
  'https://site-assets.plasmic.app/d235a0081ea762282820ad5e30b7b370.png',
];

const fetchVariants = async () => {
  return data.filter((row) => row.data.file).map((row) => row.data.file.url);
};

module.exports = new Promise((resolve, reject) => {
  fetchVariants().then((variants) => {
    resolve([...homePage, ...variants]);
  });
});
