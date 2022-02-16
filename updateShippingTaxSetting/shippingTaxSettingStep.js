const { assert } = require("chai");
const I = require("../../customSteps");

//query
const{shippingTaxSetting} = require("../../gqlQuery/shippingTaxSetting/shippingTaxSetting");

//data
const {loginData} = require("../../data/login/loginData");
const {taxSettingData} = require("../../data/shippingTaxSetting/shippingTaxSettingData");

When('User is hitting update shipping tax setting endpoint with tax inclusive input as true', async () => {
    const input = shippingTaxSetting.input({})
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

Then('User should get update shipping tax setting status as ok in responce', () => {
    assert.equal(response.data.data.updateShippingTaxSetting.status, loginData.statusOk);
});

When('User is hitting update shipping tax setting endpoint with tax inclusive input as false valid input in value', async () => {
    const input = shippingTaxSetting.input({ isTaxInclusive:false })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

When('User is hitting update shipping tax setting endpoint with decimal input in value', async () => {
    const input = shippingTaxSetting.input({ value:taxSettingData.decimalValue })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

When('User is hitting update shipping tax setting endpoint with input in value upto two decimal places', async () => {
    const input = shippingTaxSetting.input({ value:taxSettingData.twoDecimalValue })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

When('User is hitting update shipping tax setting endpoint with input in value upto three decimal places', async () => {
    const input = shippingTaxSetting.input({ value:taxSettingData.threeDecimalValue })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

When('User is hitting update shipping tax setting endpoint with input in value more than three decimal places', async () => {
    const input = shippingTaxSetting.input({ value:taxSettingData.fourDecimalValue })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

Then('User should get update shipping tax setting error of value upto three decimal places is allowed in responce', () => {
    assert.equal(response.data.data.updateShippingTaxSetting.error, taxSettingData.errorfourDecimalPlaces);
});

When('User is hitting update shipping tax setting endpoint with tax inclusive input as false with value null', async () => {
    const input = shippingTaxSetting.input({ isTaxInclusive:false, value:null })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

When('User is hitting update shipping tax setting endpoint with input in value more then 100', async () => {
    const input = shippingTaxSetting.input({ isTaxInclusive:false, value:taxSettingData.outOfRangeValue })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

Then('User should get update shipping tax setting error of value is less than 100 in responce', () => {
    assert.equal(response.data.data.updateShippingTaxSetting.error, taxSettingData.valueError)
});

When('User is hitting update shipping tax setting endpoint with tax inclusive as null', async () => {
    const input = shippingTaxSetting.input({ isTaxInclusive:null })
    response = await I.sendMutation(shippingTaxSetting.query, input, {}, { token: loginData.token });
});

Then('User should get update shipping tax setting error of you are not authorized in responce', () => {
    assert.equal(response.data.data.updateShippingTaxSetting.error, taxSettingData.vendorError)
});
