
const faker = require("faker");

const label = faker.name.title();
const labeldeliverTo = faker.name.title();
const labeldiscount = faker.name.title();
const labelfulfillBy = faker.name.title();
const labelorderPayout = faker.name.title();
const labelorderTotal = faker.name.title();
const labelPrice = faker.name.title();
const labelproduct = faker.name.title();
const labelpurchaseFrom = faker.name.title();
const labelquantity = faker.name.title();
const labelsellerCommission = faker.name.title();
const labelshipping = faker.name.title();
const labelshippingPayout = faker.name.title();
const labelsku = faker.name.title();
const labelstatus = faker.name.title();
const labelsubtotal = faker.name.title();
const labeltax = faker.name.title();
const labeltotal = faker.name.title();
const labeltotalDeduction = faker.name.title();
const labeltotalDiscount = faker.name.title();
const labeltotalShipping = faker.name.title();
const labeltotalTax = faker.name.title();
module.exports ={
    invoiceLabelSettingData:{
        label,
        labeldeliverTo,
        labeldiscount,
        labelfulfillBy,
        labelorderPayout,
        labelorderTotal,
        labelPrice,
        labelproduct,
        labelpurchaseFrom,
        labelquantity,
        labelsellerCommission,
        labelshipping,
        labelshippingPayout,
        labelsku,
        labelstatus,
        labelsubtotal,
        labeltax,
        labeltotal,
        labeltotalDeduction,
        labeltotalDiscount,
        labeltotalShipping,
        labeltotalTax,
        sameLabelName:"Duplicate data found for label.",
        unauthorized:"You are not authorized to perform this action."
    }
}
