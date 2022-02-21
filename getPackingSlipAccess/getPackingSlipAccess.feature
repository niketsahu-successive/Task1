Feature: GQL: Allow user to fetch packing slip access on marketcube platform

    As a marketcube user
    I want to fetch packing slip access on marketcube platform

  Scenario: User fetches packing slip access as a seller
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting packing slip access endpoint with valid token
    Then User should get packing slip access status as ok in response
    When User fetches packing slip access data from the database
    Then User should have same packing slip access data as data from the database

  Scenario: User fetches packing slip access as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting packing slip access endpoint with valid token
    Then User should get packing slip access status as ok in response
    When User fetches packing slip access data from the database
    Then User should have same packing slip access data as data from the database

  Scenario: User is trying to fetch packing slip access as an admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting packing slip access endpoint with valid token
    Then User should get packing slip access error of unauthorized user in response

  Scenario: User is trying to fetch packing slip access with an invalid token
    When User is hitting packing slip access endpoint with an invalid token
    Then User should packing slip access error of invalid token provided in response
