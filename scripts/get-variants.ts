const CMS_ID = process.env.NEXT_PUBLIC_CMS_ID;
const CMS_PUBLIC_TOKEN = process.env.NEXT_PUBLIC_CMS_PUBLIC_TOKEN;
const MODEL_ID = process.env.NEXT_PUBLIC_CMS_MODEL_ID;

export const getFinshingVariants = async () => {
  interface FileMetadata {
    url: string;
    name: string;
    size: number; // in bytes
    mimetype: string; // MIME type of the file
    imageMeta: {
      width: number;
      height: number;
    };
  }
  interface Data {
    type: string; // e.g., "hpl"
    code: string; // e.g., "F-7025-1"
    price: number; // Price in the specified currency
    file?: FileMetadata; // The file metadata
    hex?: string; // Optional hex color
  }

  // Define the main type for the object
  interface Item {
    id: string; // Unique identifier
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    identifier: string; // e.g., "F-7025-1"
    data: Data; // The data field containing type, code, price, and file
  }

  interface Response {
    rows: Item[];
  }

  const response = await fetch(
    `https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${MODEL_ID}/query`,
    {
      headers: {
        // Your CMS ID and CMS Public API token
        'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`,
      },
    }
  );
  const itemResponse = (await response.json()) as Response;

  return itemResponse.rows;
};

import fs from 'fs';
async function fetchVariants() {
  const variants = await getFinshingVariants();
  fs.writeFileSync('public/variants.json', JSON.stringify(variants, null, 2));
}

fetchVariants();
