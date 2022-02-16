const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { updateWholesale } = require("../../gqlQuery/wholesaleSetting/updateWholesaleSetting.js");

// data
const { loginData } = require("../../data/login/loginData");
const { updateWholesaleSetting} = require("../../data/updateWholesaleSetting/updateWholesalesettingData.js");

When('User is hitting update wholesale setting endpoint for Wholesale price visible as true', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.enableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

Then('User should get customer status as ok in response', () => {
  assert.equal(response.data.data.updateWholesaleSetting.status, loginData.statusOk);
});

When('User is hitting update wholesale setting endpoint for wholesale price visible as false',async () => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.disableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

When('User is hitting update wholesale setting endpoint wholesale price visible as true', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.enableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

When('User is hitting update wholesale setting endpoint for wholesale price visible value as true', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.enableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

Then('User should get update wholesale setting error wholesale price setting is already enables in response', () => {
  assert.equal(response.data.data.updateWholesaleSetting.error, updateWholesaleSetting.alreadyEnabled);
});

When('User is hitting update wholesale setting endpoint for wholesale price visible as false', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.disableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

When('User is hitting update wholesale setting endpoint for wholesale price visible as true', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.enableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

When('User is hitting update wholesale setting endpoint for wholesale price visible value as false', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.disableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

Then('User should get update wholesale setting error wholesale price setting is already disabled in response', () => {
  assert.equal(response.data.data.updateWholesaleSetting.error, updateWholesaleSetting.disable);
});

When('User is hitting update wholesale setting endpoint with value as true', async() => {
  const input = updateWholesale.input({ isWholesalePriceVisible: updateWholesaleSetting.enableWholesalePrice });
  response = await I.sendMutation(updateWholesale.query, input, {}, { token: loginData.token })
});

Then('User should get update wholesale setting error of You are not authorized to perform this action in response', () => {
  assert.equal(response.data.data.updateWholesaleSetting.error, updateWholesaleSetting.unauthorized);
});
