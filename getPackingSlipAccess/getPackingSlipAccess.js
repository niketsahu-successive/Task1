module.exports = {
    getPackingSlipAccess: {
      query: `
      query getPackingSlipAccess {
        getPackingSlipAccess {
          status
          error
          data {
            isEnabled
            isAllVendor
            isFulfilled
            selectedVendor
            updatedAt
          }
        }
      }`,
    },
  };
