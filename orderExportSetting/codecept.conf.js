const envConfig = require("./utils/env");
const dbHelper = require("./helper/dbConnection");

exports.config = {
  output : "./output",
  helpers: {
    GraphQL: {
      endpoint: envConfig.GQL_URL,
    },
    REST: {
      endpoint : "",
      onRequest: (request) => {
        request.headers["Content-Type"] = "application/json";
      },
    },
  },
  include: {
    I: "./customSteps.js",
  },
  mocha    : {},
  bootstrap: async () => {
    await dbHelper.connectDb();
  },
  teardown: async () => {
    await dbHelper.closeDb();
  },
  hooks  : [],
  gherkin: {
    features: "./feature/*/getOrderExportSetting.feature",
    steps   : [
       "./step/login/loginStep.js",
   "./step/orderExportSetting/getOrderExportSettingStep.js"
],
  },

  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
  },
  name: "codecept",
};
