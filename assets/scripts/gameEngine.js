'use strict'
const gameApi = require('./gameApi')
const gameUi = require('./gameUi')
const store = require('./store')

let turnCount = 0

const gameData = {
  game: {
    cell: {
      index: null,
      value: 'x'
    },
    over: false
  }
}

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
    $('h1').text('Player ' + player + ' WON!')
    gameData.game.over = true
  } else if (turnCount === 9) {
    $('h1').text("It's a TIE!")
    gameData.game.over = true
  } else if (turnCount % 2 === 0) {
    $('h1').text("Player X's Turn")
  } else if (turnCount % 2 === 1) {
    $('h1').text("Player O's Turn")
  }
}

const game = function (event) {
  if (gameData.game.over === false && $(event.target).text() === '') {
    if (turnCount % 2 === 0) {
      $(event.target).text('X')
      gameData.game.cell.index = $(event.target).attr('id')
      gameData.game.cell.value = 'x'
    } else {
      $(event.target).text('O')
      gameData.game.cell.index = $(event.target).attr('id')
      gameData.game.cell.value = 'o'
    }
    turnCount += 1
    gameApi.updateGame(gameData)
      .then(updateGameSuccess)
      .catch(gameUi.updateGameFailure)
  }
}

const updateGameSuccess = function (data) {
  store.game = data.game
  checkWin(store.game.cells, gameData.game.cell.value)
}

const startNewGame = function (event) {
  event.preventDefault()
  turnCount = 0
  gameData.game.cell.value = 'x'
  gameData.game.over = false
  $('.box').text('')
  $('h1').text('Play Tic-Tac-Toe!')
  gameApi.createGame()
    .then(gameUi.newGameSuccess)
    .catch(gameUi.newGameFailure)
}

module.exports = {
  game,
  startNewGame,
  gameData
}
