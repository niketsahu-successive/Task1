module.exports = {
  getProductReportSetting: {
    query: `
    query getProductReportSetting {
      getProductReportSetting {
        data {
          report {
            customerProductPrice {
              isHideCsv
              isHidePdf
              label
            }
            title {
              isHideCsv
              isHidePdf
              label
            }
            sku {
              isHideCsv
              isHidePdf
              label
            }
            markup {
              isHideCsv
              isHidePdf
              label
            }
            productCost {
              isHideCsv
              isHidePdf
              label
            }
            discount {
              isHideCsv
              isHidePdf
              label
            }
            productType {
              isHideCsv
              isHidePdf
              label
            }
            tax {
              isHideCsv
              isHidePdf
              label
            }
            vendor {
              isHideCsv
              isHidePdf
              label
            }
            price {
              isHideCsv
              isHidePdf
              label
            }
          }
          updatedAt
        }
        status
        error
      }
    }`,
  },
};
