'use strict'
const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./store')

let turnCount = 0
let player = 'x'
let gameStatus = 'active'

const checkWin = function (cells, player) {
  if (
    (cells[0] === player && cells[4] === player && cells[8] === player) ||
    (cells[2] === player && cells[4] === player && cells[6] === player) ||
    (cells[0] === player && cells[1] === player && cells[2] === player) ||
    (cells[3] === player && cells[4] === player && cells[5] === player) ||
    (cells[6] === player && cells[7] === player && cells[8] === player) ||
    (cells[0] === player && cells[3] === player && cells[6] === player) ||
    (cells[1] === player && cells[4] === player && cells[7] === player) ||
    (cells[2] === player && cells[5] === player && cells[8] === player)) {
    $('h1').text('Player ' + player + ' won!')
    gameStatus = 'inactive'
  } else if (turnCount === 9) {
    $('h1').text("It's a tie!")
    gameStatus = 'inactive'
  } else {
    console.log('keep going!')
  }
}

const game = function (event) {
  if (gameStatus === 'active' && $(event.target).text() === '') {
    if (turnCount % 2 === 0) {
      $(event.target).text('X')
      store.game.cells[$(event.target).attr('id')] = 'x'
      turnCount += 1
      player = 'x'
    } else {
      $(event.target).text('O')
      store.game.cells[$(event.target).attr('id')] = 'o'
      turnCount += 1
      player = 'o'
    }
    checkWin(store.game.cells, player)
  }
}

const startNewGame = function (event) {
  event.preventDefault()
  turnCount = 0
  player = 'x'
  gameStatus = 'active'
  $('.box').text('')
  $('h1').text('Play Tic-Tac-Toe!')
  gameApi.createGame()
    .then(gameUi.newGameSuccess)
    .catch(gameUi.newGameFailure)
}

module.exports = {
  game,
  startNewGame
}
