Feature: GQL: Allow seller to update wholesale setting on marketcube platform

  As a marketcube user
  I want to update wholesale setting on marketcube platform

  Background: Seller logins to marketcube with valid credentials
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response

  Scenario: Seller enables the update wholesale setting for wholesale price visible as true
    When User is hitting update wholesale setting endpoint for wholesale price visible as false
    When User is hitting update wholesale setting endpoint for Wholesale price visible as true
    Then User should get customer status as ok in response

  Scenario: Seller is trying to enables the update wholesale setting which is already enables
    When User is hitting update wholesale setting endpoint for wholesale price visible as false
    When User is hitting update wholesale setting endpoint for wholesale price visible as true
    Then User should get customer status as ok in response
    When User is hitting update wholesale setting endpoint for wholesale price visible value as true
    Then User should get update wholesale setting error wholesale price setting is already enables in response

  Scenario:  Seller disable the update wholesale setting for wholesale price visible as false
    When User is hitting update wholesale setting endpoint for wholesale price visible as false
    Then User should get customer status as ok in response

  Scenario: Seller is trying to disable the update wholesale setting which is already disable
    When User is hitting update wholesale setting endpoint for wholesale price visible as true
    When User is hitting update wholesale setting endpoint for wholesale price visible value as false
    Then User should get customer status as ok in response
    When User is hitting update wholesale setting endpoint for wholesale price visible value as false
    Then User should get update wholesale setting error wholesale price setting is already disabled in response

  Scenario:Vendor is trying to update wholesale setting
    When User is hitting login endpoint to login as vendor
    Then User should get login status as ok in response
    When User is hitting update wholesale setting endpoint with value as true
    Then User should get update wholesale setting error of You are not authorized to perform this action in response
