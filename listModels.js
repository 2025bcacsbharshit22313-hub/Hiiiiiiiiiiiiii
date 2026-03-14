// listModels.js
const API_KEY = "AIzaSyCfgGlwopQwS4n_JuS4u0EDPr7U7sjbPo0";

async function listModels() {
  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models", {
    headers: { "x-goog-api-key": API_KEY },
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

listModels().catch(e => {
  console.error("ERR", e);
});