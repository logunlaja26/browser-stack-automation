  Feature: Offers page tests
  
  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: User should be able to see the offers page
    And User enter the username as "demouser"
    And User enter the password as "testingisfun99"
    When User click on the login button
    Then Login should be success
    When User click on the offers link
    Then User should be able to see the offers page message