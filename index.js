import cheerio from 'cheerio';

const website = 'https://memegen-link-examples-upleveled.netlify.app/';

async function fetchWebsite() {
  const request = await fetch(website, { cache: 'no-cache' });
  const result = await request.text();
  return result;
}

async function processWebsite() {
  const text = await fetchWebsite();
  // const html = parseFromString(text);
  const html = cheerio.load(text);
  const img = html('#images').html();
  console.log(img);
}

processWebsite();
