const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getOrderReportSetting } = require("../../gqlQuery/orderReportSetting/getOrderReportSetting");

// data
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");
const { orderSettingData } = require("../../data/orderReportSetting/getOrderReportSettingData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let reportSettingData;

When("User is hitting order report setting endpoint with valid token", async () => {
  response = await I.sendMutation(getOrderReportSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get order report setting status as ok in response", () => {
  assert.equal(response.data.data.getOrderReportSetting.status, loginData.statusOk);
});

When("User fetches order report setting data from the database", async () => {
  const { _id, roles } = await baseHelper.getCurrentUser("roles {name}");
  const isSeller = ( roles.name === orderSettingData.seller );
  const query = isSeller ? { sellerId: _id } : { vendorId: _id };
  const projection = { "report.order": 1, _id: 0 };
  const collection = isSeller ? collectionData.sellerSetting : collectionData.vendorSetting;
  const { report = {} } = await dbHelper.findOne(collection, query, projection);
  reportSettingData = {
    report: report.order ? {
      orderNumber      : report.order.orderNumber || null,
      lineItemId       : report.order.lineItemId || null,
      orderStatus      : report.order.orderStatus || null,
      vendorAmount     : report.order.vendorAmount || null,
      createdAt        : report.order.createdAt || null,
      fulfillmentStatus: report.order.fulfillmentStatus || null,
      grossSales       : report.order.grossSales || null ,
      grossProfit      : report.order.grossProfit || null,
      quantity         : report.order.quantity || null ,
      returns          : report.order.returns || null,
      shipping         : report.order.shipping || null,
      totalSalesPrice  : report.order.totalSalesPrice || null,
    } : null,
    updatedAt: report.order ? report.order.updatedAt.toISOString() : null,
  }
});

Then("User should have same order report setting data as data from the database", () => {
  assert.deepEqual(response.data.data.getOrderReportSetting.data, reportSettingData);
});

When("User is hitting order report setting endpoint with invalid token", async () => {
  response = await I.sendMutation(getOrderReportSetting.query, {}, {}, { token: orderSettingData.invalidToken });
});

Then("User should get order report setting error of invalid token in response", () => {
  assert.equal(response.data.data.getOrderReportSetting.error, orderSettingData.invalidTokenError);
});

Then("User should get order report setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getOrderReportSetting.error, orderSettingData.unauthorizedError);
});
