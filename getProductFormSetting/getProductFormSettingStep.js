const { assert} = require("chai");
const I = require("../../customSteps");

// query
const {getProductFormSetting} = require("../../gqlQuery/productForm/getProductFormSetting");

// data
const { productFormData} = require("../../data/productForm/getProductFormSettingData");
const {loginData} = require("../../data/login/loginData");
const {collectionData} = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let productSettingData;

When("User is hitting product form setting endpoint with valid token", async () => {
  response = await I.sendMutation(getProductFormSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get product form setting status as ok in response", () => {
  assert.equal(response.data.data.getProductFormSetting.status, loginData.statusOk);
});

When("User fetches product form setting data from the database", async () => {
  const { _id,roles } = await baseHelper.getCurrentUser("roles {name}");
  const isSeller = (roles.name === productFormData.seller)
  const query =  isSeller ? { sellerId: _id } : { vendorId: _id }
  const projection = { _id: 0, productForm: 1  };
  const collection =  isSeller ? collectionData.sellerSetting : collectionData.vendorSetting
  const { productForm = null } = await dbHelper.findOne(collection, query, projection);
  productSettingData = {
    barcode       : productForm ? (productForm.barcode || null) : null,
    catalog       : productForm ? (productForm.catalog || null) : null,
    comparePrice  : productForm ? (productForm.comparePrice || null) : null,
    createdAt     : productForm ? productForm.createdAt.toISOString() : null,
    description   : productForm ? (productForm.description || null) : null,
    discount      : productForm ? (productForm.discount || null) : null, 
    inventory     : productForm ? (productForm.inventory || null) : null,
    markup        : productForm ? (productForm.markup || null) : null,
    physical      : productForm ? (productForm.physical || null) : null,
    price         : productForm ? (productForm.price || null) : null,
    productType   : productForm ? (productForm.productType || null) : null,
    quantity      : productForm ? (productForm.quantity || null) : null,
    sku           : productForm ? (productForm.sku || null) : null,
    tags          : productForm ? (productForm.tags || null) : null,
    title         : productForm ? (productForm.title || null) : null,
    wholesalePrice: productForm ? (productForm.wholesalePrice || null) : null,
    updatedAt     : productForm ? productForm.updatedAt.toISOString() : null,
    vendor        : productForm ? (productForm.vendor || null) : null,
  }
});
  
Then("User should have same product form setting data as data from the database", () => {
  assert.deepEqual(response.data.data.getProductFormSetting.data, productSettingData);
});

Then("User should get product form setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getProductFormSetting.error, productFormData.unAuthorized);
});    

When("User is hitting product form setting endpoint with an invalid token", async () => {
  response = await I.sendMutation(getProductFormSetting.query, {}, {}, { token: productFormData.invalidString });
});
        
Then("User should product form setting error of invalid token provided in response", () => {
  assert.equal(response.data.data.getProductFormSetting.error, productFormData.invalidToken);
});
     