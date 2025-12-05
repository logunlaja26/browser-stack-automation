Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: Login should be success
    And User enter the username as "demouser"
    And User enter the password as "testingisfun99"
    When User click on the login button
    Then Login should be success

  Scenario: Login should fail
    Given User enter the username as "fakeusername"
    Given User enter incorrect password as "fakepassword"
    When User click on the login button
    Then Login should fail