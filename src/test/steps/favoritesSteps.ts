import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";


Then('User click on the Add to favorites {string} link', async function (string) {
    await pageFixture.page.locator("//div[@id='3']//button[contains(@class,'MuiButtonBase-root MuiIconButton-root Button')]").click();
});

When('User click on the favorites link', async function () {
    await pageFixture.page.locator('//a[@href="/favourites"]').click();
});


Then('User should be able to see the favorites page image message', async function () {
    await expect(pageFixture.page.locator("//img[@alt='banner main']")).toBeVisible();
});


Then('User should be able to see the {string} in the favorites page', async function (string) {
    await expect(pageFixture.page.locator('p').filter({ hasText: string })).toBeVisible();
});
