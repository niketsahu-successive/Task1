Feature: GQL: Allow vendor to update payment report setting on marketcube platform

  As a marketcube user
  I want to update payment report setting on marketcube platform

  Background: Vendor is getting logged into the system
    When User is hitting login endpoint to login as a vendor
    Then User should get login status as ok in response

  Scenario: User updates payment report setting by updating vendor payment status label
    When User is hitting update payment report setting endpoint with label value for vendor payment status
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by hiding vendor payment status column in csv and pdf
    When User is hitting update payment report setting endpoint with hide csv as true for vendor payment status
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint with hide pdf as true for vendor payment status
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by updating vendor paid date label
    When User is hitting update payment report setting endpoint with label value for vendor paid date
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the vendor paid date
    Then User should get update payment report setting status as ok in response

  Scenario: User updates payment report setting by hiding vendor paid date column in csv and pdf
    When User is hitting update payment report setting endpoint with hide csv as true for vendor paid date
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint with hide pdf as true for vendor paid date
    Then User should get update payment report setting status as ok in response
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response

  Scenario: User is trying to update payment report setting by updating seller commission label
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response
    When User fetches payment report data from the database
    When User is hitting update payment report setting endpoint with label value for seller commission
    Then User should get update payment report setting status as ok in response
    When User fetches payment report data from the database
    Then User should have same payment report data as data from the database 

  Scenario: User is trying to update payment report setting by hiding seller commission column in csv
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response
    When User fetches payment report data from the database
    When User is hitting update payment report setting endpoint with hide csv as true for seller commission
    Then User should get update payment report setting status as ok in response
    When User fetches payment report data from the database
    Then User should have same payment report data as data from the database

  Scenario: User is trying to update payment report setting by hiding seller commission column in pdf
    When User is hitting update payment report setting endpoint to reset the payment report setting
    Then User should get update payment report setting status as ok in response
    When User fetches payment report data from the database
    When User is hitting update payment report setting endpoint with hide pdf as true for seller commission
    Then User should get update payment report setting status as ok in response
    When User fetches payment report data from the database
    Then User should have same payment report data as data from the database
