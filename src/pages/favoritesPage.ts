import { Page, Locator } from "@playwright/test";

export class FavoritesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToFavorites() {
    await this.page.locator(`//div[@id='3']//button[contains(@class,'MuiButtonBase-root MuiIconButton-root Button')]`).click();
  }
  
  async clickFavoritesLink() {
    await this.page.locator('//a[@href="/favourites"]').click();
  }

  verifyFavoritesPageBanner(): Locator {
    return this.page.locator("//img[@alt='banner main']");
  }

  verifyProductInFavorites(productName: string): Locator {
    return this.page.locator('p').filter({ hasText: productName });
  }
}
