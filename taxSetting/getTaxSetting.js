//data
const { getTaxSettingData} = require("../../data/taxSetting/getTaxSettingData");

module.exports = {
  getTaxSetting: {
    query: `
    query getTaxSetting {
        getTaxSetting {
          data{
            commission {
              updatedAt
              value
            }
            shipping{
              updatedAt
              value
              isTaxInclusive
            }
          }
          status
          error
        }
      }`,
  },
};
