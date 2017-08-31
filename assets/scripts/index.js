'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./authEvents')
$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Auth event listeners
$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('new-game').on('submit', startNewGame)
})

// Game board event listeners
$(() => {
  $('.r1c1').on('click', game)
  $('.r1c2').on('click', game)
  $('.r1c3').on('click', game)
  $('.r2c1').on('click', game)
  $('.r2c2').on('click', game)
  $('.r2c3').on('click', game)
  $('.r3c1').on('click', game)
  $('.r3c2').on('click', game)
  $('.r3c3').on('click', game)
})

const displayX = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text('X')
  } else {
    console.log('click another box!')
  }
}

const displayO = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text('O')
  } else {
    console.log('click another box!')
  }
}

let cells = ['', '', '', '', '', '', '', '', '']
let turnCount = 0
let player = null
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
    console.log(turnCount)
    console.log(gameStatus)
  }
}

const startNewGame = function (event) {
  turnCount = 0
  player = null
  $('.box').text('')
}
