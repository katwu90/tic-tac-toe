'use strict'
const store = require('./store')
const signUpSuccess = function (data) {
  $('.auth-message').text('Successfully signed up!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('.auth-message').text('Error on sign up!')
}

const signInSuccess = function (data) {
  $('.auth-message').text('Successfully signed in!')
  store.user = data.user
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}

const signInFailure = function () {
  $('.auth-message').text('Error on signing in!')
}

const changePasswordSuccess = function () {
  console.log('Successfully changed password!')
  $('.auth-message').text('Successfully password!')
  $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('.auth-message').text('Error on change password!')
}

const signOutSuccess = function () {
  console.log('Successfully signed out!')
  $('.auth-message').text('Successfully signed out!')
  store.user = null
  $('#change-password').hide()
  $('#sign-in').show()
}

const signOutFailure = function () {
  $('.auth-message').text('Error on change password!')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
