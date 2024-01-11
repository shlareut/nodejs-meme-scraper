import * as fs from 'node:fs/promises'; // Promise-based Node.js module to enable interactions with the file system
import cheerio from 'cheerio'; // Library for parsing and manipulating HTML

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
parseToHTML('img').each(function (_index, element) {
  imagesArray.push(parseToHTML(element).attr('src'));
});

// Create new array consisting of the first ten images.
const topTenImages = imagesArray.slice(0, 10);

// ADD CODE HERE

// ===
// ===
// Testing extraction for one image only.
// ===
// ===
const rawImageData = await fetch(topTenImages[0], { cache: 'no-cache' });
const rawImageBlob = await rawImageData.blob();

const rawDataURL = URL.createObjectURL(rawImageBlob);

console.log(rawDataURL);
