module.exports = {
  getOrderExportSetting: {
  query: `
  query getOrderExportSetting {
      getOrderExportSetting {
        status
        data {
          updatedAt
          export {
            createdAt {
              isHideCsv
              isHidePdf
              label
            }
            fulfillmentStatus {
              isHideCsv
              isHidePdf
              label
            }
            lineItemId {
              isHideCsv
              isHidePdf
              label
            }
            orderId {
              isHideCsv
              isHidePdf
              label
            }
            markupPrice {
              isHideCsv
              isHidePdf
              label
            }
            orderNumber {
              isHideCsv
              isHidePdf
              label
            }
            orderStatus {
              isHideCsv
              isHidePdf
              label
            }
            price {
              isHideCsv
              isHidePdf
              label
            }
            product {
              isHideCsv
              isHidePdf
              label
            }
            quantity {
              isHideCsv
              isHidePdf
              label
            }
            vendor {
              isHideCsv
              isHidePdf
              label
            }
            wholesalePrice {
              isHideCsv
              isHidePdf
              label
            }
          }
        }
        error
      }
    }`,
},
};
