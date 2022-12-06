module.exports = {
    getPackingSlipSetting: {
    query: `
    query getPackingSlipSetting {
        getPackingSlipSetting {
          status
          data {
            createdAt
            deliveredTo {
              isHide
              label
            }
            discount {
              isHide
              label
            }
            orderFulfilledBy {
              isHide
              label
            }
            price {
              isHide
              label
            }
            product {
              isHide
              label
            }
            purchasedFrom {
              isHide
              label
            }
            quantity {
              isHide
              label
            }
            shipping {
              isHide
              label
            }
            sku {
              isHide
              label
            }
            subTotal {
              isHide
              label
            }
            tax {
              isHide
              label
            }
            total {
              isHide
              label
            }
            totalDiscount {
              isHide
              label
            }
            totalShipping {
              isHide
              label
            }
            totalTax {
              isHide
              label
            }
            updatedAt
          }
          error
        }
      }`,
 },
};
