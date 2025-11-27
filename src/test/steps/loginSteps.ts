import { Given, When, Then } from "@cucumber/cucumber";
import { Browser,chromium } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

let browser: Browser;
Given('User navigates to the application', async function () {
    browser = await chromium.launch({ headless: true });
    pageFixture.page = await browser.newPage();
    await pageFixture.page.goto('https://www.bstackdemo.com/', { 
      waitUntil: 'domcontentloaded', // or 'load' or 'networkidle'
      timeout: 60000 
    });
  });

Given('User click on the login link', async function () {
  await pageFixture.page.locator('span').filter({ hasText: 'Sign In' }).click();
});

When('User enter the username as {string}', async function (username) {
  await pageFixture.page.getByText('Select Username').press('Tab');
  await pageFixture.page.keyboard.type(username);
});


Given('User enter the password as {string}', async function (password) {
  await pageFixture.page.getByText('Select Password').press('Tab');
  await pageFixture.page.keyboard.type(password);
});

When('User click on the login button', async function () {
  await pageFixture.page.locator("//button[@id='login-btn']").click();
});

Then('Login should be success', async function () {
  await pageFixture.page.locator('span').filter({ hasText: 'Logout' }).isVisible();
  await browser.close();
});

Then('Login should fail', async function () {
  await pageFixture.page.locator('h3').filter({ hasText: 'Invalid Username' }).isVisible();
  await browser.close();
});
  
  

  

  

  

  

  
