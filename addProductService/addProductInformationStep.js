/* eslint-disable no-undef */
const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { addProductInformation } = require("../../gqlQuery/addProduct/addProductInformation");

// data
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");
const { addProductData } = require("../../data/addProduct/addProductData");

// helper
const DbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;

When("User is hitting add product information endpoint with valid input", async () => {
  const input = addProductInformation.input({});
  response = await I.sendMutation(addProductInformation.query, input, {}, { token: loginData.token });
});

Then("User should get add product information status as ok in response", () => {
  assert.equal(response.data.data.addProductInformation.status, loginData.statusOk);
  addProductData.productId = response.data.data.addProductInformation.data;
});
