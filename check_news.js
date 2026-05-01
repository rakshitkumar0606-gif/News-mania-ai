const fetch = require('node-fetch');

async function check() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3f652a5b2c82400689eabe41eaa799e3", {
    headers: { "User-Agent": "NewsManiaAI/1.0" }
  });
  const json = await res.json();
  console.log("Total articles:", json.articles?.length);
  const withImages = json.articles?.filter(a => a.urlToImage).length;
  console.log("With images:", withImages);
  if (json.articles?.length > 0) {
    console.log("Sample article:", json.articles[0]);
  }
}
check();
