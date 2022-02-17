const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getTaxSetting } = require("../../gqlQuery/taxSetting/getTaxSetting");

// data
const { associationData } = require("../../data/association/getAssociationData");
const { loginData } = require("../../data/login/loginData");
const {collectionData} = require("../../data/collection/collectionData");
const { getTaxSettingData} = require("../../data/taxSetting/getTaxSettingData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let taxSettingData;

When("User is hitting tax setting endpoint with valid token", async () => {
    response = await I.sendMutation(getTaxSetting.query, {}, {}, { token: loginData.token });
  });
  
  Then("User should get tax setting status as ok in response", () => {
    assert.equal(response.data.data.getTaxSetting.status, loginData.statusOk);
  });

  When("User fetches tax setting data from the database", async () => {
    const { _id: sellerId } = await baseHelper.getCurrentUser();
    const projection = { tax: 1 };
    const { tax = null } = await dbHelper.findOne(collectionData.sellerSetting, { sellerId }, projection);
    taxSettingData = {
        commission: tax.commission ? {
          updatedAt: tax.commission.updatedAt.toISOString(),
          value    : tax.commission.value,
        } : null,
        shipping: tax.shipping ? {
          updatedAt     : tax.shipping.updatedAt.toISOString(),
          isTaxInclusive: tax.shipping.isTaxInclusive,
          value         : tax.shipping.value,
        } : null,
      };
    });

  Then("User should have same tax setting data as data from the database", () => {
    assert.deepEqual(response.data.data.getTaxSetting.data, taxSettingData);
  });

  When("User is hitting tax setting endpoint with invalid token", async () => {
    response = await I.sendMutation(getTaxSetting.query, {}, {}, { token:getTaxSettingData.invalidToken });
  });
  
  Then("User should get tax setting error of invalid token in response", () => {
    assert.equal(response.data.data.getTaxSetting.error, getTaxSettingData.errorInvalidToken);
  });
  
  Then("User should get tax setting error of unauthorized user in response", () => {
    assert.equal(response.data.data.getTaxSetting.error, getTaxSettingData.unauthorizedError);
  });

  When("User is hitting tax setting endpoint with valid token", async () => {
    response = await I.sendMutation(getTaxSetting.query, {}, {}, { token: loginData.token });
  });
