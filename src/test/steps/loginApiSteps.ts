import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


  Given('User send a POST request with {string} and {string} to the user endpoint with the following payload:', async function (username, password) {
    // Send POST request to the API endpoint
    const response = await fetch('https://www.bstackdemo.com/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: username, password: password }),
    });
    this.response = response;
    this.responseStatus = response.status;
  
  });


  When('the response status code should be {int}', async function (statusCode) {
    expect(this.responseStatus).toBe(statusCode);
  });