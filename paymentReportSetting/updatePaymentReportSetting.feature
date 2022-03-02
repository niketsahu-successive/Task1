Feature: GQL: Allow seller to updating payment report setting on marketcube platform

  As a marketcube user
  I want to updating payment report setting on marketcube platform

  Scenario: User updates payment report setting by updating vendor payment status label
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with label value for vendor payment status
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by hiding vendor payment status column in csv and pdf
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with hide csv as true for vendor payment status
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint with hide pdf as true for vendor payment status
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by updating vendor paid date label
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with label value for vendor paid date
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the vendor paid date
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by hiding vendor paid date column in csv and pdf
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with hide csv as true for vendor paid date
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint with hide pdf as true for vendor paid date
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by updating seller commission label
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with label value for seller commission
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the seller commission
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by hiding seller commission column in csv and pdf
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with hide csv as true for seller commission
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint with hide pdf as true for seller commission
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User is trying to update payment report setting with same label name as input
    When User is hitting login endpoint to login as a seller
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with same label name as input
    Then User should get update payment report setting error of duplicate data found for label in response

  Scenario: User is trying to update payment report setting as a admin
    When User is hitting login endpoint to login as a admin
    Then User should get login status as ok in response
    When User is hitting update payment report setting endpoint with label value for vendor payment status
    Then User should get update payment report setting error of unauthorized user in response

  Scenario: User is trying to update payment report setting with an invalid token
    When User is hitting update payment report setting endpoint with an invalid token
    Then User should get update payment report setting error of invalid token provided in response
