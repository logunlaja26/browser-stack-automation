import { When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";


Then('User click on the Add to favorites iPhone 12 Pro Max link', async function () {
    const favoritesPage = pageFixture.pageManager.getFavoritesPage();
    await favoritesPage.addProductToFavorites();
});

When('User click on the favorites link', async function () {
    const favoritesPage = pageFixture.pageManager.getFavoritesPage();
    await favoritesPage.clickFavoritesLink();
});


Then('User should be able to see the favorites page image message', async function () {
    const favoritesPage = pageFixture.pageManager.getFavoritesPage();
    const bannerLocator = favoritesPage.verifyFavoritesPageBanner();
    await expect(bannerLocator).toBeVisible();
});


Then('User should be able to see the {string} in the favorites page', async function (productName: string) {
    const favoritesPage = pageFixture.pageManager.getFavoritesPage();
    const productLocator = favoritesPage.verifyProductInFavorites(productName);
    await expect(productLocator).toBeVisible();
});
