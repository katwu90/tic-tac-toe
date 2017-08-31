'use strict'
const getFormFields = require('../../lib/get-form-fields')
const authApi = require('./authApi')
const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  authApi.signUp(data)
  //   .then(ui.signUpSuccess)
  //   .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp
}
