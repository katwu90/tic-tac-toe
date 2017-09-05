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

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameFailure
}
