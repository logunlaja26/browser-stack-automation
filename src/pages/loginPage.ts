import { Page } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    await this.page.goto("https://www.bstackdemo.com/", {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
  }

  async enterUsername(username: string) {
    await this.page.getByText("Select Username").press("Tab");
    await this.page.keyboard.type(username);
  }
  async enterPassword(password: string) {
    await this.page.getByText("Select Password").press("Tab");
    await this.page.locator('div.css-tlfecz-indicatorContainer:visible').click();
    await this.page.getByText(password, { exact: true }).click();
  }

  async enterIncorrectPassword(password: string) {
    await this.page.getByText('Select Password').press('Tab');
    await this.page.locator('div.css-tlfecz-indicatorContainer:visible').click();
    await this.page.keyboard.type(password);
    await this.page.keyboard.press('Enter');
  }

}
