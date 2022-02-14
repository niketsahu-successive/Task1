@gql
Feature:GQL: Allow seller to update order settings on marketcube platform

    Background: Seller logins to marketcube with valid credentials
        When User is hitting login endpoint with all valid details
        Then User should get login status as ok in response

    Scenario: User update order setting with accept order and fulfill order input as true
        When User is hitting update order setting endpoint with accept order and fulfill order input as true
        Then User should get update order setting status as ok in responce

    Scenario: User update order setting with accept order and fulfill order input as false
        When User is hitting update order setting endpoint with accept order and fulfill order input as false
        Then User should get update order setting status as ok in responce

    Scenario: User update order setting with accept order input as true and fulfill order input as false
        When User is hitting update order setting endpoint with accept order input as true and fulfill order input as false
        Then User should get update order setting status as ok in responce

    Scenario: User update order setting with accept order input as false and fulfill order input as true
        When User is hitting update order setting endpoint with accept order input as false and fulfill order input as true
        Then User should get update order setting error of enable auto accept first in responce

    Scenario: User is trying to update order setting as a vendor
        When User is hitting login endpoint to login as a vendor
        Then User should get login status as ok in response
        When User is hitting update order setting endpoint with accept order and fulfill order input as true
        Then User should get update order setting status as ok in responce

    Scenario: User update order setting with accept order and fulfill order input as false as a vendor
        When User is hitting login endpoint to login as a vendor
        Then User should get login status as ok in response
        When User is hitting update order setting endpoint with accept order and fulfill order input as false
        Then User should get update order setting status as ok in responce

    Scenario: User update order setting with accept order input as true and fulfill order input as false as a vendor
        When User is hitting login endpoint to login as a vendor
        Then User should get login status as ok in response
        When User is hitting update order setting endpoint with accept order input as true and fulfill order input as false
        Then User should get update order setting status as ok in responce

    Scenario: User update order setting with accept order input as false and fulfill order input as true as a vendor
        When User is hitting login endpoint to login as a vendor
        Then User should get login status as ok in response
        When User is hitting update order setting endpoint with accept order input as false and fulfill order input as true
        Then User should get update order setting error of enable auto accept first in responce
  