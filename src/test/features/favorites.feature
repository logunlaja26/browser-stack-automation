  Feature: Favorites page tests
  
  Background:
    Given User navigates to the application
    And User click on the login link

  Scenario: User should be able to see the favorites page
    And User enter the username as "demouser"
    And User enter the password as "testingisfun99"
    When User click on the login button
    Then Login should be success    
    And User click on the Add to favorites iPhone 12 Pro Max link
    When User click on the favorites link
    Then User should be able to see the favorites page image message
    And User should be able to see the "iPhone 12 Pro Max" in the favorites page