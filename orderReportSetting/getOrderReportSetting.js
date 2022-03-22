module.exports = {
    getOrderReportSetting: {
    query: `
    query getOrderReportSetting {
        getOrderReportSetting {
          status
          data {
            updatedAt  
            report {
              orderNumber {
                isHideCsv
                isHidePdf
                label
              }
              lineItemId {
                isHideCsv
                isHidePdf
                label
              }
              orderStatus {
                isHideCsv
                isHidePdf
                label
              }
              vendorAmount {
                isHideCsv
                isHidePdf
                label
              }
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
              grossSales {
                isHideCsv
                isHidePdf
                label
              }
              grossProfit {
                isHideCsv
                isHidePdf
                label
              }
              quantity {
                isHideCsv
                isHidePdf
                label
              }
              returns {
                isHideCsv
                isHidePdf
                label
              }
              shipping {
                isHideCsv
                isHidePdf
                label
              }
              totalSalesPrice {
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
