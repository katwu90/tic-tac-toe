'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const onBoardClick = require('./onBoardClick')
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
  console.log(event.target)
  if ($(event.target).text() === '') {
    $(event.target).text('X')
    console.log('you clicked!')
  } else {
    console.log('click another box!')
  }
}

const displayO = function (event) {
  console.log(event.target)
  if ($(event.target).text() === '') {
    $(event.target).text('O')
    console.log('you clicked!')
  } else {
    console.log('click another box!')
  }
}

let cells = ['', '', '', '', '', '', '', '', '']

const checkWin = function () {
  if (cells[0] === cells[4] === cells[8] ||
    cells[2] === cells[4] === cells[6] ||
    cells[0] === cells[1] === cells[2] ||
    cells[3] === cells[4] === cells[5] ||
    cells[6] === cells[7] === cells[8] ||
    cells[0] === cells[3] === cells[6] ||
    cells[1] === cells[4] === cells[7] ||
    cells[2] === cells[5] === cells[8]) {
    console.log('You WON')
  } else {
    console.log('keep trying')
  }
}

let turnCount = 0

const game = function (event) {
  if (turnCount % 2 === 0) {
    displayX(event)
    cells[$(event.target).attr('id')] = 'x'
    turnCount += 1
  } else {
    displayO(event)
    cells[$(event.target).attr('id')] = 'o'
    turnCount += 1
  }
  checkWin()
  console.log(cells)
}
