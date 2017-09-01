'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./authEvents')
const gameEngine = require('./gameEngine')
$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Auth & Button event listeners
$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

// Game board event listeners
$(() => {
  $('.r1c1').on('click', gameEngine.game)
  $('.r1c2').on('click', gameEngine.game)
  $('.r1c3').on('click', gameEngine.game)
  $('.r2c1').on('click', gameEngine.game)
  $('.r2c2').on('click', gameEngine.game)
  $('.r2c3').on('click', gameEngine.game)
  $('.r3c1').on('click', gameEngine.game)
  $('.r3c2').on('click', gameEngine.game)
  $('.r3c3').on('click', gameEngine.game)
  $('#new-game').on('submit', gameEngine.startNewGame)
})
