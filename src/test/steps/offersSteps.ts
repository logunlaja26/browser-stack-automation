import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";


When('User click on the offers link', async function () {
    const offersPage = pageFixture.pageManager.getOffersPage();
    await offersPage.clickOffersLink();
});


Then('User should be able to see the offers page message', async function () {
    const offersPage = pageFixture.pageManager.getOffersPage();
    const messageLocator = offersPage.verifyOffersPageMessage();
    await expect(messageLocator).toBeVisible();
});