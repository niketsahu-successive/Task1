module.exports = {
    getPackingSlipAccess: {
      query: `
      query getPackingSlipAccess {
        getPackingSlipAccess {
          status
          data {
            isEnabled
            isAllVendor
            isFulfilled
            selectedVendor
            updatedAt
          }
          error
        }
      } 
      `,
    },
  };
