'use strict'
const store = require('./store')

const newGameSuccess = function (data) {
  store.game = data.game
}

const newGameFailure = function () {
  console.log('failed to create new game')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
