'use strict'
const store = require('./store')
const signUpSuccess = function (data) {
  $('.auth-message').text('Successfully signed up!')
  $('.signup').hide()
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('.auth-message').text('Error on sign up!')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (data) {
  $('.auth-message').text('Successfully signed in!')
  $('.directions').text('Directions: Click Start New Game to play!')
  store.user = data.user
  $('.signin').hide()
  $('.signup').hide()
  $('.changepassword').show()
  $('.signout').show()
  $('#games').show()
  $('#new-game').show()
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('.auth-message').text('Error on signing in! Please enter correct email and password.')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function () {
  $('.auth-message').text('Successfully changed password!')
  $('.changepassword').hide()
  $('#change-password').trigger('reset')
}

const changePasswordFailure = function () {
  $('.auth-message').text('Error on changing password!')
  $('#change-password').trigger('reset')
}

const signOutSuccess = function () {
  console.log('Successfully signed out!')
  $('.auth-message').text('Successfully signed out!')
  store.user = null
  $('.changepassword').hide()
  $('.signin').show()
  $('#sign-in').trigger('reset')
  $('.signup').show()
  $('.signout').hide()
  $('#games').hide()
  $('#new-game').hide()
  $('.container').hide()
  $('h1').text('Play Tic-Tac-Toe!')
}

const signOutFailure = function () {
  $('.auth-message').text('Error on signing out!')
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
