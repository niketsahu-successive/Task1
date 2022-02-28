const faker = require("faker");

const newLabel = faker.name.title();
module.exports = {
  paymentReportSettingData: {
    newLabel,
    sameLabelName: "Duplicate data found for label.",
    invalidToken : "Invalid token provided.",
    unauthorized : "Invalid value provided in user.",
    invalidString: "Invalid token"
  }
}
