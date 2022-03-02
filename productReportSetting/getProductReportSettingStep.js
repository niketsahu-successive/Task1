const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getProductReportSetting } = require("../../gqlQuery/productReportSetting/getProductReportSetting");

// data
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");
const { productReportSettingData } = require("../../data/productReportSetting/getProductReportSettingData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let reportSettingData;

When("User is hitting product report setting endpoint with valid token", async () => {
    response = await I.sendMutation(getProductReportSetting.query, {}, {}, { token: loginData.token });
  });
  
  Then("User should get product report setting status as ok in response", () => {
    assert.equal(response.data.data.getProductReportSetting.status, loginData.statusOk);
  });

  When("User fetches product report setting data from the database", async () => {
    const { _id, roles } = await baseHelper.getCurrentUser("roles {name}");
    const  isSeller  = ( roles.name === productReportSettingData.seller );
    const query  = isSeller ? { sellerId: _id } : { vendorId : _id};
    const projection = { "report.product": 1, _id: 0 };
    const collection = isSeller ?  collectionData.sellerSetting  : collectionData.vendorSetting ;
    const { report: { product= {} } } = await dbHelper.findOne(collection, query, projection);
    reportSettingData = {
     report : {
      customerProductPrice: product ? (product.customerProductPrice || null) : null, 
      title: product ? (product.title || null) : null, 
      sku: product ? (product.sku || null) : null, 
      markup: product ? (product.markup || null) : null, 
      productCost: product ? (product.productCost || null) : null, 
      productType: product ? (product.productType|| null) : null, 
      price: product ? (product.price|| null) : null, 
      vendor: product ? (product.vendor|| null) : null, 
      discount: product ? (product.discount|| null) : null, 
      tax: product ? (product.tax|| null) : null, 
      },
     updatedAt: product ? product.updatedAt.toISOString() : null,
  }
});

 Then("User should have same product report setting data as data from the database", () => {
   assert.deepEqual(response.data.data.getProductReportSetting.data, reportSettingData);
 });

When("User is hitting product report setting endpoint with invalid token", async () => {
  response = await I.sendMutation(getProductReportSetting.query, {}, {}, { token: productReportSettingData.invalidToken });
});
  
  Then("User should get product report setting error of invalid token in response", () => {
    assert.equal(response.data.data.getProductReportSetting.error, productReportSettingData.invalidTokenError);
  });

  Then("User should get product report setting error of unauthorized user in response", () => {
    assert.equal(response.data.data.getProductReportSetting.error, productReportSettingData.unauthorizedError);
  });
