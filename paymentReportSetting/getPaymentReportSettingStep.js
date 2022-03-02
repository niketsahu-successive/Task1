const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getPaymentReportSetting } = require("../../gqlQuery/paymentReportSetting/getPaymentReportSetting");

// data
const { paymentReportSettingData } = require("../../data/paymentReport/paymentReportSettingData");
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let paymentReportData;

When("User is hitting payment report setting endpoint with valid token", async () => {
  response = await I.sendMutation(getPaymentReportSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get payment report setting status as ok in response", () => {
  assert.equal(response.data.data.getPaymentReportSetting.status, loginData.statusOk);
});

When("User fetches payment report setting data from the database", async () => {
  const { _id, roles } = await baseHelper.getCurrentUser("roles { name }");
  const isSeller = (roles.name === paymentReportSettingData.seller)
  const query =  isSeller ? { sellerId: _id } : { vendorId: _id }
  const projection = { _id: 0, "report.payment": 1  };
  const collection =  isSeller ? collectionData.sellerSetting : collectionData.vendorSetting
  const { report: { payment = {} } } = await dbHelper.findOne(collection, query, projection);
  paymentReportData = {
    report:{
    sellerCommission   : payment ? (payment.sellerCommission || null) : null,
    vendorPaymentStatus: payment ? (payment.vendorPaymentStatus || null) : null,
    vendorPaidDate     : payment ? (payment.vendorPaidDate || null) : null,
    },
    updatedAt          : payment ? payment.updatedAt.toISOString() : null,
    };
  });

  Then("User should have same payment report setting data as data from the database", () => {
    assert.deepEqual(response.data.data.getPaymentReportSetting.data, paymentReportData);
  });

When("User is hitting payment report setting endpoint with an invalid token", async () => {
  response = await I.sendMutation(getPaymentReportSetting.query, {}, {}, { token: paymentReportSettingData.invalidString });
  });

  Then("User should get payment report setting error of unauthorized user in response", () => {
    assert.equal(response.data.data.getPaymentReportSetting.error, paymentReportSettingData.unauthorized);
  });

  Then("User should payment report setting error of invalid token provided in response", () => {
    assert.equal(response.data.data.getPaymentReportSetting.error, paymentReportSettingData.invalidToken);
  });
