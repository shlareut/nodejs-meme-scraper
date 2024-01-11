import * as fs from 'node:fs/promises'; // Promise-based Node.js module to enable interactions with the file system
import cheerio from 'cheerio'; // Library for parsing and manipulating HTML
import { encode } from 'node-base64-image'; // Library to extract Base64 from image URLs

// Create constant with website that should be scraped.
const website = 'https://memegen-link-examples-upleveled.netlify.app/';

// Fetch website html (string) asynchronously.
const fetchWebsite = await fetch(website, { cache: 'no-cache' });
const websiteContent = await fetchWebsite.text();

// Await for fetchWebsite before loading HTML string into Cheerio string to HTML parser.
const parseToHTML = cheerio.load(websiteContent);

// Initializing an empty array that will be used to push the image URLs.
const imagesArray = [];

// Iterate through all <img> tags, extract the "src" attribute and push them into imagesArray.
parseToHTML('img').each(function (index, element) {
  imagesArray.push(parseToHTML(element).attr('src'));
});

// Create new array consisting of the first ten images.
const topTenImagesURLs = imagesArray.slice(0, 10);

// Create empty array for storing base64 image data
const topTenImagesData = [];

// Loop through image URLs, extract base64 image data and push to empty array.
for (const i of topTenImagesURLs) {
  const imageData = await encode(i);
  await topTenImagesData.push(imageData);
}

// Initialize a counter for naming the image files.
let imageCount = 1;

// Loop through base64 image array and create .jpg files for each, increase counter for naming.
for (const i of topTenImagesData) {
  imageCount = imageCount < 10 ? '0' + imageCount : imageCount;
  await fs.writeFile(`./memes/${imageCount}.jpg`, i);
  imageCount++;
}
