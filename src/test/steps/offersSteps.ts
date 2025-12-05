import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";


When('User click on the offers link', async function () {
    await pageFixture.page.locator('//a[@href="/offers"]').click();
});


Then('User should be able to see the offers page message', async function () {
    await expect(pageFixture.page.getByText("We've promotional offers in your location.", { exact: true })).toBeVisible();
});