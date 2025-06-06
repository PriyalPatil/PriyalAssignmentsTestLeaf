

import { test, firefox, chromium } from "@playwright/test";

test("To launch RedBus in Edge browser", async () => {

const EdgebrowserInstance = await chromium.launch({ headless: false });
const EdgebrowserContext = await EdgebrowserInstance.newContext();
const page = await EdgebrowserContext.newPage();

await page.goto("https://www.redbus.in/");
const redBusUrl = await page.url();
console.log("RedBus URL:", redBusUrl);

const redBusTitle = await page.title();
console.log("RedBus Title:", redBusTitle);
});

test("To launch Flipkart] in Firefox browser", async () => {

const ffbrowserInstance = await firefox.launch({ headless: false});
const ffbrowserContext = await ffbrowserInstance.newContext();
const page = await ffbrowserContext.newPage();

await page.goto("https://www.flipkart.com");
const flipKartUrl = await page.url();
console.log("RedBus URL:", flipKartUrl);

const flipkartTitle = await page.title();
console.log("RedBus Title:", flipkartTitle);
});