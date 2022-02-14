const { assert } = require("chai");
const I = require("../../customSteps");

//query
const{packingSlipSetting} = require("../../gqlQuery/packingSlipLabel/packingSlipLabel");

//data
const {loginData} = require("../../data/login/loginData");
const {packingSlipSettingData} = require("../../data/packingSlipLabel/packingSlipData");

When('User is hitting update packing slip label setting endpoint with valid input', async () => {
  const input = packingSlipSetting.input({})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

Then('User should get update packing slip label setting status as ok in responce',  () => {
  assert.equal(response.data.data.updatePackingSlipLabelSetting.status, loginData.statusOk);
});

When('User is hitting update packing slip label setting endpoint by enable ishide for deliverto',async () => {
  const input = packingSlipSetting.input({deliveredToIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for discount',async () => {
  const input = packingSlipSetting.input({discountIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for order fulfilled',async () => {
  const input = packingSlipSetting.input({orderFulfilledByIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for price',async () => {
  const input = packingSlipSetting.input({priceIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for product',async () => {
  const input = packingSlipSetting.input({productIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for purchased from', async () => {
  const input = packingSlipSetting.input({purchasedFromIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for quatity', async () => {
  const input = packingSlipSetting.input({quantityIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for shipping',async () => {
  const input = packingSlipSetting.input({shippingIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for sku',async () => {
  const input = packingSlipSetting.input({skuIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for sub total', async () => {
  const input = packingSlipSetting.input({subTotalIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enabling ishide for total discount',async () => {
  const input = packingSlipSetting.input({totalDiscountIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for tax',async () => {
  const input = packingSlipSetting.input({taxIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for total',async () => {
  const input = packingSlipSetting.input({totalIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for total shipping',async () => {
  const input = packingSlipSetting.input({totalShippingIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by enable ishide for total tax',async () => {
  const input = packingSlipSetting.input({totalTaxIsHide:packingSlipSettingData.hide})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for deliverTo', async () => {
  const input = packingSlipSetting.input({deliveredLabel:packingSlipSettingData.deliveredLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for discount',async () => {
  const input = packingSlipSetting.input({discountLabel:packingSlipSettingData.discountLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for orderFulfilledBy',async () => {
  const input = packingSlipSetting.input({orderFulfilledByLabel:packingSlipSettingData.discountLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for price',async () => {
  const input = packingSlipSetting.input({priceLabel:packingSlipSettingData.priceLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for product',async () => {
  const input = packingSlipSetting.input({productLabel:packingSlipSettingData.productLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for purchasedFrom',async () => {
  const input = packingSlipSetting.input({purchasedFromLabel:packingSlipSettingData.discountLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for quantity', async () => {
  const input = packingSlipSetting.input({quantityLabel:packingSlipSettingData.quantityLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for shipping', async () => {
  const input = packingSlipSetting.input({shippingLabel:packingSlipSettingData.shippingLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for sku',async () => {
  const input = packingSlipSetting.input({skuLabel:packingSlipSettingData.skuLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for subTotal',async () => {
  const input = packingSlipSetting.input({subTotalLabel:packingSlipSettingData.subTotalLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for totalDiscount',async () => {
  const input = packingSlipSetting.input({totalDiscountLabel:packingSlipSettingData.totalDiscountLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for tax', async () => {
  const input = packingSlipSetting.input({taxLabel:packingSlipSettingData.taxLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for total',async () => {
  const input = packingSlipSetting.input({totalLabel:packingSlipSettingData.totalLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for totalShipping', async () => {
  const input = packingSlipSetting.input({totalShippingLabel:packingSlipSettingData.totalShippingLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint with valid input in label for totalTax',async () => {
  const input = packingSlipSetting.input({totalTaxLabel:packingSlipSettingData.totalTaxLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update packing slip label setting endpoint by providing duplicate values in label',async () => {
  const input = packingSlipSetting.input({deliveredLabel:packingSlipSettingData.deliveredLabel,totalTaxLabel:packingSlipSettingData.deliveredLabel})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

Then('User should get an error duplicate date found in responce',  () => {
  assert.equal(response.data.data.updatePackingSlipLabelSetting.error,packingSlipSettingData.duplicateLabel );
});

When('User is hitting update packing slip label setting endpoint with valid input', async () => {
  const input = packingSlipSetting.input({})
  response = await I.sendMutation(packingSlipSetting.query,input,{},{token: loginData.token });
});

Then('User should get packing slip label setting error of unauthorized user in responce',  () => {
  assert.equal(response.data.data.updatePackingSlipLabelSetting.error,packingSlipSettingData.vendorError);
});
