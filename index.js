import cheerio from 'cheerio';

// Create constant with website that should be scraped.
const website = 'https://memegen-link-examples-upleveled.netlify.app/';

async function fetchWebsiteTextContent() {
  // Fetch website html (string) asynchronously.
  const websiteTextContent = await fetch(website, { cache: 'no-cache' });
  return websiteTextContent.text();
}

async function extractImageUrls() {
  // Await for fetchWebsite before loading HTML string into Cheerio string to HTML parser.
  const websiteTextContent = await fetchWebsiteTextContent();
  const $ = cheerio.load(websiteTextContent);

  // Iterate through all <img> tags, extract the "src" attribute and push them into imageArr array.
  const imagesArray = [];
  $('img').each(function (_index, element) {
    imagesArray.push($(element).attr('src'));
  });

  // Return image array to be used in next function
  return imagesArray;
}

async function processImagesArray() {
  // Await image extraction to be completed.
  const imagesArray = await extractImageUrls();

  // Create new array consisting of the first ten images.
  const topTenImages = imagesArray.slice(0, 10);

  // Return top ten images array for data extraction in the next function.
  return topTenImages;
}

async function fetchRawImageData() {
  // Await output from array processing function.
  const topTenImages = await processImagesArray();

  // TODO: Iterate through the array, fetch the data and push into new array.
  //
  //
  //

  // Testing on one image file.
  const rawImageData = await fetch(topTenImages[0], { cache: 'no-cache' });
  // Converting the blob into text that can be used to store in an image file.
  return await rawImageData.blob();
}

async function processRawImageData() {
  // Awaiting images array to finish processing.
  const rawImagesData = await fetchRawImageData();
  //
  //
  // Create blob object URL from raw image data.
  const rawDataURL = URL.createObjectURL(rawImagesData);
  console.log(rawDataURL);
}

processRawImageData();

// QUESTIONS
// 1. Is it even the right way to fetch an image and convert it into a blob object?
// 2. How can I convert or store blob objects as an image?
