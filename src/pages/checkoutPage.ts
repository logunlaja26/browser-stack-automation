import { Page, Locator } from "@playwright/test";

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private Elements = {
    firstNameInput: '#firstNameInput',
    lastNameInput: '#lastNameInput',
    addressLine1Input: '#addressLine1Input',
    provinceInput: '#provinceInput',
    postCodeInput: '//*[@id="postCodeInput"]',
    checkoutShippingContinue: '//*[@id="checkout-shipping-continue"]',
    floatCartOpen: '.float-cart--open',
    buyBtn: '.buy-btn'
  }

  async addProductToCart(productId: number) {
    await this.page.locator(`//*[@id='${productId}']/div[4]`).click();
  }

  async clickCheckoutButton() {
    // Wait for cart to be open/visible (cart opens automatically after adding items)
    await this.page.locator(this.Elements.floatCartOpen).waitFor({ state: 'visible', timeout: 10000 });
    // Click the checkout button directly
    await this.page.locator(this.Elements.buyBtn).click();
  }

  async enterFirstName(firstname: string) {
    await this.page.locator(this.Elements.firstNameInput).fill(firstname);
  }

  async getFirstNameValue() {
    return await this.page.locator(this.Elements.firstNameInput).inputValue();
  }

  async enterLastName(lastname: string) {
    await this.page.locator(this.Elements.lastNameInput).fill(lastname);
  }

  async getLastNameValue() {
    return await this.page.locator(this.Elements.lastNameInput).inputValue();
  }

  async enterAddress(address: string) {
    await this.page.locator(this.Elements.addressLine1Input).fill(address);
  }

  async getAddressValue() {
    return await this.page.locator(this.Elements.addressLine1Input).inputValue();
  }

  async enterState(state: string) {
    await this.page.locator(this.Elements.provinceInput).fill(state);
  }

  async getStateValue() {
    return await this.page.locator(this.Elements.provinceInput).inputValue();
  }

  async enterPostcode(postcode: string) {
    await this.page.locator(this.Elements.postCodeInput).fill(postcode);
  }

  async getPostcodeValue() {
    return await this.page.locator(this.Elements.postCodeInput).inputValue();
  }

  async submitOrder() {
    await this.page.locator(this.Elements.checkoutShippingContinue).click();
  }

  verifyOrderConfirmation(): Locator {
    return this.page.getByText('Your Order has been successfully placed.', { exact: true });
  }

  async clickContinueShopping() {
    await this.page.getByRole('button', { name: 'Continue Shopping »' }).click();
  }
}
