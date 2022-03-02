const faker = require("faker");

const newLabel = faker.name.title();
module.exports = {
  paymentReportSettingData: {
    invalidToken : "Invalid token provided.",
    invalidString: "Invalid string",
    newLabel,
    seller       : "seller",
    sameLabelName: "Duplicate data found for label.",
    unauthorized : "You are not authorized to perform this action."
  }
}
