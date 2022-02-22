Feature: GQL: Allow user to fetch product form setting on marketcube platform

  As a marketcube user
  I want to fetch product form setting on marketcube platform

Scenario: User fetches product form setting as a seller
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting product form setting endpoint with valid token
  Then User should get product form setting status as ok in response
  When User fetches product form setting data from the database
  Then User should have same product form setting data as data from the database

Scenario: User fetches product form setting as a vendor
  When User is hitting login endpoint to login as a vendor
  Then User should get login status as ok in response
  When User is hitting product form setting endpoint with valid token
  Then User should get product form setting status as ok in response
  When User fetches product form setting data from the database
  Then User should have same product form setting data as data from the database

Scenario: User is trying to fetch product form setting as an admin
  When User is hitting login endpoint to login as a admin
  Then User should get login status as ok in response
  When User is hitting product form setting endpoint with valid token
  Then User should get product form setting error of unauthorized user in response

Scenario: User is trying to fetch product form setting with an invalid token
  When User is hitting product form setting endpoint with an invalid token
  Then User should product form setting error of invalid token provided in response
