Feature: GQL: Allow user to fetch metafield setting on marketcube platform

  As a marketcube user
  I want to fetch metafield setting on marketcube platform

  Scenario: User fetches metafield setting as a seller
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting metafield setting endpoint with valid token
    Then User should get metafield setting status as ok in response
    When User fetches metafield setting data from the database
    Then User should have same metafield setting data as data from the database

  Scenario: User fetches metafield setting as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting metafield setting endpoint with valid token
    Then User should get metafield setting status as ok in response
    When User fetches metafield setting data from the database
    Then User should have same metafield setting data as data from the database

  Scenario: User is trying to fetch metafield setting as an admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting metafield setting endpoint with valid token
    Then User should get metafield setting error of unauthorized user in response

  Scenario: User is trying to fetch metafield setting with an invalid token
    When User is hitting metafield setting endpoint with an invalid token
    Then User should get metafield setting error of invalid token provided in response
