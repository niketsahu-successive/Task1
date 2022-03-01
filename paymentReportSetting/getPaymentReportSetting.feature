Feature: GQL: Allow user to fetch payment report setting on marketcube platform

  As a marketcube user
  I want to fetch payment report setting  on marketcube platform

Scenario: User fetches payment report setting as a seller
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting payment report setting endpoint with valid token
  Then User should get payment report setting status as ok in response
  When User fetches payment report setting data from the database
  Then User should have same payment report setting data as data from the database

Scenario: User fetches payment report setting as a vendor
  When User is hitting login endpoint to login as a vendor
  Then User should get login status as ok in response
  When User is hitting payment report setting endpoint with valid token
  Then User should get payment report setting status as ok in response
  When User fetches payment report setting data from the database
  Then User should have same payment report setting data as data from the database

Scenario: User is trying to fetch payment report setting as an admin
  When User is hitting login endpoint to login as a admin
  Then User should get login status as ok in response
  When User is hitting payment report setting endpoint with valid token
  Then User should get payment report setting error of You are not authorized to perform this action in response

Scenario: User is trying to fetch payment report setting with an invalid token
  When User is hitting payment report setting endpoint with an invalid token
  Then User should payment report setting error of invalid token provided in response
