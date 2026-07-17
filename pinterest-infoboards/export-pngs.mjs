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
];

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1100, height: 1600 },
  deviceScaleFactor: 1,
});

for (const [html, outName] of boards) {
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
