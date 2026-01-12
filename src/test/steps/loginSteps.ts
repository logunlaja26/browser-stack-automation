import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";

Given("User navigates to the application", async function () {
  const loginPage = pageFixture.pageManager.getLoginPage();
  await loginPage.navigateToLoginPage();
});

Given("User click on the login link", async function () {
  await pageFixture.page.locator("span").filter({ hasText: "Sign In" }).click();
});

When("User enter the username as {string}", async function (username) {
  const loginPage = pageFixture.pageManager.getLoginPage();
  await loginPage.enterUsername(username);
});

Given('User enter the password as {string}', async function (password) {
  const loginPage = pageFixture.pageManager.getLoginPage();
  await loginPage.enterPassword(password);
});

Given('User enter incorrect password as {string}', async function (password) {
  const loginPage = pageFixture.pageManager.getLoginPage();
  await loginPage.enterIncorrectPassword(password);
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
  
  

  

  

  

  

  
