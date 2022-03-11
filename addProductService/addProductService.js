// data
const { addServiceData } = require("../../data/addProductService/addProductServiceData");

module.exports = {
  addProductService: {
    query: `
    mutation addProductService($input: ServiceFieldInput) {
        addProductService(input: $input) {
          status
          data {
            _id
            name
            capacity
            duration
            frequency
            locationId
            type
            hour {
              mon {
                open
                close
              }
              tue {
                open
                close
              }
              wed {
                open
                close
              }
              thu {
                open
                close
              }
              fri {
                open
                close
              }
              sat {
                open
                close
              }
              sun {
                open
                close
              }
            }
          }
          error
        }
      }`,
    input: ({
      capacity = addServiceData.capacity,
      duration = addServiceData.duration,
      frequency = addServiceData.frequency,
      productId = "",
      locationId = "",
      type = addServiceData.type,
      monOpen = addServiceData.monOpen,
      monClose = addServiceData.monClose,
      tueOpen = addServiceData.tueOpen,
      tueClose = addServiceData.tueClose,
      wedOpen = addServiceData.wedOpen,
      wedClose = addServiceData.wedClose,
      thuOpen = addServiceData.thuOpen,
      thuClose = addServiceData.thuClose,
      friOpen = addServiceData.friOpen,
      friClose = addServiceData.friClose,
      satOpen = addServiceData.satOpen,
      satClose = addServiceData.satClose,
      sunOpen = addServiceData.sunOpen,
      sunClose = addServiceData.sunClose,
      serviceId = addServiceData.serviceId,
    }) => ({
      input: {
        capacity,
        duration,
        frequency,
        productId,
        type,
        serviceId,
        locationId,
        hour: {
          mon: {
            open: monOpen,
            close: monClose
          },
          tue: {
            open: tueOpen,
            close: tueClose
          },
          wed: {
            open: wedOpen,
            close: wedClose
          },
          thu: {
            open: thuOpen,
            close: thuClose
          },
          fri: {
            open: friOpen,
            close: friClose
          },
          sat: {
            open: satOpen,
            close: satClose
          },
          sun: {
            open: sunOpen,
            close: sunClose
          }
        }
      },
    }),
  },
};
