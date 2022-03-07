@gql
Feature: GQL: Allow user to fetch packing slip setting on marketcube platform

  As a marketcube user
  I want to fetch packing slip setting on marketcube platform

  Scenario: User fetches packing slip settings as a operator
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response
    When User is hitting packing slip setting endpoint with valid token
    Then User should get packing slip setting status as ok in response
    When User fetches packing slip setting data from the database
    Then User should have same packing slip setting data as data from the database

  Scenario: User fetches packing slip settings as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting packing slip setting endpoint with valid token
    Then User should get packing slip setting status as ok in response
    When User fetches packing slip setting data from the database
    Then User should have same packing slip setting data as data from the database

  Scenario: User fetches packing slip settings as an admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting packing slip setting endpoint with valid token
    Then User should get packing slip setting error of unauthorized user in response

  Scenario: User fetches packing slip settings with invalid token
    When User is hitting packing slip setting endpoint with invalid token
    Then User should get packing slip setting error of invalid token in response
