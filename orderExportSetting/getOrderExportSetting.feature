@gql
Feature: GQL: Allow user to fetch order export setting on marketcube platform

  As a marketcube user
  I want to fetch order export setting on marketcube platform

  Scenario: User fetches order export settings as a operator
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response
    When User is hitting order export setting endpoint with valid token
    Then User should get order export setting status as ok in response
    When User fetches order export setting data from the database
    Then User should have same order export setting data as data from the database

  Scenario: User fetches order export setting as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting order export setting endpoint with valid token
    Then User should get order export setting status as ok in response
    When User fetches order export setting data from the database
    Then User should have same order export setting data as data from the database

  Scenario: User fetches order export setting as an admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting order export setting endpoint with valid token
    Then User should get order export setting error of unauthorized user in response

Scenario: User fetches order export setting with an invalid token
    When User is hitting order export setting endpoint with an invalid token
    Then User should get order export setting error of invalid token in response
