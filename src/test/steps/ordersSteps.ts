import { Then } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import { expect } from "@playwright/test";



  Then('User add {int} to cart', async function (productId: number) {
    await pageFixture.page.locator(`//*[@id='${productId}']/div[4]`).click();
  });



  Then('User click on the checkout button', async function () {
    // Wait for cart to be open/visible (cart opens automatically after adding items)
    await pageFixture.page.locator('.float-cart--open').waitFor({ state: 'visible', timeout: 10000 });
    // Click the checkout button directly
    await pageFixture.page.locator('.buy-btn').click();
  });


  Then('User enter the firstname as {string} in shipping address form', async function (firstname) {
    await pageFixture.page.locator('//*[@id="firstNameInput"]').fill(firstname);
    const inputValue = await pageFixture.page.locator('//*[@id="firstNameInput"]').inputValue();
    expect(inputValue).not.toBe('');
  });


  Then('User enter the lastname as {string} in shipping address form', async function (lastname) {
    await pageFixture.page.locator('//*[@id="lastNameInput"]').fill(lastname);
    const inputValue = await pageFixture.page.locator('//*[@id="lastNameInput"]').inputValue();
    expect(inputValue).not.toBe('');
  });


  Then('User enter the address as {string} in shipping address form', async function (address) {
    await pageFixture.page.locator('//*[@id="addressLine1Input"]').fill(address);
    const inputValue = await pageFixture.page.locator('//*[@id="addressLine1Input"]').inputValue();
    expect(inputValue).not.toBe('');
    expect(inputValue.length).toBeGreaterThan(0);
  });


  Then('User enter the state as {string} in shipping address form', async function (state) {
    await pageFixture.page.locator('//*[@id="provinceInput"]').fill(state);
    const inputValue = await pageFixture.page.locator('//*[@id="provinceInput"]').inputValue();
    expect(inputValue).not.toBe('');
    
  });


  Then('User enter the postcode as {string} in shipping address form', async function (postcode) {
    await pageFixture.page.locator('//*[@id="postCodeInput"]').fill(postcode);
    const inputValue = await pageFixture.page.locator('//*[@id="postCodeInput"]').inputValue();
    expect(inputValue).not.toBe('');  
  });


  Then('user click on the submit order button in checkout page', async function () {
    await pageFixture.page.locator('//*[@id="checkout-shipping-continue"]').click();
  });


  Then('user should be able to see the order confirmation message', async function () {
    expect(pageFixture.page.getByText('Your Order has been successfully placed.', { exact: true })).toBeVisible(); 
  });


  Then('User click on continue shopping button in confirmation page', async function () {
     
  });


  Then('User click on the orders link', async function () {
     
  });


  Then('user should be able to see the {string} in the orders page', async function (string) { 
    
  });