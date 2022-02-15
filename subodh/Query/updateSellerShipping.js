module.exports = {
    sellerShipping: {
    query: `
    mutation updateSellerShippingSetting($input:UpdateSellerSetting){
        updateSellerShippingSetting(input:$input){
          status
          data
          error
          }
        }`,

    input: ({
        isExcludeShippingAmount=sellerShippingData.enableExcludeShippingAmount
    }) => ({
      input: {
        isExcludeShippingAmount
      },
    }),
  },
};
