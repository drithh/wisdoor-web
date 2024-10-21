import { getFinshingVariants } from './get-variants';
import hex from './hex.json';

const CMS_ID = process.env.NEXT_PUBLIC_CMS_ID;
const CMS_PUBLIC_TOKEN = process.env.NEXT_PUBLIC_CMS_PUBLIC_TOKEN;
const CMS_SECRET_TOKEN = process.env.NEXT_PUBLIC_CMS_SECRET_TOKEN;

const CMS_MODEL_ID = process.env.NEXT_PUBLIC_CMS_MODEL_ID;
import fs from 'fs';

// const files = fs.readdirSync('./scripts/image/hpl');

// const items = files.map((file) => {
//   const codeWithoutExt = file.split('.')[0];
//   return {
//     identifier: codeWithoutExt,
//     data: {
//       type: 'hpl',
//       code: codeWithoutExt,
//       price: 10000,
//     },
//   };
// });

// const items = hex.map((item) => {
//   return {
//     identifier: item.code,
//     data: {
//       type: 'pvc',
//       code: item.code,
//       hex: item.hex,
//       price: 10000,
//     },
//   };
// });

// const response = await fetch(
//   `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${CMS_MODEL_ID}/rows`,
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

const updateRow = async (rowId: string, updateItem: any) => {
  return await fetch(`https://data.plasmic.app/api/v1/cms/rows/${rowId}`, {
    method: 'PUT',
    headers: {
      'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_SECRET_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(updateItem),
  });
};

const publishRow = async (rowId: string) => {
  return await fetch(
    `https://data.plasmic.app/api/v1/cms/rows/${rowId}/publish`,
    {
      method: 'POST',
      headers: {
        // Your CMS ID and CMS Secret API token
        'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_SECRET_TOKEN}`,
      },
    }
  );
};

async function update() {
  const variants = await getFinshingVariants();
  console.log(variants);
  const hpls = variants
    .filter((item) => item.data.type === 'hpl')
    .map((item) => item.id);
  console.log(hpls);

  for (const hpl of hpls) {
    const updateItem = {
      data: {
        type: 'pvc',
      },
    };
    await updateRow(hpl, updateItem);
    await publishRow(hpl);
  }
}
update();

// const data = await response.json();
// console.log(data);
