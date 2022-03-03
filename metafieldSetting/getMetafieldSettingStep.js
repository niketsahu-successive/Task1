const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getMetafieldSetting } = require("../../gqlQuery/metafield/getMetafieldSetting");

// data
const { metafieldSettingData } = require("../../data/metafield/metafieldSettingData");
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let metafieldData;

When("User is hitting metafield setting endpoint with valid token", async () => {
  response = await I.sendMutation(getMetafieldSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get metafield setting status as ok in response", () => {
  assert.equal(response.data.data.getMetafieldSetting.status, loginData.statusOk);
});

When("User fetches metafield setting data from the database", async () => {
  const { _id,introductorySeller } = await baseHelper.getCurrentUser("introductorySeller");
  const sellerId = introductorySeller || _id;
  const projection = { product: 1 };
  const { product = null } = await dbHelper.findOne(collectionData.sellerSetting, { sellerId }, projection);
  metafieldData = {
    metafield: product.metafield || null,
    updatedAt: product.updatedAt.toISOString() || null,
  }
});

Then("User should have same metafield setting data as data from the database", () => {
  assert.deepEqual(response.data.data.getMetafieldSetting.data, metafieldData);
});

When("User is hitting metafield setting endpoint with an invalid token", async () => {
  response = await I.sendMutation(getMetafieldSetting.query, {}, {}, { token: metafieldSettingData.invalidString });
});

Then("User should get metafield setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getMetafieldSetting.error, metafieldSettingData.unauthorized);
});

Then("User should get metafield setting error of invalid token provided in response", () => {
  assert.equal(response.data.data.getMetafieldSetting.error, metafieldSettingData.invalidToken);
});
