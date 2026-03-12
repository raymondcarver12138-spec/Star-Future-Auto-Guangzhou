import https from 'https';

const urls = [
  'https://duk.tw/vnQKv2.jpg',
  'https://duk.tw/srF0bd.jpg',
  'https://duk.tw/mNxUgQ.jpg',
  'https://duk.tw/4T5TTm.jpg',
  'https://duk.tw/89m4RU.jpg',
  'https://duk.tw/U4dBix.webp'
];

let completed = 0;

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, '->', res.headers.location);
    completed++;
    if (completed === urls.length) process.exit(0);
  }).on('error', (e) => {
    console.log(url, 'error', e.message);
    completed++;
    if (completed === urls.length) process.exit(0);
  });
});
