import https from 'https';

const urls = [
  'https://duk.tw/vnQKv2.jpg',
  'https://duk.tw/srF0bd.jpg',
  'https://duk.tw/mNxUgQ.jpg',
  'https://duk.tw/4T5TTm.jpg',
  'https://duk.tw/89m4RU.jpg',
  'https://duk.tw/U4dBix.webp'
];

function resolveUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve({ original: url, resolved: res.headers.location });
      } else {
        resolve({ original: url, resolved: url, status: res.statusCode });
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const url of urls) {
    try {
      const result = await resolveUrl(url);
      console.log(result);
    } catch (e) {
      console.error('Error resolving', url, e.message);
    }
  }
}

main();
