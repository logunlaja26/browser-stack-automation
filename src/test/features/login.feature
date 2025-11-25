Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "demousers"
    And User enter the password as "testingisfun99"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "fakeusername"
    Given User enter the password as "fakepassword"
    When User click on the login button
    Then Login should fail