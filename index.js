const website = 'https://memegen-link-examples-upleveled.netlify.app/';
const websiteBody = function (website) {
  return fetch(website, { cache: 'no-cache' }).then((response) =>
    console.log(response.statusText),
  );
};

websiteBody(website);
