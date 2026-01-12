import { Page, Locator } from "@playwright/test";

export class OffersPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOffersLink() {
    await this.page.locator('//a[@href="/offers"]').click();
  }

  verifyOffersPageMessage(): Locator {
    return this.page.getByText("We've promotional offers in your location.", { exact: true });
  }
}
