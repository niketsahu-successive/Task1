module.exports = {
  getMetafieldSetting: {
    query: `
    query getMetafieldSetting {
      getMetafieldSetting {
        status
        data {
          metafield {
            contentType
            key
            name
            namespace
            value
          }
          updatedAt
        }
        error
      }
    }`,
  },
};
