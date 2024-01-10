const website = 'https://memegen-link-examples-upleveled.netlify.app/';

async function fetchWebsite() {
  let request = await fetch(website, { cache: 'no-cache' });
  let result = await request.text();
  return result;
}

async function websiteBody() {
  let body = await fetchWebsite();
  console.log(body);
}

websiteBody();
