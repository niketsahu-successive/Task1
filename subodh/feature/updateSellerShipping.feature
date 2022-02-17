Feature: GQL: Allow seller to update seller shipping setting on marketcube platform

  As a marketcube user
  I want to update seller shipping setting on marketcube platform

Background: Seller logins to marketcube with valid credentials
  When User is hitting login endpoint with all valid details
  Then User should get login status as ok in response

Scenario: User enables the seller shipping setting for exclude shipping amount value as true
  When User is hitting seller shipping setting for exclude shipping amount value as true
  Then User should get seller shipping setting status as ok in response

Scenario: User disable the seller shipping setting for exclude shipping amount value as false
  When User is hitting seller shipping setting for exclude shipping amount value as false
  Then User should get seller shipping setting status as ok in response

 Scenario: User provide null value for exclude shipping amount in seller shipping setting
  When User is hitting seller shipping setting for exclude shipping amount value as null
  Then User should get seller shipping setting status as ok in response

Scenario:Vendor is trying to enables the seller shipping setting 
  When User is hitting login endpoint to login as vendor
  Then User should get login status as ok in response
  When User is hitting seller shipping setting for exclude shipping amount value as true
  Then User should get seller shipping setting error of You are not authorized to perform this action in response
