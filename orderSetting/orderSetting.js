// data
const { orderSettingData } = require("../../data/orderSetting/orderSettingData");

module.exports = {
    updateOrderSetting: {
      query: `
      mutation updateOrderSetting($input:UpdateOrderSetting){
        updateOrderSetting(input:$input){
          status
         data{
          _id
        }
         error
        }
      }`,
      input: ({
        isAcceptOrder  = orderSettingData.acceptOrder,
        isFulfillOrder = orderSettingData.fulfillOrder,
      }) => ({
        input: {
            isAcceptOrder,
            isFulfillOrder,
        },
      }),
    },
  };
  