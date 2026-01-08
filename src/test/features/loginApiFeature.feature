Feature: Login User

  Scenario: Successful user login
    Given User send a POST request with "<firstname>" and "<password>" to the user endpoint with the following payload:
      When the response status code should be <statusCode>
    Examples:
      | firstname | password       | statusCode |
      | demouser  | testingisfun99 | 200        |