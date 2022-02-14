const { assert } = require("chai");
const I = require("../../customSteps");

//query
const{updateOrderSetting} = require("../../gqlQuery/orderSetting/orderSetting");

//data
const {loginData} = require("../../data/login/loginData");
const {orderSettingData} = require("../../data/orderSetting/orderSettingData");

When('User is hitting update order setting endpoint with accept order and fulfill order input as true',async () => {
    const input = updateOrderSetting.input({isFulfillOrder:orderSettingData.acceptOrder})
    response = await I.sendMutation(updateOrderSetting.query,input,{},{token: loginData.token });
});

Then('User should get update order setting status as ok in responce', () => {
    assert.equal(response.data.data.updateOrderSetting.status, loginData.statusOk);
});

When('User is hitting update order setting endpoint with accept order and fulfill order input as false', async () => {
    const input = updateOrderSetting.input({isAcceptOrder:orderSettingData.fulfillOrder})
    response = await I.sendMutation(updateOrderSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update order setting endpoint with accept order input as true and fulfill order input as false',async () => {
    const input = updateOrderSetting.input({})
    response = await I.sendMutation(updateOrderSetting.query,input,{},{token: loginData.token });
});

When('User is hitting update order setting endpoint with accept order input as false and fulfill order input as true', async () => {
    const input = updateOrderSetting.input({isAcceptOrder:orderSettingData.fulfillOrder,isFulfillOrder:orderSettingData.acceptOrder})
    response = await I.sendMutation(updateOrderSetting.query,input,{},{token: loginData.token });
});

Then('User should get update order setting error of enable auto accept first in responce', () => {
    assert.equal(response.data.data.updateOrderSetting.error, orderSettingData.enableAutoacept);
});
