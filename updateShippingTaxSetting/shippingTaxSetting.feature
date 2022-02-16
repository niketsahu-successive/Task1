@gql
Feature:GQL: Allow seller to update shipping tax settings on marketcube platform

  Background: Seller logins to marketcube with valid credentials
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response

  Scenario: User update shipping tax setting with tax inclusive input as true
    When User is hitting update shipping tax setting endpoint with tax inclusive input as true
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with tax inclusive input as false and valid input in value
    When User is hitting update shipping tax setting endpoint with tax inclusive input as false valid input in value
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with decimal input in value
    When User is hitting update shipping tax setting endpoint with decimal input in value
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with input in value upto two decimal places
    When User is hitting update shipping tax setting endpoint with input in value upto two decimal places
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with input in value upto three decimal places
    When User is hitting update shipping tax setting endpoint with input in value upto three decimal places
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with tax inclusive input as false with value null
    When User is hitting update shipping tax setting endpoint with tax inclusive input as false with value null
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with tax inclusive as null
    When User is hitting update shipping tax setting endpoint with tax inclusive as null
    Then User should get update shipping tax setting status as ok in responce

  Scenario: User update shipping tax setting with input in value more than three decimal places
    When User is hitting update shipping tax setting endpoint with input in value more than three decimal places
    Then User should get update shipping tax setting error of value upto three decimal places is allowed in responce

  Scenario: User update shipping tax setting with input in value more then 100
    When User is hitting update shipping tax setting endpoint with input in value more then 100
    Then User should get update shipping tax setting error of value is less than 100 in responce

  Scenario: User is trying to update shipping tax setting as a vendor
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response
    When User is hitting update shipping tax setting endpoint with tax inclusive input as true
    Then User should get update shipping tax setting error of you are not authorized in responce
