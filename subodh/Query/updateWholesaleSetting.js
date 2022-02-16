module.exports = {
    updateWholesale: {
      query: `
        mutation updateWholesaleSetting($input:WholesaleSetting) {
          updateWholesaleSetting(input:$input) {
            status
            data
            error
          }
        }`,
  
      input: ({
        isWholesalePriceVisible=updateWholesaleSetting.enableWholesalePrice
      }) => ({
        input: {
          isWholesalePriceVisible
        },
      }),
    },
  };
