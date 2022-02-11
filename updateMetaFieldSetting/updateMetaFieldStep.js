const { assert } = require("chai");
const I = require("../../customSteps");

//query
const{updateMetafield} = require("../../gqlQuery/updateMetafield/updateMetafield");

//data
const { loginData } = require("../../data/login/loginData");
const { productSettingData } = require("../../data/updateMetafield/updateMetafieldData");

When('User is hitting update metafield setting endpoint with content type input as string', async () => {
  const input = updateMetafield.input({firstContentType:productSettingData.secondContentType,value:productSettingData.secondTypeValue})
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting status as ok in responce', () => {
  assert.equal(response.data.data.updateMetafield.status, loginData.statusOk);
});

When('User is hitting update metafield setting endpoint with content type input as measurement', async () => {
  const input = updateMetafield.input({});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

When('User is hitting update metafield setting endpoint with content type input as number',async () => {
  const input = updateMetafield.input({firstContentType:productSettingData.contentTypeNumber,value:productSettingData.secondTypeValue});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

When('User is hitting update metafield setting endpoint with invalid input in content type',async () => {
  const input = updateMetafield.input({firstContentType:productSettingData.invalidStringValue});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of invalid value provided in responce',() => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.invalidContentType);
});

When('User is hitting update metafield setting endpoint with content type number value upto two decimal places', async () => {
  const input = updateMetafield.input({value:productSettingData.twoDecimalValue,firstContentType:productSettingData.contentTypeNumber});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

When('User is hitting update metafield setting endpoint with content type text and value upto two decimal places',async () => {
  const input = updateMetafield.input({value:productSettingData.twoDecimalValue,firstContentType:productSettingData.secondContentType});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of invalid value provided for string in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.stringInvalidValue);
});

When('User is hitting update metafield setting endpoint with content type measurement and value upto two decimal places',async () => {
    const input = updateMetafield.input({value:productSettingData.twoDecimalValue});
    response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of invalid value provided for measurement in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.measurementInvalidValue);
});

When('User is hitting update metafield setting endpoint with content type number and value upto three decimal places', async () => {
  const input = updateMetafield.input({firstContentType:"number",value:productSettingData.threeDecimalValue});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of number value allowed upto two decimal place in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.threeDecimalPlaces);
});

When('User is hitting update metafield setting endpoint without content type',async () => {
  const input = updateMetafield.input({firstContentType:""});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of content type is required in responce',() => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.withoutContentType);
});

When('User is hitting update metafield setting endpoint without key', async () => {
  const input = updateMetafield.input({key:""});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of key is required in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.withoutKey);
});

When('User is hitting update metafield setting endpoint without namespace',async () => {
  const input = updateMetafield.input({namespace:""});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of namespace is required in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.withoutNameSpace);
});

When('User is hitting update metafield setting endpoint without value',async () => {
  const input = updateMetafield.input({value:""});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of value is required in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.withoutValue);
});

When('User is hitting update metafield setting endpoint without name', async () => {
  const input = updateMetafield.input({name:""});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of name is required in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.withoutName);
});

When('User is hitting update metafield setting endpoint with content type text and invalid input in value', async () => {
  const input = updateMetafield.input({firstContentType:productSettingData.secondContentType,value:productSettingData.invalidStringValue});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of invalid value provided for string in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.invalidTextValue);
});

When('User is hitting update metafield setting endpoint with content type number and invalid input in value', async () => {
  const input = updateMetafield.input({firstContentType:productSettingData.contentTypeNumber, value:productSettingData.invalidStringValue});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of invalid value provided for number in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.invalidNumberValue);
});

When('User is hitting update metafield setting endpoint with content type measurement and invalid input in value', async () => {
  const input = updateMetafield.input({value:productSettingData.measurementInvalidValue});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of invalid value provided for measurement in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.invalidMeasurementValue);
});

When('User is hitting update metafield setting endpoint with duplicate key value', async () => {
  const input = updateMetafield.input({secondKey:productSettingData.key,secondNameSpace:productSettingData.name ,secondContentType:productSettingData.secondContentType});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of duplicate key provided in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.duplicateKey);
});

When('User is hitting update metafield setting endpoint with duplicate namespace value', async () => {
  const input = updateMetafield.input({secondNameSpace:productSettingData.namespace,secondKey:productSettingData.secondKey,secondContentType:productSettingData.secondContentType});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

Then('User should get update metafield setting error of duplicate namespace provided in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.duplicateNamespace);
});

When('User is hitting update metafield setting endpoint with different input in key and namespace', async () => {
  const input = updateMetafield.input({secondContentType:productSettingData.secondContentType,
  secondKey:productSettingData.secondKey, secondNameSpace:productSettingData.secondNameSpace});
  response = await I.sendMutation(updateMetafield.query,input,{},{ token: loginData.token });
});

// for vendor
    
Then('User should get update metafield setting error of unauthorized user in responce', () => {
  assert.equal(response.data.data.updateMetafield.error, productSettingData.unauthorizedError);
    });
