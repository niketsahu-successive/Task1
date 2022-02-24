module.exports = {
  getProductFormSetting: {
    query: `
    query getProductFormSetting {
      getProductFormSetting {
        status
        data {
          barcode {
            label
            isRequired
          }
          catalog {
            label
            isRequired
          }
          comparePrice {
            label
            isRequired
          }
          createdAt
          description {
            label
            isRequired
          }
          discount {
            label
            isRequired
          }
          inventory {
            label
            isRequired
          }
          markup {
            label
            isRequired
          }
          physical {
            label
            isRequired
          }
          price {
            label
            isRequired
          }
          productType {
            label
            isRequired
          }
          quantity {
            label
            isRequired
          }
          sku {
            label
            isRequired
          }
          tags {
            label
            isRequired
          }
          title {
            label
            isRequired
          }
          updatedAt
          vendor {
            label
            isRequired
          }
          wholesalePrice {
            label
            isRequired
          }
        }
        error
      }
    }`,
  },
};
