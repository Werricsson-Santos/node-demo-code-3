const fs = require("fs");
const path = require("path");

async function main() {
  // Libs de terceiros dentro de um Code Robot só podem ser carregadas via
  // dynamic import — require() não funciona para pacotes NPM no runtime embutido.
  const { load } = await import("cheerio");

  const htmlPath = path.join(__dirname, "sample.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  const $ = load(html);
  const title = $("h1").first().text().trim();

  console.log(`Título extraído: ${title}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
