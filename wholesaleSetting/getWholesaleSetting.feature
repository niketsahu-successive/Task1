Feature: GQL: Allow user to fetch wholesale setting on marketcube platform

  As a marketcube user
  I want to fetch wholesale setting on marketcube platform

  Scenario: User fetches wholesale setting as a seller
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting wholesale setting endpoint with valid token
    Then User should get wholesale setting status as ok in response
    When User fetches wholesale setting data from the database
    Then User should have same wholesale setting as wholesale setting data from the database

  Scenario: User fetches wholesale setting as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting wholesale setting endpoint with valid token
    Then User should get wholesale setting status as ok in response
    When User fetches wholesale setting data from the database
    Then User should have same wholesale setting as wholesale setting data from the database

  Scenario: User fetches wholesale setting with invalid token
    When User is hitting wholesale setting endpoint with invalid token
    Then User should wholesale setting error of invalid token provided in response

  Scenario: User fetches wholesale setting as a admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting wholesale setting endpoint with valid token
    Then User should get wholesale setting error of unauthorized user in response
