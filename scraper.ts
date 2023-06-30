import { chromium, firefox, webkit } from "playwright";
import { appendFileSync, writeFileSync } from "fs";

export async function main() {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://www.google.com");
  } catch (e) {
    console.error(e);
  }
}
