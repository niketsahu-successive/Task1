module.exports = {
  getWholesaleSetting: {
    query: `
      query getWholesaleSetting {
        getWholesaleSetting {
          status
          data {
            isWholesalePriceVisible
            updatedAt
          }
          error
        }
      }   
    `,
  },
};
