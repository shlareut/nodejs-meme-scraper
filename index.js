import cheerio from 'cheerio';

const website = 'https://memegen-link-examples-upleveled.netlify.app/';

async function fetchWebsite() {
  // Fetch website html (string) asynchronously.
  const request = await fetch(website, { cache: 'no-cache' });
  const result = await request.text();
  return result;
}

async function processWebsite() {
  // Await for fetchWebsite before loading HTML string into Cheerio string to HTML parser.
  const textContent = await fetchWebsite();
  const $ = cheerio.load(textContent);

  // Iterate through all <img> tags, extract the "src" attribute and push them into imageArr array.
  const imageArr = [];
  $('img').each(function (index, element) {
    imageArr.push($(element).attr('src'));
  });

  // Log imageArr to console for reference.
  console.log(imageArr);
}

processWebsite();
