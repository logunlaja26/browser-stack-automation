import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

Given('User navigates to the application', async function () {
    pageFixture.page.goto('https://www.bstackdemo.com/', { 
      waitUntil: 'domcontentloaded',
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
  await pageFixture.page.locator('div.css-tlfecz-indicatorContainer:visible').click();
  await pageFixture.page.getByText(password, { exact: true }).click();
});


Given('User enter incorrect password as {string}', async function (password) {  
  await pageFixture.page.getByText('Select Password').press('Tab');
  await pageFixture.page.locator('div.css-tlfecz-indicatorContainer:visible').click();
  await pageFixture.page.keyboard.type(password);
  await pageFixture.page.keyboard.press('Enter');
});

When('User click on the login button', async function () {
  await pageFixture.page.locator("#login-btn").click();
});

Then('Login should be success', async function () {
  await expect(pageFixture.page.locator('span').filter({ hasText: 'Logout' })).toBeVisible();
});

Then('Login should fail', async function () {
  await expect(pageFixture.page.locator('h3').filter({ hasText: 'Invalid Username' })).toBeVisible();
});
  
  

  

  

  

  

  
