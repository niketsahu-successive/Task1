const { assert} = require("chai");
const I = require("../../customSteps");

// query
const {getWholesaleSetting} = require("../../gqlQuery/wholesale/getWholesaleSetting");

// data
const { wholesaleData} = require("../../data/wholesale/getWholesaleSettingData");
const {loginData} = require("../../data/login/loginData");
const {collectionData} = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let wholesaleSettingData;

When("User is hitting wholesale setting endpoint with valid token", async () => {
  response = await I.sendMutation(getWholesaleSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get wholesale setting status as ok in response", () => {
  assert.equal(response.data.data.getWholesaleSetting.status, loginData.status);
});

When("User fetches wholesale setting data from the database", async () => {
  const { _id, introductorySeller } = await baseHelper.getCurrentUser("introductorySeller");
  const query = { sellerId: introductorySeller || _id };
  const projection = { _id: 0, "product.isWholesalePriceVisible": 1, "product.updatedAt": 1 };
  const { product } = await dbHelper.findOne(collectionData.sellerSetting, query, projection) || {};
  wholesaleSettingData = {
    isWholesalePriceVisible: product ? (product.isWholesalePriceVisible || false) : false,
    updatedAt              : product ? product.updatedAt.toISOString() : null,
    };
  });

Then("User should have same wholesale setting as wholesale setting data from the database", () => {
  assert.deepEqual(response.data.data.getWholesaleSetting.data, wholesaleSettingData);
});

When("User is hitting wholesale setting endpoint with invalid token", async () => {
  response = await I.sendMutation(getWholesaleSetting.query, {}, {}, {token: wholesaleData.error});
  });

Then("User should wholesale setting error of invalid token provided in response", () => {
  assert.equal(response.data.data.getWholesaleSetting.error, wholesaleData.invalidToken);
});

Then("User should get wholesale setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getWholesaleSetting.error, wholesaleData.unAuthorized);
});
