Feature: GQL: Allow user to fetch invoice setting on marketcube platform

  As a marketcube user
  I want to fetch invoice setting on marketcube platform

  Scenario: User fetches invoice setting as a seller
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting invoice setting endpoint with valid token
    Then User should get invoice setting status as ok in response
    When User fetches invoice setting data from the database
    Then User should have same invoice setting data as data from the database

  Scenario: User fetches invoice setting as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting invoice setting endpoint with valid token
    Then User should get invoice setting status as ok in response
    When User fetches invoice setting data from the database
    Then User should have same invoice setting data as data from the database

  Scenario: User is trying to fetch invoice setting as an admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting invoice setting endpoint with valid token
    Then User should get invoice setting error of unauthorized user in response

  Scenario: User is trying to fetch invoice setting with an invalid token
    When User is hitting invoice setting endpoint with an invalid token
    Then User should get invoice setting error of invalid token provided in response
