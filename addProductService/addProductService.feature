@gql
Feature: GQL: Allow seller to add product service using form on marketcube platform

As a marketcube user
I want to add product service using form on marketcube platform

Scenario: User adds product service using form with all valid details as a operator
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with valid input
  Then User should get add product service status as ok in response

Scenario:User adds product service using form with all valid details as a vendor
  When User is hitting login endpoint to login as a vendor
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with valid input
  Then User should get add product service status as ok in response

Scenario:User adds product service using form with all valid details as a admin
  When User is hitting login endpoint to login as a admin
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with valid input
  Then User should get add product service status as ok in response
  
Scenario: User adds product service using form without type
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint without type
  Then User should get add product service status as ok in response

Scenario: User adds product service using form with invalid product id
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with invalid product id
  Then User should get add product service error of invalid product id in response

Scenario: User adds product service using form with invalid location id
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with invalid location id
  Then User should get add product service error of invalid location id in response

Scenario: User adds product service using form with value zero as input in capacity
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with value zero as input in capacity
  Then User should get add product service error of value should be greater than zero in response

Scenario: User adds product service using form with value zero as input in duration
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with value zero as input in duration
  Then User should get add product service error of value should be greater than zero in response

Scenario: User adds product service using form with input greater then 1440 in duration
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with input greater then 1440 in duration
  Then User should get add product service error of value should be smaller then 1440 in response

Scenario: User adds product service using form without frequency
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint without frequency
  Then User should get add product service status as ok in response

Scenario: User fetches adds product service settings with invalid token
  When User is hitting login endpoint to login as a seller
  Then User should get login status as ok in response
  When User is hitting add product information endpoint with valid input
  Then User should get add product information status as ok in response
  When User fetches location id from the database
  When User is hitting add product service endpoint with invalid token
  Then User should get product service setting error of invalid token in response
