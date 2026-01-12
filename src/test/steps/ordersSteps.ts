import { Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";



  Then('User add {int} to cart', async function (productId: number) {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.addProductToCart(productId);
  });



  Then('User click on the checkout button', async function () {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.clickCheckoutButton();
  });


  Then('User enter the firstname as {string} in shipping address form', async function (firstname: string) {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.enterFirstName(firstname);
    const inputValue = await checkoutPage.getFirstNameValue();
    expect(inputValue).not.toBe('');
  });


  Then('User enter the lastname as {string} in shipping address form', async function (lastname: string) {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.enterLastName(lastname);
    const inputValue = await checkoutPage.getLastNameValue();
    expect(inputValue).not.toBe('');
  });


  Then('User enter the address as {string} in shipping address form', async function (address: string) {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.enterAddress(address);
    const inputValue = await checkoutPage.getAddressValue();
    expect(inputValue).not.toBe('');
    expect(inputValue.length).toBeGreaterThan(0);
  });


  Then('User enter the state as {string} in shipping address form', async function (state: string) {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.enterState(state);
    const inputValue = await checkoutPage.getStateValue();
    expect(inputValue).not.toBe('');

  });


  Then('User enter the postcode as {string} in shipping address form', async function (postcode: string) {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.enterPostcode(postcode);
    const inputValue = await checkoutPage.getPostcodeValue();
    expect(inputValue).not.toBe('');
  });


  Then('user click on the submit order button in checkout page', async function () {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.submitOrder();
  });


  Then('user should be able to see the order confirmation message', async function () {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    const confirmationLocator = checkoutPage.verifyOrderConfirmation();
    await expect(confirmationLocator).toBeVisible();
  });


  Then('User click on continue shopping button in confirmation page', async function () {
    const checkoutPage = pageFixture.pageManager.getCheckoutPage();
    await checkoutPage.clickContinueShopping();
  });


  Then('User click on the orders link', async function () {
    const ordersPage = pageFixture.pageManager.getOrdersPage();
    await ordersPage.clickOrdersLink();
  });


  Then('user should be able to see the {string} in the orders page', async function (phoneModel: string) {
    const ordersPage = pageFixture.pageManager.getOrdersPage();
    const orderLocator = ordersPage.verifyProductInOrders(phoneModel);
    await expect(orderLocator).toBeVisible();

  });