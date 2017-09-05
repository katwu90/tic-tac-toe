'use strict'
const store = require('./store')
// const gameEngine = require('./gameEngine')

const newGameSuccess = function (data) {
  store.game = data.game
}

const newGameFailure = function () {
  console.log('Failed to create new game')
}

const updateGameFailure = function (err) {
  console.log(err)
}

const indexGameSuccess = function (data) {
  console.log(data)
  const totalcompletedgames = data.games.length
  $('.completed-games').text('You have played ' + totalcompletedgames + ' complete games!')
  console.log(totalcompletedgames)
}

const indexGameFailure = function (err) {
  console.log(err)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameFailure,
  indexGameSuccess,
  indexGameFailure
}
