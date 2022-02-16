// data
const { taxSettingData} = require("../../data/shippingTaxSetting/shippingTaxSettingData");

module.exports = {
  shippingTaxSetting: {
    query: `
      mutation updateShippingTaxSetting($input: UpdateShippingTaxSetting) {
        updateShippingTaxSetting(input: $input) {
          error
          data
          status
        }
      }`,

    input: ({
      isTaxInclusive = taxSettingData.isTaxInclusive,
      value = taxSettingData.value,
    }) => ({
      input: {
        shipping: {
          isTaxInclusive,
          value,
        }
      },
    }),
  },
};
