import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";

// Set default timeout to 60 seconds (60000ms) for all step definitions
setDefaultTimeout(60 * 1000);

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: true,
    slowMo: 1000, // Slows down actions by 1000ms (1 second) between each action
  });
});

Before(async function () {
  context = await browser.newContext({
    permissions: ["geolocation"],
  });
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async function (this: any, { pickle, result }) {
  if (result?.status === Status.FAILED) {
    const img = await pageFixture.page.screenshot({
      path: `test-results/screenshot-${pickle.name}-${Date.now()}.png`,
    });
    await this.attach(img, "image/png");
  }
  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
