
'use strict'
const store = require('./store')
// const gameEngine = require('./gameEngine')

const newGameSuccess = function (data) {
  store.game = data.game
}

const newGameFailure = function () {
  $('.auth-message').text('Failed to create new game')
}

const updateGameFailure = function () {
  $('.auth-message').text('Failed to update game')
}

const indexGameSuccess = function (data) {
  const totalcompletedgames = data.games.length
  $('.auth-message').text('You have played ' + totalcompletedgames + ' complete game(s)!')
}

const indexGameFailure = function () {
  $('.auth-message').text('Failed to get games played!')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameFailure,
  indexGameSuccess,
  indexGameFailure
}
