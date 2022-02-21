const { assert} = require("chai");
const I = require("../../customSteps");

// query
const { getPackingSlipAccess } = require("../../gqlQuery/packingSlip/getPackingSlipAccess");

// data
const { packingSlipAccessData } = require("../../data/packingSlip/getPackingSlipData");
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let packingSlipData;

When("User is hitting packing slip access endpoint with valid token", async () => {
  response = await I.sendMutation(getPackingSlipAccess.query, {}, {}, { token: loginData.token });
});

Then("User should get packing slip access status as ok in response", () => {
  assert.equal(response.data.data.getPackingSlipAccess.status, loginData.statusOk);
});

When("User fetches packing slip access data from the database", async () => {
  const { _id, introductorySeller } = await baseHelper.getCurrentUser("introductorySeller");
  const sellerId =  introductorySeller || _id ;
  const projection = { "order.packingSlip.access":1 };
  const { order = {} } = await dbHelper.findOne(collectionData.sellerSetting, { sellerId }, projection );
  packingSlipData = {
    isEnabled              : order.packingSlip ? (order.packingSlip.access.isEnabled || false) : null,
    updatedAt              : order.packingSlip ? order.packingSlip.access.updatedAt.toISOString() : null,
    isAllVendor            : order.packingSlip ? (order.packingSlip.access.isAllVendor || false) : null,
    isFulfilled            : order.packingSlip ? (order.packingSlip.access.isFulfilled || true) : null,
    selectedVendor         : order.packingSlip ? (order.packingSlip.access.selectedVendor || null) : null
    };
});

Then("User should have same packing slip access data as data from the database", () => {
  assert.deepEqual(response.data.data.getPackingSlipAccess.data, packingSlipData);
});

Then("User should get packing slip access error of unauthorized user in response", () => {
  assert.equal(response.data.data.getPackingSlipAccess.error, packingSlipAccessData.unAuthorized);
});

When("User is hitting packing slip access endpoint with an invalid token", async () => {
  response = await I.sendMutation(getPackingSlipAccess.query, {}, {}, {token: packingSlipAccessData.invalidString});
});
  
Then("User should packing slip access error of invalid token provided in response", () => {
  assert.equal(response.data.data.getPackingSlipAccess.error, packingSlipAccessData.invalidToken);
});
