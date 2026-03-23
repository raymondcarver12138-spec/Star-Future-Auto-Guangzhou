fetch('https://ibb.co/YTYhKRrV').then(res => res.text()).then(html => {
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);
  if(match) console.log(match[1]);
});
