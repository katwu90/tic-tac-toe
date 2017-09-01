'use strict'

const cells = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
let player = null
let gameStatus = 'active'

const displayX = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text('X')
  }
}

const displayO = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text('O')
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
    console.log('Player ' + player + ' won!')
    gameStatus = 'inactive'
  } else if (turnCount === 9) {
    console.log("It's a tie!")
    gameStatus = 'inactive'
  } else {
    console.log('Keep going!')
  }
}

const game = function (event) {
  if (gameStatus === 'active') {
    if (turnCount % 2 === 0) {
      displayX(event)
      cells[$(event.target).attr('id')] = 'x'
      turnCount += 1
      player = 'x'
    } else {
      displayO(event)
      cells[$(event.target).attr('id')] = 'o'
      turnCount += 1
      player = 'o'
    }
    checkWin(cells, player)
  }
}

const startNewGame = function (event) {
  turnCount = 0
  player = null
  $('.box').text('')
}

module.exports = {
  game,
  startNewGame
}
