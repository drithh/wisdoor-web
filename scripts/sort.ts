import sharp from 'sharp';
import variants from '../public/variants.json';
const CMS_ID = process.env.NEXT_PUBLIC_CMS_ID;
const CMS_PUBLIC_TOKEN = process.env.NEXT_PUBLIC_CMS_PUBLIC_TOKEN;
const CMS_SECRET_TOKEN = process.env.NEXT_PUBLIC_CMS_SECRET_TOKEN;

const CMS_MODEL_ID = process.env.NEXT_PUBLIC_CMS_MODEL_ID;

// Fetch image data from the URL
async function fetchImageData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch image from ${url}: ${response.statusText}`
    );
  }
  const imageBuffer = await response.arrayBuffer();
  return Buffer.from(imageBuffer);
}

// Get the average color of an image using its buffer
async function getAverageColor(imageBuffer: Buffer) {
  const { data } = await sharp(imageBuffer)
    .resize(1, 1) // Resize to 1x1 pixel
    .raw()
    .toBuffer({ resolveWithObject: true });

  // The pixel data will contain [R, G, B]
  const avgR = data[0];
  const avgG = data[1];
  const avgB = data[2];

  return { r: avgR, g: avgG, b: avgB };
}

// Calculate brightness based on the perceived brightness formula
function calculateBrightness({ r, g, b }: { r: number; g: number; b: number }) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function hexToRgb(hex: string) {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex string to get RGB values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255; // Extract red
  const g = (bigint >> 8) & 255; // Extract green
  const b = bigint & 255; // Extract blue

  return { r, g, b };
}

// Process each image and sort by brightness
async function processDataWithImages() {
  const results = [];

  for (const item of variants) {
    if (!item.data.file) {
      console.error(`Image with ID ${item.id} does not have a file`);
      continue;
    }
    try {
      const imageBuffer = await fetchImageData(item.data.file.url);
      const avgColor = await getAverageColor(imageBuffer);
      const brightness = calculateBrightness(avgColor);

      results.push({
        id: item.id,
        avgColor,
        brightness,
      });
    } catch (error) {
      console.error(`Error processing image with ID ${item.id}:`, error);
    }
  }

  results.sort((a, b) => b.brightness - a.brightness);
  console.log('Sorted images:', results);
  return results;
}

async function processDataWithHex() {
  const results = [];

  for (const item of variants) {
    if (!item.data.hex) {
      console.error(`Hex code with ID ${item.id} does not have a hex code`);
      continue;
    }
    try {
      const { r, g, b } = hexToRgb(item.data.hex);
      const brightness = calculateBrightness({ r, g, b });

      results.push({
        id: item.id,
        brightness,
      });
    } catch (error) {
      console.error(`Error processing hex code ${item.id}:`, error);
    }
  }

  results.sort((a, b) => b.brightness - a.brightness);
  console.log('Sorted hex codes:', results);
  return results;
}

const position = 100;

async function main() {
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

  // const results = await processDataWithImages();
  const results = await processDataWithHex();

  let index = 0;
  for (const result of results) {
    index++;
    const updateItem = {
      data: {
        position: index + position,
      },
    };
    await updateRow(result.id, updateItem);
    await publishRow(result.id);
    console.log(`Updated image with ID ${result.id}`);
  }
}

main();
