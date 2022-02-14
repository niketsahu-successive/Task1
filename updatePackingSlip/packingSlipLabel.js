// data
const { packingSlipSettingData } = require("../../data/packingSlipLabel/packingSlipData");

module.exports = {
    packingSlipSetting: {
      query: `
      mutation updatePackingSlipLabelSetting($input:UpdatePackingSlipLabelSettingInput!){
        updatePackingSlipLabelSetting(input:$input){
          status
          data
          error
        }
      }`,
      input: ({
        deliveredToIsHide         = packingSlipSettingData.isHide,
        deliveredLabel            = "",
        discountIsHide            = packingSlipSettingData.isHide,
        discountLabel             = "",
        orderFulfilledByIsHide    = packingSlipSettingData.isHide,
        orderFulfilledByLabel     = "",
        priceIsHide               = packingSlipSettingData.isHide,
        priceLabel                = "",
        productIsHide             = packingSlipSettingData.isHide,
        productLabel              = "",
        purchasedFromIsHide       = packingSlipSettingData.isHide,
        purchasedFromLabel        = "",
        quantityIsHide            = packingSlipSettingData.isHide,
        quantityLabel             = "",
        shippingIsHide            = packingSlipSettingData.isHide,
        shippingLabel             = "",
        skuIsHide                 = packingSlipSettingData.isHide,
        skuLabel                  = "",
        subTotalIsHide            = packingSlipSettingData.isHide,
        subTotalLabel             = "",
        totalDiscountIsHide       = packingSlipSettingData.isHide,
        totalDiscountLabel        = "",
        taxIsHide                 = packingSlipSettingData.isHide,
        taxLabel                  = "",
        totalIsHide               = packingSlipSettingData.isHide,
        totalLabel                = "",
        totalShippingIsHide       = packingSlipSettingData.isHide,
        totalShippingLabel        = "",
        totalTaxIsHide            = packingSlipSettingData.isHide,
        totalTaxLabel             = "",

      }) => ({
        input: {
            "deliveredTo":{
                "isHide":deliveredToIsHide,
                "label": deliveredLabel
               },
             "discount":{ 
             "isHide" : discountIsHide,
             "label":discountLabel
             },
             "orderFulfilledBy": {
                "isHide":orderFulfilledByIsHide,
             "label": orderFulfilledByLabel
             },
             "price": {
                "isHide":priceIsHide,
             "label": priceLabel
             },
             "product": {
                "isHide":productIsHide,
             "label": productLabel
             },
             "purchasedFrom": {
                "isHide":purchasedFromIsHide,
             "label": purchasedFromLabel
             },
             "quantity": {
                "isHide":quantityIsHide,
             "label": quantityLabel
             },
             "shipping": {
                "isHide":shippingIsHide,
             "label": shippingLabel
             },
             "sku": {
                "isHide": skuIsHide,
             "label": skuLabel
             },
             "subTotal": {
                "isHide":subTotalIsHide,
             "label": subTotalLabel
             },
             "totalDiscount": {
                "isHide":totalDiscountIsHide,
             "label": totalDiscountLabel
             },
             "tax": {
                "isHide":taxIsHide,
             "label": taxLabel
             },
             "total": {
                "isHide": totalIsHide,
             "label": totalLabel
             },
             "totalShipping": {
                "isHide": totalShippingIsHide,
             "label": totalShippingLabel
             },
             "totalTax":{
                "isHide": totalTaxIsHide,
             "label": totalTaxLabel
             }
        },
      }),
    },
  };
  