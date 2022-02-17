@gql
Feature: GQL: Allow user to fetch commission and shipping on marketcube platform
  As a marketcube user
  I want to fetch commission and shipping on marketcube platform

  Scenario: User fetches commission and shipping with valid token
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response
    When User is hitting tax setting endpoint with valid token
    Then User should get tax setting status as ok in response
    When User fetches tax setting data from the database
    Then User should have same tax setting data as data from the database

  Scenario: User fetches commission and shipping with invalid token
    When User is hitting tax setting endpoint with invalid token
    Then User should get tax setting error of invalid token in response

  Scenario: User fetches commission and shipping as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting tax setting endpoint with valid token
    Then User should get tax setting error of unauthorized user in response

  Scenario: User fetches commission and shipping as a admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting tax setting endpoint with valid token
    Then User should get tax setting error of unauthorized user in response
