import { parseFromString } from 'dom-parser';

const website = 'https://memegen-link-examples-upleveled.netlify.app/';

async function fetchWebsite() {
  const request = await fetch(website, { cache: 'no-cache' });
  const result = await request.text();
  return result;
}

async function processWebsite() {
  const text = await fetchWebsite();
  const html = parseFromString(text);
  console.log(html);
  // console.log(html.querySelector('img'));
}

processWebsite();
