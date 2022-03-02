const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { paymentReportSetting } = require("../../gqlQuery/paymentReportSetting/updatePaymentReportSetting");

// data
const { loginData } = require("../../data/login/loginData");
const { paymentReportSettingData } = require("../../data/updatePaymentReport/paymentReportSettingData");
const { collectionData } = require("../../data/collection/collectionData");

const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let paymentRoportSettingData;
let tempReportSettindData;
let count = 0;

When('User is hitting update payment report setting endpoint with label value for vendor payment status', async () =>  {
  const input = paymentReportSetting.input({ vendorPaymentStatus: paymentReportSettingData.newLabel });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update payment report setting status as ok in response', () => {
  assert.equal(response.data.data.updatePaymentReportSetting.status, loginData.statusOk);
});

When('User is hitting update payment report setting endpoint to reset the payment report setting', async () => {
  const input = paymentReportSetting.input({});
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with hide csv as true for vendor payment status', async () => {
  const input = paymentReportSetting.input({ vendorPaymentStatusHideCsv:true });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with hide pdf as true for vendor payment status', async () => {
  const input = paymentReportSetting.input({ vendorPaymentStatusHidePdf: true });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with label value for vendor paid date', async () => {
  const input = paymentReportSetting.input({ vendorPaidDate: paymentReportSettingData.newLabel });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint to reset the vendor paid date', async () => {
  const input = paymentReportSetting.input({});
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with hide csv as true for vendor paid date', async () => {
  const input = paymentReportSetting.input({ vendorPaidDateHideCsv: true });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with hide pdf as true for vendor paid date', async () => {
  const input = paymentReportSetting.input({ vendorPaidDateHidePdf: true });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with label value for seller commission', async () => {
  const input = paymentReportSetting.input({ sellerCommissionLabel: paymentReportSettingData.newLabel });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint to reset the seller commission', async () => {
  const input = paymentReportSetting.input({});
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with hide csv as true for seller commission', async () => {
  const input = paymentReportSetting.input({ sellerCommissionHideCsv: true });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with hide pdf as true for seller commission', async () => {
  const input = paymentReportSetting.input({ sellerCommissionHidePdf: true });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update payment report setting endpoint with same label name as input', async () => {
  const input = paymentReportSetting.input({ vendorPaymentStatusLabel: paymentReportSettingData.sellerCommissionLabel });
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update payment report setting error of duplicate data found for label in response', () => {
  assert.equal(response.data.data.updatePaymentReportSetting.error, paymentReportSettingData.sameLabelName);
});

Then('User should get update payment report setting error of unauthorized user in response', () => {
  assert.equal(response.data.data.updatePaymentReportSetting.error, paymentReportSettingData.unauthorized);
});

When('User is hitting update payment report setting endpoint with an invalid token', async () => {
  response = await I.sendMutation(paymentReportSetting.query, {}, {}, { token: paymentReportSettingData.invalidString });;
});

Then('User should get update payment report setting error of invalid token provided in response', () => {
 assert.equal(response.data.data.updatePaymentReportSetting.error, paymentReportSettingData.invalidToken);
});

When('User is hitting update payment report setting endpoint to reset the payment report setting', async () =>  {
  const input = paymentReportSetting.input({});
  response = await I.sendMutation(paymentReportSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update payment report setting status as ok in response', () => {
  assert.equal(response.data.data.updatePaymentReportSetting.status, loginData.statusOk);
});

When('User fetches payment report data from the database', async () => {
  const { _id } = await baseHelper.getCurrentUser();
  const query = { vendorId: _id };
  const projection = { _id: 0, "report.payment": 1 };
  paymentRoportSettingData = await dbHelper.findOne(collectionData.vendorSetting, query, projection) || {};
  if(count === 0)
  tempReportSettindData = paymentRoportSettingData;
   count +=1;
});

Then('User should have same payment report data as data from the database', () => {
  assert.equal(paymentRoportSettingData, tempReportSettindData);
})
