Feature: GQL: Allow seller to updating invoice label setting on marketcube platform

  As a marketcube user
  I want to updating invoice label setting on marketcube platform

  Background: Seller is getting logged into the system
    When User is hitting login endpoint with all valid details
    Then User should get login status as ok in response

  Scenario: User is updating invoice label setting with all valid input
    When User is hitting updating invoice label setting endpoint with all valid input
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting by hiding deliver label
    When User is hitting update invoice label setting endpoint with deliver to value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding discount label
    When User is hitting update invoice label setting endpoint with discount value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding fulfillby label
    When User is hitting update invoice label setting endpoint with fulfillby value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding orderPayout label
    When User is hitting update invoice label setting endpoint with orderPayout value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding orderTotal label
    When User is hitting update invoice label setting endpoint with orderTotal value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding price label
    When User is hitting update invoice label setting endpoint with price value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding product label
    When User is hitting update invoice label setting endpoint with product value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding purchaseFrom label
    When User is hitting update invoice label setting endpoint with purchaseFrom value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding quantity label
    When User is hitting update invoice label setting endpoint with quantity value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding sellerCommission label
    When User is hitting update invoice label setting endpoint with sellerCommission value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding shippingPayout label
    When User is hitting update invoice label setting endpoint with shippingPayout value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding shipping label
    When User is hitting update invoice label setting endpoint with shipping value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding sku label
    When User is hitting update invoice label setting endpoint with sku value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding status label
    When User is hitting update invoice label setting endpoint with status value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding subtotal label
    When User is hitting update invoice label setting endpoint with subtotal value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding tax label
    When User is hitting update invoice label setting endpoint with tax value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding total label
    When User is hitting update invoice label setting endpoint with total value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding totalDeduction label
    When User is hitting update invoice label setting endpoint with totalDeduction value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding totalShipping label
    When User is hitting update invoice label setting endpoint with totalShipping value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding totalTax label
    When User is hitting update invoice label setting endpoint with totalTax value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding vendorAmount label
    When User is hitting update invoice label setting endpoint with vendorAmount value as true
    Then User should get update invoice label setting status as ok in response

  Scenario:User updates invoice label setting by hiding totalVendorPayout label
    When User is hitting update invoice label setting endpoint with totalVendorPayout value as true
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the deliver to with a valid input in label
    When User is hitting update invoice label setting endpoint with deliver to with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the discount with a valid input in label
    When User is hitting update invoice label setting endpoint with discount with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the fulfillby with a valid input in label
    When User is hitting update invoice label setting endpoint with fulfillby with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the orderPayout with a valid input in label
    When User is hitting update invoice label setting endpoint with orderPayout with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the orderTotal with a valid input in label
    When User is hitting update invoice label setting endpoint with orderTotal with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the price with a valid input in label
    When User is hitting update invoice label setting endpoint with price with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the product with a valid input in label
    When User is hitting update invoice label setting endpoint with product with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the purchaseFrom with a valid input in label
    When User is hitting update invoice label setting endpoint with purchaseFrom with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the quantity with a valid input in label
    When User is hitting update invoice label setting endpoint with quantity with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the sellerCommission with a valid input in label
    When User is hitting update invoice label setting endpoint with sellerCommission with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the shippingPayout with a valid input in label
    When User is hitting update invoice label setting endpoint with shippingPayout with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the shipping with a valid input in label
    When User is hitting update invoice label setting endpoint with shipping with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the sku with a valid input in label
    When User is hitting update invoice label setting endpoint with sku with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the status with a valid input in label
    When User is hitting update invoice label setting endpoint with status with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the subtotal with a valid input in label
    When User is hitting update invoice label setting endpoint with subtotal with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the tax with a valid input in label
    When User is hitting update invoice label setting endpoint with tax with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the total with a valid input in label
    When User is hitting update invoice label setting endpoint with total with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the totalDeduction with a valid input in label
    When User is hitting update invoice label setting endpoint with totalDeduction with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the totalShipping with a valid input in label
    When User is hitting update invoice label setting endpoint with totalShipping with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the totalTax with a valid input in label
    When User is hitting update invoice label setting endpoint with totalTax with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the vendorAmount with a valid input in label
    When User is hitting update invoice label setting endpoint with vendorAmount with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting for the totalVendorPayout with a valid input in label
    When User is hitting update invoice label setting endpoint with vendorAmount with a valid input in label
    Then User should get update invoice label setting status as ok in response

  Scenario: User updates invoice label setting with same label name as input
    When User is hitting update invoice label setting endpoint with same label name as input
    Then User should get update invoice label setting error of Duplicate data found for label in response
    