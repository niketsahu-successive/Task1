@gql
Feature: GQL: Allow user to fetch order report setting on marketcube platform

  As a marketcube user
  I want to fetch order report setting on marketcube platform

  Scenario: User fetches order report settings as a operator
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response
    When User is hitting order report setting endpoint with valid token
    Then User should get order report setting status as ok in response
    When User fetches order report setting data from the database
    Then User should have same order report setting data as data from the database

  Scenario: User fetches order report settings as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting order report setting endpoint with valid token
    Then User should get order report setting status as ok in response
    When User fetches order report setting data from the database
    Then User should have same order report setting data as data from the database

  Scenario: User fetches order report settings as an admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting order report setting endpoint with valid token
    Then User should get order report setting error of unauthorized user in response

  Scenario: User fetches order report settings with invalid token
    When User is hitting order report setting endpoint with invalid token
    Then User should get order report setting error of invalid token in response
