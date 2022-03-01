const faker = require("faker");

const newLabel = faker.name.title();
module.exports = {
  paymentReportSettingData: {
    newLabel,
    invalidToken : "Invalid token provided.",
    invalidString: "Invalid token",
    sameLabelName: "Duplicate data found for label.",
    unauthorized : "You are not authorized to perform this action."
  }
}
