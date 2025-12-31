
Feature: Orders page tests
  
  Background:
    Given User navigates to the application
    And User click on the login link

Scenario: User should be able to see order in orders page
    And User enter the username as "demouser"
    And User enter the password as "testingisfun99"
    When User click on the login button
    Then Login should be success
    Then User add <product_id> to cart
    Then User click on the checkout button
    Then User enter the firstname as "<firstname>" in shipping address form
    Then User enter the lastname as "<lastname>" in shipping address form
    Then User enter the address as "<address>" in shipping address form
    Then User enter the state as "<state>" in shipping address form
    Then User enter the postcode as "<postcode>" in shipping address form
    Then user click on the submit order button in checkout page
    Then user should be able to see the order confirmation message
    Then User click on continue shopping button in confirmation page
    Then User click on the orders link
    Then user should be able to see the "<phone_model>" in the orders page

    Examples: 
      | firstname | lastname | address     | state | postcode | phone_model        | product_id |
      | John      | Doe      | 123 Main St | NY    | 10001    | iPhone 12 Pro Max  | 3          |
      | Jane      | Smith    | 456 Elm St  | CA    | 90210    | iPhone 12 Pro      | 4          |