import { chromium, firefox, webkit } from "playwright";
import { appendFileSync, writeFileSync } from "fs";

export async function main() {
  try {
    const browser = await firefox.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://www.atlasobscura.com/destinations");
  } catch (e) {
    console.error(e);
  }
}
