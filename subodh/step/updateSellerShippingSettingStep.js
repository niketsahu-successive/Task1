
const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { sellerShipping } = require("../../gqlQuery/sellerShipping/updateSellerShippingSetting");

// data
const { loginData } = require("../../data/login/loginData");
const { sellerShippingData } = require("../../data/sellerShipping/sellerShippingData");

When('User is hitting seller shipping setting for exclude shipping amount value as true', async() => {
    const input = sellerShipping.input({ isExcludeShippingAmount: sellerShippingData.enableExcludeShippingAmount });
    response = await I.sendMutation(sellerShipping.query, input, {}, { token: loginData.token });
});

Then('User should get seller shipping setting status as ok in response', () => {
    assert.equal(response.data.data.updateSellerShippingSetting.status, loginData.statusOk);
});

When('User is hitting seller shipping setting for exclude shipping amount value as false', async() => {
    const input = sellerShipping.input({ isExcludeShippingAmount: sellerShippingData.disableExcludeShippingAmount });
    response = await I.sendMutation(sellerShipping.query, input, {}, { token: loginData.token });
});

When('User is hitting seller shipping setting for exclude shipping amount value as null', async() => {
    const input = sellerShipping.input({ isExcludeShippingAmount: sellerShippingData.disableExcludeShippingAmount });
    response = await I.sendMutation(sellerShipping.query,input, {}, { token: loginData.token });
});

Then('User should get seller shipping setting error of You are not authorized to perform this action in response', () => {
    assert.equal(response.data.data.updateSellerShippingSetting.error, sellerShippingData.unauthorized);
});
