const CMS_ID = process.env.CMS_ID;
const CMS_PUBLIC_TOKEN = process.env.CMS_PUBLIC_TOKEN;
const CMS_SECRET_TOKEN = process.env.CMS_SECRET_TOKEN;

const CMS_MODEL_ID = process.env.CMS_MODEL_ID;
import fs from 'fs';

const files = fs.readdirSync('./scripts/image/hpl');

const items = files.map((file) => {
  const codeWithoutExt = file.split('.')[0];
  return {
    identifier: codeWithoutExt,
    data: {
      type: 'hpl',
      code: codeWithoutExt,
      price: 10000,
    },
  };
});

// const response = await fetch(
//   `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${modelId}/rows`,
//   {
//     method: 'POST',
//     headers: {
//       // Your CMS ID and CMS Secret API token
//       'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_SECRET_TOKEN}`,
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({ rows: items }),
//   }
// );

const response = await fetch(
  `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${CMS_MODEL_ID}/query`,
  {
    headers: {
      // Your CMS ID and CMS Public API token
      'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`,
    },
  }
);
const data = await response.json();
