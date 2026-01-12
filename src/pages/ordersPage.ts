import { Page, Locator } from "@playwright/test";

export class OrdersPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOrdersLink() {
    await this.page.locator('//a[@href="/orders"]').click();
  }

  verifyProductInOrders(phoneModel: string): Locator {
    const expectedText = `Title: ${phoneModel}`;
    return this.page.locator(`div.order:has-text("${expectedText}")`).first();
  }
}
