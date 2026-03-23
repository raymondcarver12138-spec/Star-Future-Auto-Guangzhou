const https = require('https');
const urls = [
  'https://ibb.co/FNx7pC0',
  'https://ibb.co/CsNY83cJ',
  'https://ibb.co/R1Gh2Vr',
  'https://ibb.co/qK5ksTf',
  'https://ibb.co/0jcfy30d',
  'https://ibb.co/ccwz4L9K',
  'https://ibb.co/JF59t72J',
  'https://ibb.co/5mm0kfY',
  'https://ibb.co/7dJN9wBZ'
];

Promise.all(urls.map(url => new Promise(resolve => {
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/<link rel="image_src" href="(.*?)"/);
      const match2 = data.match(/<meta property="og:image" content="(.*?)"/);
      resolve(`${url} -> ${match ? match[1] : (match2 ? match2[1] : 'not found')}`);
    });
  }).on('error', err => resolve(`${url} -> Error: ${err.message}`));
}))).then(results => console.log(results.join('\n')));
