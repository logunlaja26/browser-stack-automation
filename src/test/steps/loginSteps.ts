import { Given, When, Then } from "@cucumber/cucumber";
import { Page,Browser,chromium } from "@playwright/test";

let browser: Browser;
let page: Page;
Given('User navigates to the application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('https://www.bstackdemo.com/');
  });

Given('User click on the login link', async function () {
  await page.locator('span').filter({ hasText: 'Sign In' }).click();
});

When('User enter the username as {string}', async function (username) {
  await page.getByText('Select Username').press('Tab');
  await page.keyboard.type(username);
  page.waitForTimeout(4000);
});


Given('User enter the password as {string}', async function (password) {
  await page.getByText('Select Password').press('Tab');
  page.keyboard.type(password);
});

When('User click on the login button', async function () {
  await page.locator("//button[@id='login-btn']").click();
});

Then('Login should be success', async function () {
  await page.locator('span').filter({ hasText: 'Logout' }).isVisible();
  await browser.close();
});

Then('Login should fail', async function () {
  await page.locator('h3').filter({ hasText: 'Invalid Username' }).isVisible();
  await browser.close();
});
  
  

  

  

  

  

  
