@gql
Feature:GQL: This feature allow User to update packing slip label settings as a seller

      Background: User logins to marketcube with valid credentials
            When User is hitting login endpoint with all valid details
            Then User should get login status as ok in response

      Scenario: User update packing slip label setting with valid input
            When User is hitting update packing slip label setting endpoint with valid input
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable deliver to
            When User is hitting update packing slip label setting endpoint by enable ishide for deliverto
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable discount
            When User is hitting update packing slip label setting endpoint by enable ishide for discount
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable order fulfilled
            When User is hitting update packing slip label setting endpoint by enable ishide for order fulfilled
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable price
            When User is hitting update packing slip label setting endpoint by enable ishide for price
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable product
            When User is hitting update packing slip label setting endpoint by enable ishide for product
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable purchased from
            When User is hitting update packing slip label setting endpoint by enable ishide for purchased from
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable quantity
            When User is hitting update packing slip label setting endpoint by enable ishide for quatity
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable shipping
            When User is hitting update packing slip label setting endpoint by enable ishide for shipping
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable sku
            When User is hitting update packing slip label setting endpoint by enable ishide for sku
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable sub total
            When User is hitting update packing slip label setting endpoint by enable ishide for sub total
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enabling total discount
            When User is hitting update packing slip label setting endpoint by enabling ishide for total discount
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable tax
            When User is hitting update packing slip label setting endpoint by enable ishide for tax
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable total
            When User is hitting update packing slip label setting endpoint by enable ishide for total
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable total shipping
            When User is hitting update packing slip label setting endpoint by enable ishide for total shipping
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by enable total tax
            When User is hitting update packing slip label setting endpoint by enable ishide for total tax
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for deliverTo
            When User is hitting update packing slip label setting endpoint with valid input in label for deliverTo
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for discount
            When User is hitting update packing slip label setting endpoint with valid input in label for discount
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for orderFulfilledBy
            When User is hitting update packing slip label setting endpoint with valid input in label for orderFulfilledBy
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for price
            When User is hitting update packing slip label setting endpoint with valid input in label for price
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for product
            When User is hitting update packing slip label setting endpoint with valid input in label for product
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for purchasedFrom
            When User is hitting update packing slip label setting endpoint with valid input in label for purchasedFrom
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for quantity
            When User is hitting update packing slip label setting endpoint with valid input in label for quantity
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for shipping
            When User is hitting update packing slip label setting endpoint with valid input in label for shipping
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for sku
            When User is hitting update packing slip label setting endpoint with valid input in label for sku
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for subTotal
            When User is hitting update packing slip label setting endpoint with valid input in label for subTotal
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for totalDiscount
            When User is hitting update packing slip label setting endpoint with valid input in label for totalDiscount
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for tax
            When User is hitting update packing slip label setting endpoint with valid input in label for tax
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for total
            When User is hitting update packing slip label setting endpoint with valid input in label for total
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for totalShipping
            When User is hitting update packing slip label setting endpoint with valid input in label for totalShipping
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting with valid input in label for totalTax
            When User is hitting update packing slip label setting endpoint with valid input in label for totalTax
            Then User should get update packing slip label setting status as ok in responce

      Scenario: User update packing slip label setting by providing duplicate values in label
            When User is hitting update packing slip label setting endpoint by providing duplicate values in label
            Then User should get an error duplicate date found in responce

      Scenario: User is trying to update packing slip label setting as a vendor
            When User is hitting login endpoint to login as a vendor
            Then User should get login status as ok in response
            When User is hitting update packing slip label setting endpoint with valid input
            Then User should get packing slip label setting error of unauthorized user in responce
