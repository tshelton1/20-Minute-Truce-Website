import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "Pinterest posts");

const boards = [
  ["01-emotional-flooding.html", "8-emotional-flooding.png"],
  ["02-silent-treatment.html", "9-silent-treatment.png"],
  ["03-fighting-fair.html", "10-fighting-fair.png"],
  ["04-relationship-anxiety.html", "11-relationship-anxiety.png"],
  ["05-destructive-habits.html", "12-destructive-habits.png"],
  ["13-silent-treatment-stonewalling.html", "13-silent-treatment-stonewalling.png"],
  ["14-recurring-arguments.html", "14-recurring-arguments.png"],
  ["15-feeling-unheard.html", "15-feeling-unheard.png"],
  ["16-money-arguments.html", "16-money-arguments.png"],
  ["17-emotional-disconnect.html", "17-emotional-disconnect.png"],
  ["18-rebuild-trust-after-lie.html", "18-rebuild-trust-after-lie.png"],
  ["19-fight-over-little-things.html", "19-fight-over-little-things.png"],
  ["20-feeling-unappreciated.html", "20-feeling-unappreciated.png"],
];

const onlyNew = process.argv.includes("--new8");
const selected = onlyNew
  ? boards.filter(([html]) => /^(1[3-9]|20)-/.test(html))
  : boards;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1100, height: 1600 },
  deviceScaleFactor: 1,
});

for (const [html, outName] of selected) {
  const fileUrl = pathToFileURL(path.join(__dirname, html)).href;
  await page.goto(fileUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const pin = page.locator("#pin");
  const outPath = path.join(outDir, outName);
  await pin.screenshot({ path: outPath, type: "png" });
  console.log("Wrote", outPath);
}

await browser.close();
