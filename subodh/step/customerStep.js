const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { customerData } = require("../../gqlQuery/customer/manageCustomer");

// data
const { loginData } = require("../../data/login/loginData");
const { manageCustomerData } = require("../../data/customer/customerData");

When('User is hitting customer endpoint with valid alternate email', async() => {
  const input = customerData.input({ isEmailChecked:true, email:manageCustomerData.email });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

Then('User should get customer status as ok in response', () => {
  assert.equal(response.data.data.customer.status, loginData.statusOk);
});

When('User is hitting customer endpoint with valid alternate phone number', async() => {
  const input = customerData.input({ isPhoneNumberChecked:true, phoneNumber:manageCustomerData.alternatePhoneNumber });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

When('User is hitting customer endpoint with email checked value as false', async() => {
  const input = customerData.input({});
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

When('User is hitting customer endpoint with phone number checked value as false', async() => {
  const input = customerData.input({});
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

When('User is hitting customer endpoint with phone number checked value as true', async() => {
  const input = customerData.input({ isPhoneNumberChecked:true });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

When('User is hitting customer endpoint without an alternate email', async() => {
  const input = customerData.input({ isEmailChecked:true, email:"" });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

Then('User should get customer error of email required in response', () => {
  assert.equal(response.data.data.customer.error, manageCustomerData.emailRequired);
});

When('User is hitting customer endpoint with alternate email and email checked value as false', async() => {
  const input = customerData.input({ email:manageCustomerData.email });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

Then('User should get customer error of cannot give alternate email in response', () => {
  assert.equal(response.data.data.customer.error, manageCustomerData.invalidEmail);
});

When('User is hitting customer endpoint with alternate phone number and phone number checked value as false', async() => {
  const input = customerData.input({ phoneNumber:manageCustomerData.phoneNumber });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

Then('User should get customer error of cannot give alternate phone number in response', () => {
  assert.equal(response.data.data.customer.error, manageCustomerData.phoneNumberHas);
});

When('User is hitting customer endpoint without local part of alternate email', async() => {
  const input = customerData.input({ isEmailChecked:true, email:"@yopmail.com" });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

Then('User should get customer error of invalid email in response', () => {
  assert.equal(response.data.data.customer.error, manageCustomerData.emailRequiredHss);
});

When('User is hitting customer endpoint with invalid local part of alternate email', async() => {
  const input = customerData.input({ isEmailChecked:true, email:"@yopmail.com" });
  response = await I.sendMutation(customerData.query,input,{},{ token: loginData.token });
});

When('User is hitting customer endpoint with invalid domain part of alternate email', async() => {
  const input = customerData.input({ isEmailChecked:true, email:"suraj@.com" });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

When('User is hitting customer endpoint without @ symbol in alternate email', async() => {
  const input = customerData.input({ isEmailChecked:true, email:"surajgmail.com" });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

When('User is hitting customer endpoint with alternate phone number greater than its max length', async() => {
  const input = customerData.input({ isPhoneNumberChecked:true, phoneNumber:"12345678987654321" });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});

Then('User should get customer error of length in between seven to fifteen characters in response', () => {
  assert.equal(response.data.data.customer.error, manageCustomerData.phoneNumberLength);
});

When('User is hitting customer endpoint with alternate phone number lesser than its min length', async() => {
  const input = customerData.input({ isPhoneNumberChecked:true, phoneNumber:"12345" });
  response = await I.sendMutation(customerData.query, input, {}, { token: loginData.token });
});
