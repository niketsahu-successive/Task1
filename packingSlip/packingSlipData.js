const faker                 = require("faker");
const label                 = faker.name.title();
const deliveredLabel        = faker.name.title();
const discountLabel         = faker.name.title();
const orderFulfilledByLabel = faker.name.title();
const priceLabel            = faker.name.title();
const productLabel          = faker.name.title();
const purchasedFromLabel    = faker.name.title();
const quantityLabel         = faker.name.title();
const shippingLabel         = faker.name.title();
const skuLabel              = faker.name.title();
const subTotalLabel         = faker.name.title();
const totalDiscountLabel    = faker.name.title();
const taxLabel              = faker.name.title();
const totalLabel            = faker.name.title();
const totalShippingLabel    = faker.name.title();
const totalTaxLabel         = faker.name.title();
module.exports = {
    packingSlipSettingData: {
        isHide: false,
        hide: true,
        duplicateLabel      : "Duplicate data found for label.",
        vendorError         : "You are not authorized to perform this action.",
        label,
        deliveredLabel,
        discountLabel,
        orderFulfilledByLabel,
        priceLabel,
        productLabel,
        purchasedFromLabel,
        quantityLabel,
        shippingLabel,
        skuLabel,
        subTotalLabel,
        totalDiscountLabel,
        taxLabel,
        totalLabel,
        totalShippingLabel,
        totalTaxLabel,
    }
}
