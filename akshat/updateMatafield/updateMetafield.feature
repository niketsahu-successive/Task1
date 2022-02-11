@gql
Feature:GQL: Allow seller to update metafield settings on marketcube platform

    Background: Seller logins to marketcube with valid credentials
        When User is hitting login endpoint with all valid details
        Then User should get login status as ok in response

    Scenario: User update metafield setting with content type input as string
        When User is hitting update metafield setting endpoint with content type input as string
        Then User should get update metafield setting status as ok in responce

    Scenario: User update metafield setting with content type input as measurement
        When User is hitting update metafield setting endpoint with content type input as measurement
        Then User should get update metafield setting status as ok in responce

    Scenario: User update metafield setting with content type input as number
        When User is hitting update metafield setting endpoint with content type input as number
        Then User should get update metafield setting status as ok in responce

    Scenario: User updates metafield setting with multiple rows
        When User is hitting update metafield setting endpoint with different input in key and namespace
        Then User should get update metafield setting status as ok in responce

    Scenario: User update metafield setting with content type number value upto two decimal places
        When User is hitting update metafield setting endpoint with content type number value upto two decimal places
        Then User should get update metafield setting status as ok in responce

    Scenario: User update metafield setting with invalid input in content type
        When User is hitting update metafield setting endpoint with invalid input in content type
        Then User should get update metafield setting error of invalid value provided in responce

    Scenario: User update metafield setting with content type text value upto two decimal places
        When User is hitting update metafield setting endpoint with content type text and value upto two decimal places
        Then User should get update metafield setting error of invalid value provided for string in responce

    Scenario: User update metafield setting with content type measurement value upto two decimal places
        When User is hitting update metafield setting endpoint with content type measurement and value upto two decimal places
        Then User should get update metafield setting error of invalid value provided for measurement in responce

    Scenario: User update metafield setting with content type number value upto three decimal places
        When User is hitting update metafield setting endpoint with content type number and value upto three decimal places
        Then User should get update metafield setting error of number value allowed upto two decimal place in responce

    Scenario: User update metafield setting without content type
        When User is hitting update metafield setting endpoint without content type
        Then User should get update metafield setting error of content type is required in responce

    Scenario: User update metafield setting without key
        When User is hitting update metafield setting endpoint without key
        Then User should get update metafield setting error of key is required in responce

    Scenario: User update metafield setting without namespace
        When User is hitting update metafield setting endpoint without namespace 
        Then User should get update metafield setting error of namespace is required in responce

    Scenario: User update metafield setting without value
        When User is hitting update metafield setting endpoint without value
        Then User should get update metafield setting error of value is required in responce

    Scenario: User update metafield setting without name
        When User is hitting update metafield setting endpoint without name
        Then User should get update metafield setting error of name is required in responce

    Scenario: User update metafield setting with invalid input in value for content type as text
        When User is hitting update metafield setting endpoint with content type text and invalid input in value
        Then User should get update metafield setting error of invalid value provided for string in responce

    Scenario: User update metafield setting with invalid input in value for content type as number
        When User is hitting update metafield setting endpoint with content type number and invalid input in value
        Then User should get update metafield setting error of invalid value provided for number in responce

    Scenario: User update metafield setting with invalid input in value for content type as measurement
        When User is hitting update metafield setting endpoint with content type measurement and invalid input in value
        Then User should get update metafield setting error of invalid value provided for measurement in responce

    Scenario: User add multiple metafield with duplicate key
        When User is hitting update metafield setting endpoint with duplicate key value
        Then User should get update metafield setting error of duplicate key provided in responce

    Scenario: User add multiple metafield with duplicate namespace
        When User is hitting update metafield setting endpoint with duplicate namespace value
        Then User should get update metafield setting error of duplicate namespace provided in responce

# for vendor
Scenario: User is trying to update metafield setting as a vendo
        When User is hitting login endpoint to login as a vendor
        Then User should get login status as ok in response
        When User is hitting update metafield setting endpoint with content type input as string
        Then User should get update metafield setting error of unauthorized user in responce 
