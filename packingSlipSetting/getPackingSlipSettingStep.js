const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getPackingSlipSetting } = require("../../gqlQuery/packingSlipSetting/getPackingSlipSetting");

// data
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");
const { packingSlipSettingData } = require("../../data/packingSlipLabel/packingSlipData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let packingSettingData;

When("User is hitting packing slip setting endpoint with valid token", async () => {
  response = await I.sendMutation(getPackingSlipSetting.query, {}, {}, { token: loginData.token });
});
  
Then("User should get packing slip setting status as ok in response", () => {
  assert.equal(response.data.data.getPackingSlipSetting.status, loginData.statusOk);
});

  When("User fetches packing slip setting data from the database", async () => {
    const { _id, introductorySeller } = await baseHelper.getCurrentUser("introductorySeller");
    const sellerId  = introductorySeller || _id;
    const projection = { "order.packingSlip.manage": 1, _id: 0 };
    const { order = {} } = await dbHelper.findOne(collectionData.sellerSetting, { sellerId }, projection);
    const { manage = null } = order.packingSlip || {} ;
    packingSettingData = {
      deliveredTo     : manage ? (manage.deliveredTo || null) : null, 
      discount        : manage ? (manage.discount || null) : null, 
      orderFulfilledBy: manage ? (manage.orderFulfilledBy || null) : null, 
      price           : manage ? (manage.price || null) : null, 
      product         : manage ? (manage.product || null) : null, 
      purchasedFrom   : manage ? (manage.purchasedFrom || null) : null, 
      quantity        : manage ? (manage.quantity || null) : null, 
      shipping        : manage ? (manage.shipping || null) : null, 
      sku             : manage ? (manage.sku || null) : null, 
      subTotal        : manage ? (manage.subTotal || null) : null, 
      tax             : manage ?  (manage.tax || null) : null, 
      total           : manage ?  (manage.total || null) : null, 
      totalDiscount   : manage ? (manage.totalDiscount || null) : null, 
      totalShipping   : manage ? (manage.totalShipping || null) : null, 
      totalTax        : manage ? (manage.totalTax || null) : null, 
      updatedAt       : manage ? manage.updatedAt.toISOString() : null,
      createdAt       : manage ? manage.updatedAt.toISOString() : null,
   }
 });

Then("User should have same packing slip setting data as data from the database", () => {
  assert.deepEqual(response.data.data.getPackingSlipSetting.data, packingSettingData);
});
  
Then("User should get packing slip setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getPackingSlipSetting.error, packingSlipSettingData.vendorError);
});  

When("User is hitting packing slip setting endpoint with invalid token", async () => {
  response = await I.sendMutation(getPackingSlipSetting.query, {}, {}, { token: packingSlipSettingData.invalidToken });
});

Then("User should get packing slip setting error of invalid token in response", () => {
  assert.equal(response.data.data.getPackingSlipSetting.error, packingSlipSettingData.invalidTokenError);
}); 
