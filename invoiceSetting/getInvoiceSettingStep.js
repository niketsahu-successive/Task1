const { assert } = require("chai");
const I = require("../../customSteps");

// query
const { getInvoiceSetting } = require("../../gqlQuery/invoiceSetting/getInvoiceSetting");

// data
const { invoiceLabelSettingData } = require("../../data/invoice/invoiceSettingData");
const { loginData } = require("../../data/login/loginData");
const { collectionData } = require("../../data/collection/collectionData");

// helper
const dbHelper = require("../../helper/dbConnection");
const baseHelper = require("../../helper/base");

let response;
let invoiceData;

When("User is hitting invoice setting endpoint with valid token", async () => {
  response = await I.sendMutation(getInvoiceSetting.query, {}, {}, { token: loginData.token });
});

Then("User should get invoice setting status as ok in response", () => {
  assert.equal(response.data.data.getInvoiceSetting.status, loginData.statusOk);
});

When("User fetches invoice setting data from the database", async () => {
  const { _id, introductorySeller } = await baseHelper.getCurrentUser("introductorySeller");
  const sellerId = introductorySeller || _id;
  const projection = { "payment.invoice": 1 };
  const { payment = null } = await dbHelper.findOne(collectionData.sellerSetting, { sellerId }, projection);
  invoiceData = {
    payment: {
      invoice: {
        manage: {
          deliverTo        : payment ? (payment.invoice.manage.deliverTo || null) : null,
          discount         : payment ? (payment.invoice.manage.discount || null) : null,
          fulfillBy        : payment ? (payment.invoice.manage.fulfillBy || null) : null,
          orderPayout      : payment ? (payment.invoice.manage.orderPayout || null) : null,
          orderTotal       : payment ? (payment.invoice.manage.orderTotal || null) : null,
          price            : payment ? (payment.invoice.manage.price || null) : null,
          product          : payment ? (payment.invoice.manage.product || null) : null,
          purchaseFrom     : payment ? (payment.invoice.manage.purchaseFrom || null) : null,
          quantity         : payment ? (payment.invoice.manage.quantity || null) : null,
          sellerCommission : payment ? (payment.invoice.manage.sellerCommission || null) : null,
          shipping         : payment ? (payment.invoice.manage.shipping || null) : null,
          shippingPayout   : payment ? (payment.invoice.manage.shippingPayout || null) : null,
          sku              : payment ? (payment.invoice.manage.sku || null) : null,
          status           : payment ? (payment.invoice.manage.status || null) : null,
          subtotal         : payment ? (payment.invoice.manage.subtotal || null) : null,
          tax              : payment ? (payment.invoice.manage.tax || null) : null,
          total            : payment ? (payment.invoice.manage.total || null) : null,
          totalDiscount    : payment ? (payment.invoice.manage.totalDiscount || null) : null,
          totalDeduction   : payment ? (payment.invoice.manage.totalDeduction || null) : null,
          totalShipping    : payment ? (payment.invoice.manage.totalShipping || null) : null,
          totalTax         : payment ? (payment.invoice.manage.totalTax || null) : null,
          totalVendorPayout: payment ? (payment.invoice.manage.totalVendorPayout || null) : null,
          vendorAmount     : payment ? (payment.invoice.manage.vendorAmount || null) : null,
          createdAt        : payment ? payment.invoice.manage.createdAt.toISOString() : null,
          updatedAt        : payment ? payment.invoice.manage.updatedAt.toISOString() : null,
        },
        access: {
          isAllVendor   : payment ? (payment.invoice.access.isAllVendor || null) : null,
          isEnabled     : payment ? (payment.invoice.access.isEnabled || false) : null,
          selectedVendor: payment ? (payment.invoice.access.isEnabled || []) : null,
          updatedAt     : payment ? payment.invoice.access.updatedAt.toISOString() : null,
          createdAt     : payment ? payment.invoice.access.createdAt.toISOString() : null,
        } || null,
      },
    }
  };
});

Then("User should have same invoice setting data as data from the database", () => {
  assert.deepEqual(response.data.data.getInvoiceSetting.data, invoiceData);
});

When("User is hitting invoice setting endpoint with an invalid token", async () => {
  response = await I.sendMutation(getInvoiceSetting.query, {}, {}, {  token: invoiceLabelSettingData.invalidString });
});

Then("User should get invoice setting error of unauthorized user in response", () => {
  assert.equal(response.data.data.getInvoiceSetting.error, invoiceLabelSettingData.unauthorized);
});

Then("User should get invoice setting error of invalid token provided in response", () => {
  assert.equal(response.data.data.getInvoiceSetting.error, invoiceLabelSettingData.invalidToken);
});
