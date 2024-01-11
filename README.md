# Meme image scraper by Lars

## Core features

1. Fetch HTML string from a website (currently 'https://memegen-link-examples-upleveled.netlify.app/')
2. Parse string into HTML format
3. Extract all URLs inside <img> tags
4. Store extracted URLs in an array
5. Create a new array of the first ten images
6. Fetch base64 data from each URL
7. Store base64 data in a new array
8. Check for './memes' directory and create it if not already existing
9. Create numbered '.jpg' file for each array item, starting with '01.jpg'
10. Overwrite data when run program again

## Additional features

- Show progress bar in the console
