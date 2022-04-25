/* eslint-disable no-undef */
const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { addProductService } = require("../../gqlQuery/addProductService/addProductservice");

// data
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");
const { addServiceData } = require("../../data/addProductService/addProductServiceData");
const { addProductData } = require("../../data/addProduct/addProductData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;

When("User fetches location id from the database", async () => {
  const { _id: userId } = await baseHelper.getCurrentUser();
  const { _id } = await dbHelper.findOne(collectionData.address, { userId }, {});
  locationIdValue = baseHelper.mongoIdAsString(_id);
});

When("User is hitting add product service endpoint with valid input", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ]});
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

Then("User should get add product service status as ok in response", () => {
  assert.equal(response.data.data.addProductService.status, loginData.statusOk);
  addServiceData.serviceId = response.data.data.addProductService.data._id;
});

When("User is hitting add product service endpoint with invalid product id", async () => {
  const input = addProductService.input({ productId: addServiceData.invalidProductId, locationId: [ locationIdValue ] });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

Then("User should get add product service error of invalid product id in response", () => {
  assert.equal(response.data.data.addProductService.error, addServiceData.productIdErrorMessage);
});

When("User is hitting add product service endpoint with invalid location id", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ addServiceData.invalidLocationId ] });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

Then("User should get add product service error of invalid location id in response", () => {
  assert.equal(response.data.data.addProductService.error, addServiceData.invalidLocationId);
});

When("User is hitting add product service endpoint with value zero as input in capacity", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ], capacity: addServiceData.invalidValue });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

Then("User should get add product service error of value should be greater than zero in response", () => {
  assert.equal(response.data.data.addProductService.error, addServiceData.zeroInput);
});

When("User is hitting add product service endpoint with value zero as input in duration", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ], duration: addServiceData.invalidValue });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

When("User is hitting add product service endpoint with input greater then 1440 in duration", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ], duration: addServiceData.durationInvalidValue });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

Then("User should get add product service error of value should be smaller then 1440 in response", () => {
  assert.equal(response.data.data.addProductService.error, addServiceData.invalidDuration);
});

When("User is hitting add product service endpoint without frequency", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ], frequency: null });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

When("User is hitting add product service endpoint without type", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ], type: "" });
  response = await I.sendMutation(addProductService.query, input, {}, { token: loginData.token });
});

When("User is hitting add product service endpoint with invalid token", async () => {
  const input = addProductService.input({ productId: addProductData.productId, locationId: [ locationIdValue ] });
  response = await I.sendMutation(addProductService.query, input, {}, { token: addServiceData.invalidProductId });
});

Then("User should get product service setting error of invalid token in response", () => {
  assert.equal(response.data.data.addProductService.error, addServiceData.invalidTokenMessage);
});
