
const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { invoiceLabelSetting } = require("../../gqlQuery/updateInvoice/updateInvoiceLabelSetting");

// data
const { loginData } = require("../../data/login/loginData");
const { invoiceLabelSettingData} = require("../../data/updateInvoice/updateInvoiceLabelSettingData");
const updateInvoiceLabelSetting = require("../../gqlQuery/updateInvoice/updateInvoiceLabelSetting");

When('User is hitting updating invoice label setting endpoint with all valid input', async() => {
    const input = invoiceLabelSetting.input({label: invoiceLabelSettingData.newLabel});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update invoice label setting status as ok in response', () => {
    assert.equal(response.data.data.updateInvoiceLabelSetting.status, loginData.statusOk);
});

When('User is hitting update invoice label setting endpoint with deliver to value as true', async() => {
    const input = invoiceLabelSetting.input({isHidedeliverTo:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update invoice label setting status as ok in response', () => {
    assert.equal(response.data.data.updateInvoiceLabelSetting.status, loginData.statusOk);
});

When('User is hitting update invoice label setting endpoint with discount value as true', async() => {
    const input = invoiceLabelSetting.input({isHidediscount:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with fulfillby value as true', async() => {
    const input = invoiceLabelSetting.input({isHidefulfillBy:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with orderPayout value as true', async() => {
    const input = invoiceLabelSetting.input({isHideorderPayout:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with orderTotal value as true', async() => {
    const input = invoiceLabelSetting.input({isHideorderTotal:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with price value as true', async() => {
    const input = invoiceLabelSetting.input({isHidePrice:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with product value as true', async() => {
    const input = invoiceLabelSetting.input({isHideproduct:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with purchaseFrom value as true', async() => {
    const input = invoiceLabelSetting.input({isHidepurchaseFrom:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with quantity value as true', async() => {
    const input = invoiceLabelSetting.input({isHidequantity:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with sellerCommission value as true', async() => {
    const input = invoiceLabelSetting.input({isHidesellerCommission:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with shippingPayout value as true', async() => {
    const input = invoiceLabelSetting.input({isHideshippingPayout:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with shipping value as true', async() => {
    const input = invoiceLabelSetting.input({isHideshipping:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with sku value as true', async() => {
    const input = invoiceLabelSetting.input({isHidesku:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with status value as true', async() => {
    const input = invoiceLabelSetting.input({isHidestatus:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with subtotal value as true', async() => {
    const input = invoiceLabelSetting.input({isHidesubtotal:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with tax value as true', async() => {
    const input = invoiceLabelSetting.input({isHidetax:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with total value as true', async() => {
    const input = invoiceLabelSetting.input({isHidetotal:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalDeduction value as true', async() => {
    const input = invoiceLabelSetting.input({isHidetotalDeduction:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalShipping value as true', async() => {
    const input = invoiceLabelSetting.input({isHidetotalShipping:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalTax value as true', async() => {
    const input = invoiceLabelSetting.input({isHidetotalTax:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with vendorAmount value as true', async() => {
    const input = invoiceLabelSetting.input({isHidetotalVendorPayout:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalVendorPayout value as true', async() => {
    const input = invoiceLabelSetting.input({isHidevendorAmount:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with deliver to with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with discount with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with fulfillby with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with orderPayout with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with orderTotal with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with price with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with product with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with purchaseFrom with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with quantity with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with sellerCommission with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with shippingPayout with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with shipping with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with sku with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with status with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with subtotal with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with tax with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with total with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalDeduction with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalShipping with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with totalTax with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with vendorAmount with a valid input in label', async() => {
    const input = invoiceLabelSetting.input({});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

When('User is hitting update invoice label setting endpoint with same label name as input', async() => {
    const input = invoiceLabelSetting.input({labelsellerCommission:invoiceLabelSettingData.labeldeliverTo});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update invoice label setting error of Duplicate data found for label in response', () => {
    assert.equal(response.data.data.updateInvoiceLabelSetting.error, invoiceLabelSettingData.sameLabelName);
});

When('User is hitting update invoice label setting endpoint with deliver to value as true', async() => {
    const input = invoiceLabelSetting.input({isHidedeliverTo:true});
    response = await I.sendMutation(invoiceLabelSetting.query,input,{},{ token: loginData.token });
});

Then('User should get update invoice label setting error of unauthorized user in response', () => {
    assert.equal(response.data.data.updateInvoiceLabelSetting.error, invoiceLabelSettingData.unauthorized);
});
