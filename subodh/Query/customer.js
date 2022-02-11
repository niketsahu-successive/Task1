module.exports = {
    customerData: {
    query: `
    mutation  customer($input:CustomerData){
      customer(input:$input){
        status
        data
        error
        }
      }`,

    input: ({
     email="",
     phoneNumber="",
     isEmailChecked=false,
     isPhoneNumberChecked=false
    }) => ({
      input: {
        email,
        phoneNumber,
        isEmailChecked,
        isPhoneNumberChecked
      },
    }),
  },
};