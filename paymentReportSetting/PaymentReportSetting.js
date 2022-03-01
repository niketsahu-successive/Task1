//data
const {paymentReportSettingData} = require("../../data/paymentReport/updatePaymentReportSettingData");

module.exports = {
  paymentReportSetting: {
    query: `
    mutation updatePaymentReportSetting($input: PaymentReportSetting) {
      updatePaymentReportSetting(input:$input) {
        status
        data
        error
      }
    }`,
    input: ({
      vendorPaymentStatusHideCsv = false, vendorPaymentStatusHidePdf = false, vendorPaymentStatusLabel = "",
      vendorPaidDateHideCsv = false, vendorPaidDateHidePdf = false, vendorPaidDateLabel = "",
      sellerCommissionHideCsv = false, sellerCommissionHidePdf = false, sellerCommissionLabel = "",
    }) => ({
      input: {
        vendorPaymentStatus: {
          isHideCsv: vendorPaymentStatusHideCsv,
          isHidePdf: vendorPaymentStatusHidePdf,
          label    : vendorPaymentStatusLabel
        },
        vendorPaidDate: {
          isHideCsv: vendorPaidDateHideCsv,
          isHidePdf: vendorPaidDateHidePdf,
          label    : vendorPaidDateLabel
        },
        sellerCommission: {
          isHideCsv: sellerCommissionHideCsv,
          isHidePdf: sellerCommissionHidePdf,
          label    : sellerCommissionLabel
        },
      },
    }),
  },
};
