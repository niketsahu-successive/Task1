module.exports = {
  getInvoiceSetting: {
    query: `
    query getInvoiceSetting {
      getInvoiceSetting {
        status
        data {
          payment {
            invoice {
              access {
                createdAt
                isAllVendor
                isEnabled
                selectedVendor
                updatedAt
              }
              manage {
                createdAt 
                discount {
                  isHide
                  label
                }
                price {
                  isHide
                  label
                }
                shipping {
                  isHide
                  label
                }
                deliverTo {
                  isHide
                  label
                }
              fulfillBy {
                isHide
                label
              }
                orderPayout {
                  isHide
                  label
                }
                orderTotal {
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
                totalTax {
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
                totalDeduction {
                  isHide
                  label
                }
                totalVendorPayout {
                  isHide
                  label
                }
                status {
                  isHide
                  label
                }
                product {
                  isHide
                  label
                }
                quantity {
                  isHide
                  label
                }
                subtotal {
                  isHide
                  label
                }
                updatedAt 
                orderTotal {
                  isHide
                  label
                }
                orderPayout {
                  isHide
                  label
                }
                vendorAmount {
                  isHide
                  label
                }
                shippingPayout {
                  isHide
                  label
                }
                sku {
                  isHide
                  label
                }
                sellerCommission {
                  isHide
                  label
                }
                purchaseFrom {
                  isHide
                  label
                }
              }
            }
          }
        }
        error
      }
    }`,
  },
};
