module.exports = {
  getPaymentReportSetting: {
    query: `
    query getPaymentReportSetting {
      getPaymentReportSetting {
        status
        data {
          report {
            sellerCommission {
              isHideCsv
              isHidePdf
              label
            }
            vendorPaymentStatus {
              isHideCsv
              isHidePdf
              label
            }
            vendorPaidDate {
              isHideCsv
              isHidePdf
              label
            }
          }
          updatedAt
        }
        error
      }
    }`,
  },
};
