const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getOrderExportSetting } = require("../../gqlQuery/orderExportSetting/getOrderExportSetting");

// data
const { associationData } = require("../../data/association/getAssociationData");
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");
const { orderExportSettingData } = require("../../data/orderExportSetting/getOrderExportSettingData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let exportSettingData;

When("User is hitting order export setting endpoint with valid token", async () => {
    response = await I.sendMutation(getOrderExportSetting.query, {}, {}, { token: loginData.token });
  });
  
  Then("User should get order export setting status as ok in response", () => {
    assert.equal(response.data.data.getOrderExportSetting.status, loginData.statusOk);
  });

  When("User fetches order export setting data from the database", async () => {
    const { _id, roles } = await baseHelper.getCurrentUser("roles {name}");
    const  isSeller  = ( roles.name === orderExportSettingData.seller );
    const query  = isSeller ? { sellerId: _id } : { vendorId : _id};
    const projection1 = { "order.export": 1, updatedAt:1, _id: 0  };
    const collection = isSeller ?  collectionData.sellerSetting  : collectionData.vendorSetting ;
    const { order = null, updatedAt } = await dbHelper.findOne(collection,  query , projection1 );
    exportSettingData = {
    export : order ? (order.export || null) : null,
    updatedAt: updatedAt.toISOString(),  
  }
});

Then("User should have same order export setting data as data from the database", () => {
    assert.deepEqual(response.data.data.getOrderExportSetting.data, exportSettingData);
  });

When("User is hitting order export setting endpoint with invalid token", async () => {
    response = await I.sendMutation(getOrderExportSetting.query, {}, {}, { token:orderExportSettingData.invalidToken });
  });
  
Then("User should get order export setting error of invalid token in response", () => {
    assert.equal(response.data.data.getOrderExportSetting.error, orderExportSettingData.invalidTokenError);
  });

Then("User should get order export setting error of unauthorized user in response", () => {
    assert.equal(response.data.data.getOrderExportSetting.error, orderExportSettingData.unauthorizedError);
  });
