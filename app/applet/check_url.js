import https from 'https';
https.get('https://duk.tw/ZrHJRW.png', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  if (res.statusCode >= 300 && res.statusCode < 400) {
    console.log('Redirect Location:', res.headers.location);
  }
}).on('error', (e) => {
  console.error(e);
});
