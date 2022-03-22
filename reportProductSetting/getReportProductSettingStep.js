const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getProductReportSetting } = require("../../gqlQuery/productReportSetting/getProductReportSetting");

// data
const { productReportSettingData } = require("../../data/productReportSetting/getProductReportSettingData");
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let productReportData;

When("User is hitting product report setting endpoint with valid token", async () => {
  response = await I.sendMutation(getProductReportSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get product report setting status as ok in response", () => {
  assert.equal(response.data.data.getProductReportSetting.status, loginData.statusOk);
});

When("User fetches product report setting data from the database", async () => {
  const { _id, roles } = await baseHelper.getCurrentUser("roles {name}");
  const isSeller = (roles.name === productReportSettingData.seller)
  const query = isSeller ? { sellerId: _id} : { vendorId: _id }
  const projection = { _id: 0, "report.product": 1 };
  const collection = isSeller ? collectionData.sellerSetting : collectionData.vendorSetting
  const { report = {} } = await dbHelper.findOne(collection, query, projection);
  productReportData = {
    report: report.product ? {
      customerProductPrice: isSeller ? (report.product.customerProductPrice || null) : null,
      title               : report.product.title || null,
      sku                 : report.product.sku || null,
      markup              : isSeller ? (report.product.markup || null) : null,
      productCost         : isSeller ? (report.product.productCost || null) : null,
      productType         : report.product.productType || null,
      price               : report.product.price || null,
      vendor              : report.product.vendor || null,
      discount            : isSeller ? (report.product.discount || null) : null,
      tax                 : report.product.tax || null,
    } : null,
    updatedAt: report.product ? report.product.updatedAt.toISOString() : null,
  };
});

Then("User should have same product report setting data as data from the database", () => {
  assert.deepEqual(response.data.data.getProductReportSetting.data, productReportData);
});

When("User is hitting product report setting endpoint with an invalid token", async () => {
  response = await I.sendMutation(getProductReportSetting.query, {}, {}, { token: productReportSettingData.invalidString });
});

Then("User should get product report setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getProductReportSetting.error, productReportSettingData.unauthorized);
});

Then("User should product report setting error of invalid token provided in response", () => {
  assert.equal(response.data.data.getProductReportSetting.error, productReportSettingData.invalidToken);
});
