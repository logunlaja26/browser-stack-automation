import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(productId: number) {
    await this.page.locator(`//*[@id='${productId}']/div[4]`).click();
  }

  async clickCheckoutButton() {
    // Wait for cart to be open/visible (cart opens automatically after adding items)
    await this.page.locator('.float-cart--open').waitFor({ state: 'visible', timeout: 10000 });
    // Click the checkout button directly
    await this.page.locator('.buy-btn').click();
  }

  async enterFirstName(firstname: string) {
    await this.page.locator('#firstNameInput').fill(firstname);
  }

  async getFirstNameValue() {
    return await this.page.locator('#firstNameInput').inputValue();
  }

  async enterLastName(lastname: string) {
    await this.page.locator('#lastNameInput').fill(lastname);
  }

  async getLastNameValue() {
    return await this.page.locator('#lastNameInput').inputValue();
  }

  async enterAddress(address: string) {
    await this.page.locator('#addressLine1Input').fill(address);
  }

  async getAddressValue() {
    return await this.page.locator('#addressLine1Input').inputValue();
  }

  async enterState(state: string) {
    await this.page.locator('#provinceInput').fill(state);
  }

  async getStateValue() {
    return await this.page.locator('#provinceInput').inputValue();
  }

  async enterPostcode(postcode: string) {
    await this.page.locator('//*[@id="postCodeInput"]').fill(postcode);
  }

  async getPostcodeValue() {
    return await this.page.locator('//*[@id="postCodeInput"]').inputValue();
  }

  async submitOrder() {
    await this.page.locator('//*[@id="checkout-shipping-continue"]').click();
  }

  verifyOrderConfirmation(): Locator {
    return this.page.getByText('Your Order has been successfully placed.', { exact: true });
  }

  async clickContinueShopping() {
    await this.page.getByRole('button', { name: 'Continue Shopping »' }).click();
  }
}
